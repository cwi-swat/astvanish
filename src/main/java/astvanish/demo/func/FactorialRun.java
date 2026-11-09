package astvanish.demo.func;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.function.Function;

public class FactorialRun {
    @SuppressWarnings("unchecked")
    public static Object eve$0(Map<String,Object> env) {
        return env.get("n");
    }

    @SuppressWarnings("unchecked")
    public static Object eve$1(Map<String,Object> env) {
        return Integer.parseInt("1");
    }

    @SuppressWarnings("unchecked")
    public static Object eve$2(Map<String,Object> env) {
        int lhs = (int) eve$0(env);
        int rhs = (int) eve$1(env);
        return lhs > rhs;
    }

    @SuppressWarnings("unchecked")
    public static Object eve$3(Map<String,Object> env) {
        int lhs = (int) eve$0(env);
        int rhs = (int) eve$1(env);
        return lhs - rhs;
    }

    @SuppressWarnings("unchecked")
    public static Object eve$4(Map<String,Object> env) {
        List<Object> args = new ArrayList<Object>();
        args.add(eve$3(env));
        return ((Function<List<Object>, Object>)env.get("factorial")).apply(args);
    }

    @SuppressWarnings("unchecked")
    public static Object eve$5(Map<String,Object> env) {
        int lhs = (int) eve$0(env);
        int rhs = (int) eve$4(env);
        return lhs * rhs;
    }

    @SuppressWarnings("unchecked")
    public static Object eve$6(Map<String,Object> env) {
        boolean cond = (boolean) eve$2(env);
        if (cond) {
            return eve$5(env);
        }
        return eve$1(env);
    }

    @SuppressWarnings("unchecked")
    public static Object eve$7(Map<String,Object> env) {
        return Integer.parseInt("0");
    }

    @SuppressWarnings("unchecked")
    public static Object eve$8(Map<String,Object> env) {
        int lhs = (int) eve$0(env);
        int rhs = (int) eve$7(env);
        return lhs > rhs;
    }

    @SuppressWarnings("unchecked")
    public static Object eve$9(Map<String,Object> env) {
        return env.get("x");
    }

    @SuppressWarnings("unchecked")
    public static Object eve$10(Map<String,Object> env) {
        List<Object> args = new ArrayList<Object>();
        args.add(eve$9(env));
        args.add(eve$3(env));
        return ((Function<List<Object>, Object>)env.get("power")).apply(args);
    }

    @SuppressWarnings("unchecked")
    public static Object eve$11(Map<String,Object> env) {
        int lhs = (int) eve$9(env);
        int rhs = (int) eve$10(env);
        return lhs * rhs;
    }

    @SuppressWarnings("unchecked")
    public static Object eve$12(Map<String,Object> env) {
        boolean cond = (boolean) eve$8(env);
        if (cond) {
            return eve$11(env);
        }
        return eve$1(env);
    }

    @SuppressWarnings("unchecked")
    public static Object run(List<Object> args) {
        Map<String,Object> env = new HashMap<String,Object>();
        env.put("factorial", new Function<List<Object>, Object>() {
                public Object apply(List<Object> args) {
                    Map<String,Object> myEnv = new HashMap<String,Object>(env);
                    List<Object> argsList = new ArrayList<Object>(args);
                    myEnv.put("n", argsList.remove(0));
                    return eve$6(myEnv);
                }
        });
        env.put("power", new Function<List<Object>, Object>() {
                public Object apply(List<Object> args) {
                    Map<String,Object> myEnv = new HashMap<String,Object>(env);
                    List<Object> argsList = new ArrayList<Object>(args);
                    myEnv.put("x", argsList.remove(0));
                    myEnv.put("n", argsList.remove(0));
                    return eve$12(myEnv);
                }
        });
        return ((Function<List<Object>, Object>)env.get("power")).apply(args);
    }
}