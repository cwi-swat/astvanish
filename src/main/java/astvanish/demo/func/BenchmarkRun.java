package astvanish.demo.func;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.function.Function;

public class BenchmarkRun {
    @SuppressWarnings("unchecked")
    public static Object eve$0(Map<String,Object> env) {
        return env.get("n");
    }

    @SuppressWarnings("unchecked")
    public static Object eve$1(Map<String,Object> env) {
        return Integer.parseInt("2");
    }

    @SuppressWarnings("unchecked")
    public static Object eve$2(Map<String,Object> env) {
        int lhs = (int) eve$0(env);
        int rhs = (int) eve$1(env);
        return lhs < rhs;
    }

    @SuppressWarnings("unchecked")
    public static Object eve$3(Map<String,Object> env) {
        return Integer.parseInt("1");
    }

    @SuppressWarnings("unchecked")
    public static Object eve$4(Map<String,Object> env) {
        int lhs = (int) eve$0(env);
        int rhs = (int) eve$3(env);
        return lhs - rhs;
    }

    @SuppressWarnings("unchecked")
    public static Object eve$5(Map<String,Object> env) {
        List<Object> args = new ArrayList<Object>();
        args.add(eve$4(env));
        return ((Function<List<Object>, Object>)env.get("fib")).apply(args);
    }

    @SuppressWarnings("unchecked")
    public static Object eve$6(Map<String,Object> env) {
        int lhs = (int) eve$0(env);
        int rhs = (int) eve$1(env);
        return lhs - rhs;
    }

    @SuppressWarnings("unchecked")
    public static Object eve$7(Map<String,Object> env) {
        List<Object> args = new ArrayList<Object>();
        args.add(eve$6(env));
        return ((Function<List<Object>, Object>)env.get("fib")).apply(args);
    }

    @SuppressWarnings("unchecked")
    public static Object eve$8(Map<String,Object> env) {
        int lhs = (int) eve$5(env);
        int rhs = (int) eve$7(env);
        return lhs + rhs;
    }

    @SuppressWarnings("unchecked")
    public static Object eve$9(Map<String,Object> env) {
        boolean cond = (boolean) eve$2(env);
        if (cond) {
            return eve$0(env);
        }
        return eve$8(env);
    }

    @SuppressWarnings("unchecked")
    public static Object eve$10(Map<String,Object> env) {
        return env.get("y");
    }

    @SuppressWarnings("unchecked")
    public static Object eve$11(Map<String,Object> env) {
        return env.get("x");
    }

    @SuppressWarnings("unchecked")
    public static Object eve$12(Map<String,Object> env) {
        int lhs = (int) eve$10(env);
        int rhs = (int) eve$11(env);
        return lhs < rhs;
    }

    @SuppressWarnings("unchecked")
    public static Object eve$13(Map<String,Object> env) {
        return eve$12(env);
    }

    @SuppressWarnings("unchecked")
    public static Object eve$14(Map<String,Object> env) {
        boolean arg = (boolean) eve$13(env);
        return !arg;
    }

    @SuppressWarnings("unchecked")
    public static Object eve$15(Map<String,Object> env) {
        return env.get("z");
    }

    @SuppressWarnings("unchecked")
    public static Object eve$16(Map<String,Object> env) {
        int lhs = (int) eve$11(env);
        int rhs = (int) eve$3(env);
        return lhs - rhs;
    }

    @SuppressWarnings("unchecked")
    public static Object eve$17(Map<String,Object> env) {
        List<Object> args = new ArrayList<Object>();
        args.add(eve$16(env));
        args.add(eve$10(env));
        args.add(eve$15(env));
        return ((Function<List<Object>, Object>)env.get("tak")).apply(args);
    }

    @SuppressWarnings("unchecked")
    public static Object eve$18(Map<String,Object> env) {
        int lhs = (int) eve$10(env);
        int rhs = (int) eve$3(env);
        return lhs - rhs;
    }

    @SuppressWarnings("unchecked")
    public static Object eve$19(Map<String,Object> env) {
        List<Object> args = new ArrayList<Object>();
        args.add(eve$18(env));
        args.add(eve$15(env));
        args.add(eve$11(env));
        return ((Function<List<Object>, Object>)env.get("tak")).apply(args);
    }

