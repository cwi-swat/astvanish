package astvanish;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.function.Function;

public class FuncInterp {

    @SuppressWarnings("unchecked")
    public static Object run(Map<String,Object> prog, List<Object> args) {
        Map<String,Object> env = new HashMap<String,Object>();
        for (Map<String,Object> d : ((List<Map<String,Object>>) prog.get("defs"))) {
            env.put(d.get("name").toString(), new Function<List<Object>, Object>() {
                    public Object apply(List<Object> args) {
                        Map<String,Object> myEnv = new HashMap<String,Object>(env);
                        List<Object> argsList = new ArrayList<Object>(args);
                        for (String f : ((List<String>) d.get("params"))) {
                            myEnv.put(f.toString(), argsList.remove(0));
                        }
                        return eve(((Map<String,Object>) d.get("body")), myEnv);
                    }
            });
        }
        return ((Function<List<Object>, Object>)env.get(prog.get("main").toString())).apply(args);
    }

    @SuppressWarnings("unchecked")
    public static Object eve(Map<String,Object> exp, Map<String,Object> env) {
        switch ((String) exp.get("_tag")) {
            case "var": {
                return env.get(exp.get("name").toString());
            }
            case "number": {
                return Integer.parseInt(exp.get("number").toString());
            }
            case "mul": {
                int lhs = (int) eve(((Map<String,Object>) exp.get("lhs")), env);
                int rhs = (int) eve(((Map<String,Object>) exp.get("rhs")), env);
                return lhs * rhs;
            }
            case "sub": {
                int lhs = (int) eve(((Map<String,Object>) exp.get("lhs")), env);
                int rhs = (int) eve(((Map<String,Object>) exp.get("rhs")), env);
                return lhs - rhs;
            }
            case "gt": {
                int lhs = (int) eve(((Map<String,Object>) exp.get("lhs")), env);
                int rhs = (int) eve(((Map<String,Object>) exp.get("rhs")), env);
                return lhs > rhs;
            }
            case "ifThenElse": {
                boolean cond = (boolean) eve(((Map<String,Object>) exp.get("cond")), env);
                if (cond) {
                    return eve(((Map<String,Object>) exp.get("then")), env);
                }
                return eve(((Map<String,Object>) exp.get("els")), env);
            }
            case "call": {
                List<Object> args = new ArrayList<Object>();
                for (Map<String,Object> a : ((List<Map<String,Object>>) exp.get("actuals"))) {
                    args.add(eve(a, env));
                }
                return ((Function<List<Object>, Object>)env.get(exp.get("name").toString())).apply(args);
            }
        }
        return null;
    }

}