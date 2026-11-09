package astvanish.demo.func;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;
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
            case "true": {
                return true;
            }
            case "false": {
                return false;
            }
            case "paren": {
                return eve(((Map<String,Object>) exp.get("arg")), env);
            }
            case "neg": {
                int arg = (int) eve(((Map<String,Object>) exp.get("arg")), env);
                return -arg;
            }
            case "not": {
                boolean arg = (boolean) eve(((Map<String,Object>) exp.get("arg")), env);
                return !arg;
            }
            case "mul": {
                int lhs = (int) eve(((Map<String,Object>) exp.get("lhs")), env);
                int rhs = (int) eve(((Map<String,Object>) exp.get("rhs")), env);
                return lhs * rhs;
            }
            case "div": {
                int lhs = (int) eve(((Map<String,Object>) exp.get("lhs")), env);
                int rhs = (int) eve(((Map<String,Object>) exp.get("rhs")), env);
                return lhs / rhs;
            }
            case "mod": {
                int lhs = (int) eve(((Map<String,Object>) exp.get("lhs")), env);
                int rhs = (int) eve(((Map<String,Object>) exp.get("rhs")), env);
                return lhs % rhs;
            }
            case "add": {
                int lhs = (int) eve(((Map<String,Object>) exp.get("lhs")), env);
                int rhs = (int) eve(((Map<String,Object>) exp.get("rhs")), env);
                return lhs + rhs;
            }
            case "sub": {
                int lhs = (int) eve(((Map<String,Object>) exp.get("lhs")), env);
                int rhs = (int) eve(((Map<String,Object>) exp.get("rhs")), env);
                return lhs - rhs;
            }
            case "lt": {
                int lhs = (int) eve(((Map<String,Object>) exp.get("lhs")), env);
                int rhs = (int) eve(((Map<String,Object>) exp.get("rhs")), env);
                return lhs < rhs;
            }
            case "leq": {
                int lhs = (int) eve(((Map<String,Object>) exp.get("lhs")), env);
                int rhs = (int) eve(((Map<String,Object>) exp.get("rhs")), env);
                return lhs <= rhs;
            }
            case "gt": {
                int lhs = (int) eve(((Map<String,Object>) exp.get("lhs")), env);
                int rhs = (int) eve(((Map<String,Object>) exp.get("rhs")), env);
                return lhs > rhs;
            }
            case "geq": {
                int lhs = (int) eve(((Map<String,Object>) exp.get("lhs")), env);
                int rhs = (int) eve(((Map<String,Object>) exp.get("rhs")), env);
                return lhs >= rhs;
            }
            case "eq": {
                return Objects.equals(eve(((Map<String,Object>) exp.get("lhs")), env), eve(((Map<String,Object>) exp.get("rhs")), env));
            }
            case "neq": {
                return !Objects.equals(eve(((Map<String,Object>) exp.get("lhs")), env), eve(((Map<String,Object>) exp.get("rhs")), env));
            }
            case "and": {
                boolean lhs = (boolean) eve(((Map<String,Object>) exp.get("lhs")), env);
                return lhs && (boolean) eve(((Map<String,Object>) exp.get("rhs")), env);
            }
            case "or": {
                boolean lhs = (boolean) eve(((Map<String,Object>) exp.get("lhs")), env);
                return lhs || (boolean) eve(((Map<String,Object>) exp.get("rhs")), env);
            }
            case "ifThenElse": {
                boolean cond = (boolean) eve(((Map<String,Object>) exp.get("cond")), env);
                if (cond) {
                    return eve(((Map<String,Object>) exp.get("then")), env);
                }
                return eve(((Map<String,Object>) exp.get("els")), env);
            }
            case "let": {
                Map<String,Object> letEnv = new HashMap<String,Object>(env);
                letEnv.put(exp.get("name").toString(), eve(((Map<String,Object>) exp.get("exp")), env));
                return eve(((Map<String,Object>) exp.get("body")), letEnv);
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