    @SuppressWarnings("unchecked")
    public static Object eve$20(Map<String,Object> env) {
        int lhs = (int) eve$15(env);
        int rhs = (int) eve$3(env);
        return lhs - rhs;
    }

    @SuppressWarnings("unchecked")
    public static Object eve$21(Map<String,Object> env) {
        List<Object> args = new ArrayList<Object>();
        args.add(eve$20(env));
        args.add(eve$11(env));
        args.add(eve$10(env));
        return ((Function<List<Object>, Object>)env.get("tak")).apply(args);
    }

    @SuppressWarnings("unchecked")
    public static Object eve$22(Map<String,Object> env) {
        List<Object> args = new ArrayList<Object>();
        args.add(eve$17(env));
        args.add(eve$19(env));
        args.add(eve$21(env));
        return ((Function<List<Object>, Object>)env.get("tak")).apply(args);
    }

    @SuppressWarnings("unchecked")
    public static Object eve$23(Map<String,Object> env) {
        boolean cond = (boolean) eve$14(env);
        if (cond) {
            return eve$15(env);
        }
        return eve$22(env);
    }

    @SuppressWarnings("unchecked")
    public static Object eve$24(Map<String,Object> env) {
        return Objects.equals(eve$0(env), eve$3(env));
    }

    @SuppressWarnings("unchecked")
    public static Object eve$25(Map<String,Object> env) {
        return env.get("steps");
    }

    @SuppressWarnings("unchecked")
    public static Object eve$26(Map<String,Object> env) {
        int lhs = (int) eve$0(env);
        int rhs = (int) eve$1(env);
        return lhs % rhs;
    }

    @SuppressWarnings("unchecked")
    public static Object eve$27(Map<String,Object> env) {
        return Integer.parseInt("0");
    }

    @SuppressWarnings("unchecked")
    public static Object eve$28(Map<String,Object> env) {
        return Objects.equals(eve$26(env), eve$27(env));
    }

    @SuppressWarnings("unchecked")
    public static Object eve$29(Map<String,Object> env) {
        int lhs = (int) eve$0(env);
        int rhs = (int) eve$1(env);
        return lhs / rhs;
    }

    @SuppressWarnings("unchecked")
    public static Object eve$30(Map<String,Object> env) {
        int lhs = (int) eve$25(env);
        int rhs = (int) eve$3(env);
        return lhs + rhs;
    }

    @SuppressWarnings("unchecked")
    public static Object eve$31(Map<String,Object> env) {
        List<Object> args = new ArrayList<Object>();
        args.add(eve$29(env));
        args.add(eve$30(env));
        return ((Function<List<Object>, Object>)env.get("collatz")).apply(args);
    }

    @SuppressWarnings("unchecked")
    public static Object eve$32(Map<String,Object> env) {
        return Integer.parseInt("3");
    }

    @SuppressWarnings("unchecked")
    public static Object eve$33(Map<String,Object> env) {
        int lhs = (int) eve$32(env);
        int rhs = (int) eve$0(env);
        return lhs * rhs;
    }

    @SuppressWarnings("unchecked")
    public static Object eve$34(Map<String,Object> env) {
        int lhs = (int) eve$33(env);
        int rhs = (int) eve$3(env);
        return lhs + rhs;
    }

    @SuppressWarnings("unchecked")
    public static Object eve$35(Map<String,Object> env) {
        List<Object> args = new ArrayList<Object>();
        args.add(eve$34(env));
        args.add(eve$30(env));
        return ((Function<List<Object>, Object>)env.get("collatz")).apply(args);
    }

    @SuppressWarnings("unchecked")
    public static Object eve$36(Map<String,Object> env) {
        boolean cond = (boolean) eve$28(env);
        if (cond) {
            return eve$31(env);
        }
        return eve$35(env);
    }

    @SuppressWarnings("unchecked")
    public static Object eve$37(Map<String,Object> env) {
        boolean cond = (boolean) eve$24(env);
        if (cond) {
            return eve$25(env);
        }
        return eve$36(env);
    }

