package astvanish.demo.regexp;

import java.util.Map;
import java.util.function.BiConsumer;

public class ExampleMatch {
    private static class Success extends RuntimeException {

    }

    @SuppressWarnings("unchecked")
    public static void match_$0(int i, String input, BiConsumer<Integer,String> k) {
        if (input.substring(i, i + 1) == "b") {
            k.accept(i+1, input);
        }
    }

    @SuppressWarnings("unchecked")
    public static void match_$1(int i, String input, BiConsumer<Integer,String> k) {
        if (input.substring(i, i + 1) == "a") {
            k.accept(i+1, input);
        }
    }

    @SuppressWarnings("unchecked")
    public static void match_$2(int i, String input, BiConsumer<Integer,String> k) {
        match_$1(i, input, new BiConsumer<Integer,String>() {
                public void accept(Integer i, String input) {
                    match_$0(i, input, k);
                }
        });
    }

    @SuppressWarnings("unchecked")
    public static void match_$3(int i, String input, BiConsumer<Integer,String> k) {
        match_$2(i, input, new BiConsumer<Integer,String>() {
                public void accept(Integer i, String input) {
                    match_$0(i, input, k);
                }
        });
    }

    @SuppressWarnings("unchecked")
    public static void match_$4(int i, String input, BiConsumer<Integer,String> k) {
        match_$3(i, input, k);
        match_$3(i, input, k);
    }

    @SuppressWarnings("unchecked")
    public static void match_$5(int i, String input, BiConsumer<Integer,String> k) {
        match_$4(i, input, k);
    }

    @SuppressWarnings("unchecked")
    public static void match_$6(int i, String input, BiConsumer<Integer,String> k) {
        match_$1(i, input, k);
        match_$1(i, input, k);
    }

    @SuppressWarnings("unchecked")
    public static void match_$7(int i, String input, BiConsumer<Integer,String> k) {
        match_$6(i, input, k);
    }

    @SuppressWarnings("unchecked")
    public static void match_$8(int i, String input, BiConsumer<Integer,String> k) {
        (new BiConsumer<Integer,String>() {
                public void accept(Integer i, String input) {
                    match_$7(i, input, this);
                    k.accept(i, input);
                }
        }).accept(i, input);
    }

    @SuppressWarnings("unchecked")
    public static void match_$9(int i, String input, BiConsumer<Integer,String> k) {
        match_$8(i, input, new BiConsumer<Integer,String>() {
                public void accept(Integer i, String input) {
                    match_$5(i, input, k);
                }
        });
    }

    @SuppressWarnings("unchecked")
    public static boolean match(String input) {
        int i = 0;
        try {
            match_$9(i, input, new BiConsumer<Integer, String>() {
                    public void accept(Integer j, String input) {
                        if (j == input.length()) {
                            throw new Success();
                        }
                    }
            });
        }
        catch (Success e) {
            return true;
        }
        return false;
    }
}