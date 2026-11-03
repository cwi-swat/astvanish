package astvanish;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.function.BiConsumer;

public class RegexpInterp {

    @SuppressWarnings("unchecked")
    public static boolean match(Map<String,Object> re, String input) {
        int i = 0;
        try {
            match_(((Map<String,Object>) re.get("re")), i, input, new BiConsumer<Integer, String>() {
                    public void accept(Integer j, String input) {
                        if (j == input.size()) {
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
                if (input.charAt(i) == re.get("word").toString()) {
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
                        public void accept(int i, String input) {
                            match(((Map<String,Object>) re.get("rhs")), i, input, k);
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
                        public void accept(int i, String input) {
                            match_(((Map<String,Object>) re.get("re")), i, input, this);
                            k.accept(i, input);
                        }
                }).accept(i, input);
            }
            break;
        }
    }

}