    @SuppressWarnings("unchecked")
    public static Object eve$38(Map<String,Object> env) {
        return env.get("d");
    }

    @SuppressWarnings("unchecked")
    public static Object eve$39(Map<String,Object> env) {
        int lhs = (int) eve$38(env);
        int rhs = (int) eve$38(env);
        return lhs * rhs;
    }

    @SuppressWarnings("unchecked")
    public static Object eve$40(Map<String,Object> env) {
        int lhs = (int) eve$39(env);
        int rhs = (int) eve$0(env);
        return lhs > rhs;
    }

    @SuppressWarnings("unchecked")
    public static Object eve$41(Map<String,Object> env) {
        int lhs = (int) eve$0(env);
        int rhs = (int) eve$38(env);
        return lhs % rhs;
    }

    @SuppressWarnings("unchecked")
    public static Object eve$42(Map<String,Object> env) {
        return !Objects.equals(eve$41(env), eve$27(env));
    }

    @SuppressWarnings("unchecked")
    public static Object eve$43(Map<String,Object> env) {
        int lhs = (int) eve$38(env);
        int rhs = (int) eve$3(env);
        return lhs + rhs;
    }

    @SuppressWarnings("unchecked")
    public static Object eve$44(Map<String,Object> env) {
        List<Object> args = new ArrayList<Object>();
        args.add(eve$0(env));
        args.add(eve$43(env));
        return ((Function<List<Object>, Object>)env.get("noDivisor")).apply(args);
    }

    @SuppressWarnings("unchecked")
    public static Object eve$45(Map<String,Object> env) {
        boolean lhs = (boolean) eve$42(env);
        return lhs && (boolean) eve$44(env);
    }

    @SuppressWarnings("unchecked")
    public static Object eve$46(Map<String,Object> env) {
        boolean lhs = (boolean) eve$40(env);
        return lhs || (boolean) eve$45(env);
    }

    @SuppressWarnings("unchecked")
    public static Object eve$47(Map<String,Object> env) {
        int lhs = (int) eve$0(env);
        int rhs = (int) eve$1(env);
        return lhs >= rhs;
    }

    @SuppressWarnings("unchecked")
    public static Object eve$48(Map<String,Object> env) {
        List<Object> args = new ArrayList<Object>();
        args.add(eve$0(env));
        args.add(eve$1(env));
        return ((Function<List<Object>, Object>)env.get("noDivisor")).apply(args);
    }

    @SuppressWarnings("unchecked")
    public static Object eve$49(Map<String,Object> env) {
        boolean lhs = (boolean) eve$47(env);
        return lhs && (boolean) eve$48(env);
    }

    @SuppressWarnings("unchecked")
    public static Object eve$50(Map<String,Object> env) {
        return env.get("lo");
    }

    @SuppressWarnings("unchecked")
    public static Object eve$51(Map<String,Object> env) {
        return env.get("hi");
    }

    @SuppressWarnings("unchecked")
    public static Object eve$52(Map<String,Object> env) {
        int lhs = (int) eve$50(env);
        int rhs = (int) eve$51(env);
        return lhs >= rhs;
    }

    @SuppressWarnings("unchecked")
    public static Object eve$53(Map<String,Object> env) {
        List<Object> args = new ArrayList<Object>();
        args.add(eve$50(env));
        args.add(eve$27(env));
        return ((Function<List<Object>, Object>)env.get("collatz")).apply(args);
    }

    @SuppressWarnings("unchecked")
    public static Object eve$54(Map<String,Object> env) {
        int lhs = (int) eve$50(env);
        int rhs = (int) eve$51(env);
        return lhs + rhs;
    }

    @SuppressWarnings("unchecked")
    public static Object eve$55(Map<String,Object> env) {
        return eve$54(env);
    }

    @SuppressWarnings("unchecked")
    public static Object eve$56(Map<String,Object> env) {
        int lhs = (int) eve$55(env);
        int rhs = (int) eve$1(env);
        return lhs / rhs;
    }

