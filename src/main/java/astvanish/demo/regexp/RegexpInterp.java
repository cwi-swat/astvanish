package astvanish.demo.regexp;

import java.util.Map;
import java.util.function.BiConsumer;

public class RegexpInterp {

    private static class Success extends RuntimeException {

    }

    @SuppressWarnings("unchecked")
    public static boolean match(Map<String,Object> re, String input) {
        int i = 0;
        try {
            match_(((Map<String,Object>) re.get("re")), i, input, new BiConsumer<Integer, String>() {
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

    @SuppressWarnings("unchecked")
    public static void match_(Map<String,Object> re, int i, String input, BiConsumer<Integer,String> k) {
        switch ((String) re.get("_tag")) {
            case "word": {
                if (input.substring(i, i + 1) == re.get("word").toString()) {
                    k.accept(i+1, input);
                }
            }
            break;
            case "parens": {
                match_(((Map<String,Object>) re.get("arg")), i, input, k);
            }
            break;
            case "seq": {
                match_(((Map<String,Object>) re.get("lhs")), i, input, new BiConsumer<Integer,String>() {
                        public void accept(Integer i, String input) {
                            match_(((Map<String,Object>) re.get("rhs")), i, input, k);
                        }
                });
            }
            break;
            case "alt": {
                match_(((Map<String,Object>) re.get("lhs")), i, input, k);
                match_(((Map<String,Object>) re.get("lhs")), i, input, k);
            }
            break;
            case "opt": {
                match_(((Map<String,Object>) re.get("re")), i, input, k);
                k.accept(i, input);
            }
            break;
            case "iter": {
                (new BiConsumer<Integer,String>() {
                        public void accept(Integer i, String input) {
                            match_(((Map<String,Object>) re.get("re")), i, input, this);
                            k.accept(i, input);
                        }
                }).accept(i, input);
            }
            break;
        }
    }

}