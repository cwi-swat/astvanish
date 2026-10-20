package astvanish;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.function.Function;


public class Func {
    

    @SuppressWarnings("unchecked")
    public static Object run(Tree $prog, Object[] args) {
        Map<String,Object> env = new HashMap<>();
        for (Tree d : (List<Tree>)$prog.get("defs")) {
            env.put(d.get("name").toString(), new Function<Object[], Object>() {
                public Object apply(Object[] args) {
                    Map<String,Object> myEnv = new HashMap<>(env);
                    List<Object> argsList = Arrays.asList(args);
                    for (Tree f: (List<Tree>)d.get("params")) {
                        myEnv.put(f.toString(), argsList.remove(0));
                    }
                    return eve((Tree) d.get("body"), myEnv);
                }
            });
        }
        return ((Function<Object[], Object>)env.get($prog.get("main").toString())).apply(args);
    }

    @SuppressWarnings("unchecked")
    public static Object eve(Tree $exp, Map<String,Object> env) {
        switch ($exp.tag()) {
            case "var": 
                return env.get($exp.get("name").toString());
            
            case "number": 
                return Integer.parseInt($exp.get("number").toString());
            
            case "mul": {
                int lhs = (int) eve((Tree) $exp.get("lhs"), env);
                int rhs = (int) eve((Tree) $exp.get("rhs"), env);
                return lhs * rhs;
            }
            
            case "sub": {
                int lhs = (int) eve((Tree) $exp.get("lhs"), env);
                int rhs = (int) eve((Tree) $exp.get("rhs"), env);
                return lhs - rhs;
            }
            
            case "gt": {
                int lhs = (int) eve((Tree) $exp.get("lhs"), env);
                int rhs = (int) eve((Tree) $exp.get("rhs"), env);
                return lhs > rhs;
            }
            
            case "ifThenElse": {
                boolean cond = (boolean) eve((Tree) $exp.get("cond"), env);
                if (cond) {
                    return eve((Tree) $exp.get("then"), env);
                }
                return eve((Tree) $exp.get("els"), env);
            }
            
            case "call": {
                List<Object> args = new ArrayList<>();
                for (Tree a: (List<Tree>)$exp.get("actuals")) {
                    args.add(eve(a, env));
                }
                return ((Function<Object[], Object>)env.get($exp.get("name").toString())).apply(args.toArray());
            }
        }

        return null;
    }
 
}