    @SuppressWarnings("unchecked")
    public static Object eve$57(Map<String,Object> env) {
        return env.get("mid");
    }

    @SuppressWarnings("unchecked")
    public static Object eve$58(Map<String,Object> env) {
        List<Object> args = new ArrayList<Object>();
        args.add(eve$50(env));
        args.add(eve$57(env));
        return ((Function<List<Object>, Object>)env.get("sumCollatz")).apply(args);
    }

    @SuppressWarnings("unchecked")
    public static Object eve$59(Map<String,Object> env) {
        int lhs = (int) eve$57(env);
        int rhs = (int) eve$3(env);
        return lhs + rhs;
    }

    @SuppressWarnings("unchecked")
    public static Object eve$60(Map<String,Object> env) {
        List<Object> args = new ArrayList<Object>();
        args.add(eve$59(env));
        args.add(eve$51(env));
        return ((Function<List<Object>, Object>)env.get("sumCollatz")).apply(args);
    }

    @SuppressWarnings("unchecked")
    public static Object eve$61(Map<String,Object> env) {
        int lhs = (int) eve$58(env);
        int rhs = (int) eve$60(env);
        return lhs + rhs;
    }

    @SuppressWarnings("unchecked")
    public static Object eve$62(Map<String,Object> env) {
        Map<String,Object> letEnv = new HashMap<String,Object>(env);
        letEnv.put("mid", eve$56(env));
        return eve$61(letEnv);
    }

    @SuppressWarnings("unchecked")
    public static Object eve$63(Map<String,Object> env) {
        boolean cond = (boolean) eve$52(env);
        if (cond) {
            return eve$53(env);
        }
        return eve$62(env);
    }

    @SuppressWarnings("unchecked")
    public static Object eve$64(Map<String,Object> env) {
        List<Object> args = new ArrayList<Object>();
        args.add(eve$50(env));
        return ((Function<List<Object>, Object>)env.get("isPrime")).apply(args);
    }

    @SuppressWarnings("unchecked")
    public static Object eve$65(Map<String,Object> env) {
        return Objects.equals(eve$64(env), true);
    }

    @SuppressWarnings("unchecked")
    public static Object eve$66(Map<String,Object> env) {
        boolean cond = (boolean) eve$65(env);
        if (cond) {
            return eve$3(env);
        }
        return eve$27(env);
    }

    @SuppressWarnings("unchecked")
    public static Object eve$67(Map<String,Object> env) {
        return eve$66(env);
    }

    @SuppressWarnings("unchecked")
    public static Object eve$68(Map<String,Object> env) {
        List<Object> args = new ArrayList<Object>();
        args.add(eve$50(env));
        args.add(eve$57(env));
        return ((Function<List<Object>, Object>)env.get("countPrimes")).apply(args);
    }

    @SuppressWarnings("unchecked")
    public static Object eve$69(Map<String,Object> env) {
        List<Object> args = new ArrayList<Object>();
        args.add(eve$59(env));
        args.add(eve$51(env));
        return ((Function<List<Object>, Object>)env.get("countPrimes")).apply(args);
    }

    @SuppressWarnings("unchecked")
    public static Object eve$70(Map<String,Object> env) {
        int lhs = (int) eve$68(env);
        int rhs = (int) eve$69(env);
        return lhs + rhs;
    }

    @SuppressWarnings("unchecked")
    public static Object eve$71(Map<String,Object> env) {
        Map<String,Object> letEnv = new HashMap<String,Object>(env);
        letEnv.put("mid", eve$56(env));
        return eve$70(letEnv);
    }

    @SuppressWarnings("unchecked")
    public static Object eve$72(Map<String,Object> env) {
        boolean cond = (boolean) eve$52(env);
        if (cond) {
            return eve$67(env);
        }
        return eve$71(env);
    }

    @SuppressWarnings("unchecked")
    public static Object eve$73(Map<String,Object> env) {
        int lhs = (int) eve$11(env);
        int rhs = (int) eve$27(env);
        return lhs <= rhs;
    }

    @SuppressWarnings("unchecked")
    public static Object eve$74(Map<String,Object> env) {
        int arg = (int) eve$11(env);
        return -arg;
    }

