package astvanish;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.function.Function;

import com.google.gson.*;

public class Func {
    
    // class Map<String,Object> extends HashMapMap<String, Object> {

    // }

    @SuppressWarnings("unchecked")
    public static void main(String[] args) throws IOException {
        String ast = readMyJson();

        System.out.println(ast);

        Gson gson = new Gson();
        Map obj = gson.fromJson(ast, Map.class);
        System.out.println(obj);
        System.out.println(obj.get("_tag"));
        System.out.println(obj.get("defs"));
        System.out.println(obj.get("defs").getClass());
        System.out.println(run(obj, List.of(2, 9)));
    }

    public static String readMyJson() throws IOException {
        return new String(Files.readAllBytes(Paths.get("src/main/rascal/astvanish/demo/func/factorial.json")));
    }

    @SuppressWarnings("unchecked")
    public static Object run(Map<String,Object> $prog, List<Object> args) {
        Map<String,Object> env = new HashMap<>();
        for (Map<String,Object> d : (List<Map<String,Object>>)$prog.get("defs")) {
            env.put(d.get("name").toString(), new Function<List<Object>, Object>() {
                public Object apply(List<Object> args) {
                    Map<String,Object> myEnv = new HashMap<>(env);
                    List<Object> argsList = new ArrayList<>(args);
                    for (String f: (List<String>)d.get("params")) {
                        myEnv.put(f.toString(), argsList.remove(0));
                    }
                    return eve((Map<String,Object>) d.get("body"), myEnv);
                }
            });
        }
        System.out.println($prog.get("main"));
        System.out.println(env.get($prog.get("main")));
        return ((Function<List<Object>, Object>)env.get($prog.get("main").toString())).apply(args);
    }

    @SuppressWarnings("unchecked")
    public static Object eve(Map<String,Object> $exp, Map<String,Object> env) {
        System.out.println($exp);
        switch ((String)$exp.get("_tag")) {
            case "var": 
                return env.get($exp.get("name").toString());
            
            case "number": 
                return Integer.parseInt($exp.get("number").toString());
            
            case "mul": {
                int lhs = (int) eve((Map<String,Object>) $exp.get("lhs"), env);
                int rhs = (int) eve((Map<String,Object>) $exp.get("rhs"), env);
                return lhs * rhs;
            }
            
            case "sub": {
                int lhs = (int) eve((Map<String,Object>) $exp.get("lhs"), env);
                int rhs = (int) eve((Map<String,Object>) $exp.get("rhs"), env);
                return lhs - rhs;
            }
            
            case "gt": {
                int lhs = (int) eve((Map<String,Object>) $exp.get("lhs"), env);
                int rhs = (int) eve((Map<String,Object>) $exp.get("rhs"), env);
                return lhs > rhs;
            }
            
            case "ifThenElse": {
                boolean cond = (boolean) eve((Map<String,Object>) $exp.get("cond"), env);
                if (cond) {
                    return eve((Map<String,Object>) $exp.get("then"), env);
                }
                return eve((Map<String,Object>) $exp.get("els"), env);
            }
            
            case "call": {
                List<Object> args = new ArrayList<>();
                for (Map<String,Object> a: (List<Map<String,Object>>)$exp.get("actuals")) {
                    args.add(eve(a, env));
                }
                return ((Function<List<Object>, Object>)env.get($exp.get("name").toString())).apply(args);
            }
        }

        return null;
    }
 
}
