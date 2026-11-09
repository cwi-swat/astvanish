package astvanish.demo.func;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.function.Function;

public class ExprsRun {
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
        return lhs <= rhs;
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
        return ((Function<List<Object>, Object>)env.get("fact")).apply(args);
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
            return eve$1(env);
        }
        return eve$5(env);
    }

    @SuppressWarnings("unchecked")
    public static Object eve$7(Map<String,Object> env) {
        return env.get("b");
    }

    @SuppressWarnings("unchecked")
    public static Object eve$8(Map<String,Object> env) {
        return Integer.parseInt("0");
    }

    @SuppressWarnings("unchecked")
    public static Object eve$9(Map<String,Object> env) {
        return Objects.equals(eve$7(env), eve$8(env));
    }

    @SuppressWarnings("unchecked")
    public static Object eve$10(Map<String,Object> env) {
        return env.get("a");
    }

    @SuppressWarnings("unchecked")
    public static Object eve$11(Map<String,Object> env) {
        int lhs = (int) eve$10(env);
        int rhs = (int) eve$7(env);
        return lhs % rhs;
    }

    @SuppressWarnings("unchecked")
    public static Object eve$12(Map<String,Object> env) {
        List<Object> args = new ArrayList<Object>();
        args.add(eve$7(env));
        args.add(eve$11(env));
        return ((Function<List<Object>, Object>)env.get("gcd")).apply(args);
    }

    @SuppressWarnings("unchecked")
    public static Object eve$13(Map<String,Object> env) {
        boolean cond = (boolean) eve$9(env);
        if (cond) {
            return eve$10(env);
        }
        return eve$12(env);
    }

    @SuppressWarnings("unchecked")
    public static Object eve$14(Map<String,Object> env) {
        return env.get("x");
    }

    @SuppressWarnings("unchecked")
    public static Object eve$15(Map<String,Object> env) {
        return env.get("y");
    }

    @SuppressWarnings("unchecked")
    public static Object eve$16(Map<String,Object> env) {
        int lhs = (int) eve$14(env);
        int rhs = (int) eve$15(env);
        return lhs + rhs;
    }

    @SuppressWarnings("unchecked")
    public static Object eve$17(Map<String,Object> env) {
        int lhs = (int) eve$14(env);
        int rhs = (int) eve$15(env);
        return lhs - rhs;
    }

    @SuppressWarnings("unchecked")
    public static Object eve$18(Map<String,Object> env) {
        return eve$17(env);
    }

    @SuppressWarnings("unchecked")
    public static Object eve$19(Map<String,Object> env) {
        return Integer.parseInt("2");
    }

    @SuppressWarnings("unchecked")
    public static Object eve$20(Map<String,Object> env) {
        int lhs = (int) eve$18(env);
        int rhs = (int) eve$19(env);
        return lhs / rhs;
    }

    @SuppressWarnings("unchecked")
    public static Object eve$21(Map<String,Object> env) {
        return env.get("s");
    }

    @SuppressWarnings("unchecked")
    public static Object eve$22(Map<String,Object> env) {
        return Integer.parseInt("10");
    }

    @SuppressWarnings("unchecked")
    public static Object eve$23(Map<String,Object> env) {
        int lhs = (int) eve$21(env);
        int rhs = (int) eve$22(env);
        return lhs >= rhs;
    }

    @SuppressWarnings("unchecked")
    public static Object eve$24(Map<String,Object> env) {
        return eve$23(env);
    }

    @SuppressWarnings("unchecked")
    public static Object eve$25(Map<String,Object> env) {
        boolean arg = (boolean) eve$24(env);
        return !arg;
    }

    @SuppressWarnings("unchecked")
    public static Object eve$26(Map<String,Object> env) {
        return !Objects.equals(eve$14(env), eve$15(env));
    }

    @SuppressWarnings("unchecked")
    public static Object eve$27(Map<String,Object> env) {
        int arg = (int) eve$14(env);
        return -arg;
    }

    @SuppressWarnings("unchecked")
    public static Object eve$28(Map<String,Object> env) {
        return Integer.parseInt("3");
    }

    @SuppressWarnings("unchecked")
    public static Object eve$29(Map<String,Object> env) {
        int arg = (int) eve$28(env);
        return -arg;
    }

    @SuppressWarnings("unchecked")
    public static Object eve$30(Map<String,Object> env) {
        int lhs = (int) eve$29(env);
        int rhs = (int) eve$8(env);
        return lhs + rhs;
    }

    @SuppressWarnings("unchecked")
    public static Object eve$31(Map<String,Object> env) {
        int lhs = (int) eve$27(env);
        int rhs = (int) eve$30(env);
        return lhs < rhs;
    }

    @SuppressWarnings("unchecked")
    public static Object eve$32(Map<String,Object> env) {
        boolean lhs = (boolean) eve$26(env);
        return lhs && (boolean) eve$31(env);
    }

    @SuppressWarnings("unchecked")
    public static Object eve$33(Map<String,Object> env) {
        boolean lhs = (boolean) eve$25(env);
        return lhs || (boolean) eve$32(env);
    }

    @SuppressWarnings("unchecked")
    public static Object eve$34(Map<String,Object> env) {
        return env.get("d");
    }

    @SuppressWarnings("unchecked")
    public static Object eve$35(Map<String,Object> env) {
        int lhs = (int) eve$21(env);
        int rhs = (int) eve$34(env);
        return lhs * rhs;
    }

    @SuppressWarnings("unchecked")
    public static Object eve$36(Map<String,Object> env) {
        int lhs = (int) eve$14(env);
        int rhs = (int) eve$28(env);
        return lhs % rhs;
    }

    @SuppressWarnings("unchecked")
    public static Object eve$37(Map<String,Object> env) {
        int lhs = (int) eve$35(env);
        int rhs = (int) eve$36(env);
        return lhs - rhs;
    }

    @SuppressWarnings("unchecked")
    public static Object eve$38(Map<String,Object> env) {
        List<Object> args = new ArrayList<Object>();
        args.add(eve$14(env));
        args.add(eve$15(env));
        return ((Function<List<Object>, Object>)env.get("gcd")).apply(args);
    }

    @SuppressWarnings("unchecked")
    public static Object eve$39(Map<String,Object> env) {
        return Integer.parseInt("5");
    }

    @SuppressWarnings("unchecked")
    public static Object eve$40(Map<String,Object> env) {
        List<Object> args = new ArrayList<Object>();
        args.add(eve$39(env));
        return ((Function<List<Object>, Object>)env.get("fact")).apply(args);
    }

    @SuppressWarnings("unchecked")
    public static Object eve$41(Map<String,Object> env) {
        int lhs = (int) eve$38(env);
        int rhs = (int) eve$40(env);
        return lhs + rhs;
    }

    @SuppressWarnings("unchecked")
    public static Object eve$42(Map<String,Object> env) {
        boolean cond = (boolean) eve$33(env);
        if (cond) {
            return eve$37(env);
        }
        return eve$41(env);
    }

    @SuppressWarnings("unchecked")
    public static Object eve$43(Map<String,Object> env) {
        Map<String,Object> letEnv = new HashMap<String,Object>(env);
        letEnv.put("d", eve$20(env));
        return eve$42(letEnv);
    }

    @SuppressWarnings("unchecked")
    public static Object eve$44(Map<String,Object> env) {
        Map<String,Object> letEnv = new HashMap<String,Object>(env);
        letEnv.put("s", eve$16(env));
        return eve$43(letEnv);
    }

    @SuppressWarnings("unchecked")
    public static Object eve$45(Map<String,Object> env) {
        int lhs = (int) eve$10(env);
        int rhs = (int) eve$8(env);
        return lhs > rhs;
    }

    @SuppressWarnings("unchecked")
    public static Object eve$46(Map<String,Object> env) {
        return Objects.equals(eve$45(env), true);
    }

    @SuppressWarnings("unchecked")
    public static Object eve$47(Map<String,Object> env) {
        int lhs = (int) eve$10(env);
        int rhs = (int) eve$8(env);
        return lhs < rhs;
    }

    @SuppressWarnings("unchecked")
    public static Object eve$48(Map<String,Object> env) {
        return eve$47(env);
    }

    @SuppressWarnings("unchecked")
    public static Object eve$49(Map<String,Object> env) {
        return !Objects.equals(false, eve$48(env));
    }

    @SuppressWarnings("unchecked")
    public static Object eve$50(Map<String,Object> env) {
        boolean lhs = (boolean) eve$46(env);
        return lhs && (boolean) eve$49(env);
    }

    @SuppressWarnings("unchecked")
    public static Object eve$51(Map<String,Object> env) {
        boolean cond = (boolean) eve$50(env);
        if (cond) {
            return eve$1(env);
        }
        return eve$8(env);
    }

    @SuppressWarnings("unchecked")
    public static Object eve$52(Map<String,Object> env) {
        List<Object> args = new ArrayList<Object>();
        args.add(eve$14(env));
        args.add(eve$15(env));
        return ((Function<List<Object>, Object>)env.get("test")).apply(args);
    }

    @SuppressWarnings("unchecked")
    public static Object eve$53(Map<String,Object> env) {
        return Integer.parseInt("1000");
    }

    @SuppressWarnings("unchecked")
    public static Object eve$54(Map<String,Object> env) {
        int lhs = (int) eve$52(env);
        int rhs = (int) eve$53(env);
        return lhs * rhs;
    }

    @SuppressWarnings("unchecked")
    public static Object eve$55(Map<String,Object> env) {
        List<Object> args = new ArrayList<Object>();
        args.add(eve$14(env));
        return ((Function<List<Object>, Object>)env.get("bools")).apply(args);
    }

    @SuppressWarnings("unchecked")
    public static Object eve$56(Map<String,Object> env) {
        return Integer.parseInt("100");
    }

    @SuppressWarnings("unchecked")
    public static Object eve$57(Map<String,Object> env) {
        int lhs = (int) eve$55(env);
        int rhs = (int) eve$56(env);
        return lhs * rhs;
    }

    @SuppressWarnings("unchecked")
    public static Object eve$58(Map<String,Object> env) {
        int lhs = (int) eve$54(env);
        int rhs = (int) eve$57(env);
        return lhs + rhs;
    }

    @SuppressWarnings("unchecked")
    public static Object eve$59(Map<String,Object> env) {
        return Integer.parseInt("7");
    }

    @SuppressWarnings("unchecked")
    public static Object eve$60(Map<String,Object> env) {
        int lhs = (int) eve$14(env);
        int rhs = (int) eve$59(env);
        return lhs * rhs;
    }

    @SuppressWarnings("unchecked")
    public static Object eve$61(Map<String,Object> env) {
        int lhs = (int) eve$15(env);
        int rhs = (int) eve$59(env);
        return lhs * rhs;
    }

    @SuppressWarnings("unchecked")
    public static Object eve$62(Map<String,Object> env) {
        List<Object> args = new ArrayList<Object>();
        args.add(eve$60(env));
        args.add(eve$61(env));
        return ((Function<List<Object>, Object>)env.get("gcd")).apply(args);
    }

    @SuppressWarnings("unchecked")
    public static Object eve$63(Map<String,Object> env) {
        int lhs = (int) eve$58(env);
        int rhs = (int) eve$62(env);
        return lhs + rhs;
    }

    @SuppressWarnings("unchecked")
    public static Object eve$64(Map<String,Object> env) {
        int lhs = (int) eve$14(env);
        int rhs = (int) eve$15(env);
        return lhs / rhs;
    }

    @SuppressWarnings("unchecked")
    public static Object eve$65(Map<String,Object> env) {
        return eve$64(env);
    }

    @SuppressWarnings("unchecked")
    public static Object eve$66(Map<String,Object> env) {
        int lhs = (int) eve$63(env);
        int rhs = (int) eve$65(env);
        return lhs - rhs;
    }

    @SuppressWarnings("unchecked")
    public static Object eve$67(Map<String,Object> env) {
        int lhs = (int) eve$27(env);
        int rhs = (int) eve$15(env);
        return lhs % rhs;
    }

    @SuppressWarnings("unchecked")
    public static Object eve$68(Map<String,Object> env) {
        return eve$67(env);
    }

    @SuppressWarnings("unchecked")
    public static Object eve$69(Map<String,Object> env) {
        int lhs = (int) eve$66(env);
        int rhs = (int) eve$68(env);
        return lhs - rhs;
    }

    @SuppressWarnings("unchecked")
    public static Object run(List<Object> args) {
        Map<String,Object> env = new HashMap<String,Object>();
        env.put("fact", new Function<List<Object>, Object>() {
                public Object apply(List<Object> args) {
                    Map<String,Object> myEnv = new HashMap<String,Object>(env);
                    List<Object> argsList = new ArrayList<Object>(args);
                    myEnv.put("n", argsList.remove(0));
                    return eve$6(myEnv);
                }
        });
        env.put("gcd", new Function<List<Object>, Object>() {
                public Object apply(List<Object> args) {
                    Map<String,Object> myEnv = new HashMap<String,Object>(env);
                    List<Object> argsList = new ArrayList<Object>(args);
                    myEnv.put("a", argsList.remove(0));
                    myEnv.put("b", argsList.remove(0));
                    return eve$13(myEnv);
                }
        });
        env.put("test", new Function<List<Object>, Object>() {
                public Object apply(List<Object> args) {
                    Map<String,Object> myEnv = new HashMap<String,Object>(env);
                    List<Object> argsList = new ArrayList<Object>(args);
                    myEnv.put("x", argsList.remove(0));
                    myEnv.put("y", argsList.remove(0));
                    return eve$44(myEnv);
                }
        });
        env.put("bools", new Function<List<Object>, Object>() {
                public Object apply(List<Object> args) {
                    Map<String,Object> myEnv = new HashMap<String,Object>(env);
                    List<Object> argsList = new ArrayList<Object>(args);
                    myEnv.put("a", argsList.remove(0));
                    return eve$51(myEnv);
                }
        });
        env.put("main", new Function<List<Object>, Object>() {
                public Object apply(List<Object> args) {
                    Map<String,Object> myEnv = new HashMap<String,Object>(env);
                    List<Object> argsList = new ArrayList<Object>(args);
                    myEnv.put("x", argsList.remove(0));
                    myEnv.put("y", argsList.remove(0));
                    return eve$69(myEnv);
                }
        });
        return ((Function<List<Object>, Object>)env.get("main")).apply(args);
    }
}