    @SuppressWarnings("unchecked")
    public static Object eve$75(Map<String,Object> env) {
        boolean cond = (boolean) eve$73(env);
        if (cond) {
            return eve$74(env);
        }
        return eve$11(env);
    }

    @SuppressWarnings("unchecked")
    public static Object eve$76(Map<String,Object> env) {
        List<Object> args = new ArrayList<Object>();
        args.add(eve$0(env));
        return ((Function<List<Object>, Object>)env.get("fib")).apply(args);
    }

    @SuppressWarnings("unchecked")
    public static Object eve$77(Map<String,Object> env) {
        int lhs = (int) eve$0(env);
        int rhs = (int) eve$32(env);
        return lhs / rhs;
    }

    @SuppressWarnings("unchecked")
    public static Object eve$78(Map<String,Object> env) {
        return Integer.parseInt("6");
    }

    @SuppressWarnings("unchecked")
    public static Object eve$79(Map<String,Object> env) {
        int lhs = (int) eve$0(env);
        int rhs = (int) eve$78(env);
        return lhs / rhs;
    }

    @SuppressWarnings("unchecked")
    public static Object eve$80(Map<String,Object> env) {
        List<Object> args = new ArrayList<Object>();
        args.add(eve$29(env));
        args.add(eve$77(env));
        args.add(eve$79(env));
        return ((Function<List<Object>, Object>)env.get("tak")).apply(args);
    }

    @SuppressWarnings("unchecked")
    public static Object eve$81(Map<String,Object> env) {
        int lhs = (int) eve$76(env);
        int rhs = (int) eve$80(env);
        return lhs + rhs;
    }

    @SuppressWarnings("unchecked")
    public static Object eve$82(Map<String,Object> env) {
        return Integer.parseInt("100");
    }

    @SuppressWarnings("unchecked")
    public static Object eve$83(Map<String,Object> env) {
        int lhs = (int) eve$0(env);
        int rhs = (int) eve$82(env);
        return lhs * rhs;
    }

    @SuppressWarnings("unchecked")
    public static Object eve$84(Map<String,Object> env) {
        List<Object> args = new ArrayList<Object>();
        args.add(eve$3(env));
        args.add(eve$83(env));
        return ((Function<List<Object>, Object>)env.get("sumCollatz")).apply(args);
    }

    @SuppressWarnings("unchecked")
    public static Object eve$85(Map<String,Object> env) {
        List<Object> args = new ArrayList<Object>();
        args.add(eve$3(env));
        args.add(eve$83(env));
        return ((Function<List<Object>, Object>)env.get("countPrimes")).apply(args);
    }

    @SuppressWarnings("unchecked")
    public static Object eve$86(Map<String,Object> env) {
        int lhs = (int) eve$84(env);
        int rhs = (int) eve$85(env);
        return lhs - rhs;
    }

    @SuppressWarnings("unchecked")
    public static Object eve$87(Map<String,Object> env) {
        return env.get("arith");
    }

    @SuppressWarnings("unchecked")
    public static Object eve$88(Map<String,Object> env) {
        return env.get("calls");
    }

    @SuppressWarnings("unchecked")
    public static Object eve$89(Map<String,Object> env) {
        int lhs = (int) eve$87(env);
        int rhs = (int) eve$88(env);
        return lhs - rhs;
    }

    @SuppressWarnings("unchecked")
    public static Object eve$90(Map<String,Object> env) {
        List<Object> args = new ArrayList<Object>();
        args.add(eve$89(env));
        return ((Function<List<Object>, Object>)env.get("abs")).apply(args);
    }

    @SuppressWarnings("unchecked")
    public static Object eve$91(Map<String,Object> env) {
        return Integer.parseInt("1000000");
    }

    @SuppressWarnings("unchecked")
    public static Object eve$92(Map<String,Object> env) {
        int lhs = (int) eve$90(env);
        int rhs = (int) eve$91(env);
        return lhs % rhs;
    }

    @SuppressWarnings("unchecked")
    public static Object eve$93(Map<String,Object> env) {
        Map<String,Object> letEnv = new HashMap<String,Object>(env);
        letEnv.put("arith", eve$86(env));
        return eve$92(letEnv);
    }

    @SuppressWarnings("unchecked")
    public static Object eve$94(Map<String,Object> env) {
        Map<String,Object> letEnv = new HashMap<String,Object>(env);
        letEnv.put("calls", eve$81(env));
        return eve$93(letEnv);
    }

    @SuppressWarnings("unchecked")
    public static Object run(List<Object> args) {
        Map<String,Object> env = new HashMap<String,Object>();
        env.put("fib", new Function<List<Object>, Object>() {
                public Object apply(List<Object> args) {
                    Map<String,Object> myEnv = new HashMap<String,Object>(env);
                    List<Object> argsList = new ArrayList<Object>(args);
                    myEnv.put("n", argsList.remove(0));
                    return eve$9(myEnv);
                }
        });
        env.put("tak", new Function<List<Object>, Object>() {
                public Object apply(List<Object> args) {
                    Map<String,Object> myEnv = new HashMap<String,Object>(env);
                    List<Object> argsList = new ArrayList<Object>(args);
                    myEnv.put("x", argsList.remove(0));
                    myEnv.put("y", argsList.remove(0));
                    myEnv.put("z", argsList.remove(0));
                    return eve$23(myEnv);
                }
        });
        env.put("collatz", new Function<List<Object>, Object>() {
                public Object apply(List<Object> args) {
                    Map<String,Object> myEnv = new HashMap<String,Object>(env);
                    List<Object> argsList = new ArrayList<Object>(args);
                    myEnv.put("n", argsList.remove(0));
                    myEnv.put("steps", argsList.remove(0));
                    return eve$37(myEnv);
                }
        });
        env.put("noDivisor", new Function<List<Object>, Object>() {
                public Object apply(List<Object> args) {
                    Map<String,Object> myEnv = new HashMap<String,Object>(env);
                    List<Object> argsList = new ArrayList<Object>(args);
                    myEnv.put("n", argsList.remove(0));
                    myEnv.put("d", argsList.remove(0));
                    return eve$46(myEnv);
                }
        });
        env.put("isPrime", new Function<List<Object>, Object>() {
                public Object apply(List<Object> args) {
                    Map<String,Object> myEnv = new HashMap<String,Object>(env);
                    List<Object> argsList = new ArrayList<Object>(args);
                    myEnv.put("n", argsList.remove(0));
                    return eve$49(myEnv);
                }
        });
        env.put("sumCollatz", new Function<List<Object>, Object>() {
                public Object apply(List<Object> args) {
                    Map<String,Object> myEnv = new HashMap<String,Object>(env);
                    List<Object> argsList = new ArrayList<Object>(args);
                    myEnv.put("lo", argsList.remove(0));
                    myEnv.put("hi", argsList.remove(0));
                    return eve$63(myEnv);
                }
        });
        env.put("countPrimes", new Function<List<Object>, Object>() {
                public Object apply(List<Object> args) {
                    Map<String,Object> myEnv = new HashMap<String,Object>(env);
                    List<Object> argsList = new ArrayList<Object>(args);
                    myEnv.put("lo", argsList.remove(0));
                    myEnv.put("hi", argsList.remove(0));
                    return eve$72(myEnv);
                }
        });
        env.put("abs", new Function<List<Object>, Object>() {
                public Object apply(List<Object> args) {
                    Map<String,Object> myEnv = new HashMap<String,Object>(env);
                    List<Object> argsList = new ArrayList<Object>(args);
                    myEnv.put("x", argsList.remove(0));
                    return eve$75(myEnv);
                }
        });
        env.put("bench", new Function<List<Object>, Object>() {
                public Object apply(List<Object> args) {
                    Map<String,Object> myEnv = new HashMap<String,Object>(env);
                    List<Object> argsList = new ArrayList<Object>(args);
                    myEnv.put("n", argsList.remove(0));
                    return eve$94(myEnv);
                }
        });
        return ((Function<List<Object>, Object>)env.get("bench")).apply(args);
    }
}