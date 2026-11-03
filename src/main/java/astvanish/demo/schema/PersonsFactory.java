package astvanish.demo.schema;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.google.gson.Gson;

public abstract class PersonsFactory {
    @SuppressWarnings({ "unchecked", "rawtypes" })
    public static void main(String[] args) throws IOException {
        String src = readMyJson();
        Gson gson = new Gson();
        Map ast = gson.fromJson(src, Map.class);

        PersonsFactory f = factory();

        System.out.println(f.schemaName());

        IObject aPerson = f.create("Person");
        aPerson.set("name", "Jurgen");
        System.out.println(aPerson.get("name"));
        System.out.println(aPerson.get("age"));
        aPerson.set("age", 40);
        System.out.println(aPerson.get("age"));
    }

    public static String readMyJson() throws IOException {
        return new String(Files.readAllBytes(Paths.get("src/main/rascal/astvanish/demo/persons.json")));
    }

    public abstract String schemaName();

    public abstract IObject create(String className);

    public interface IObject {
        void set(String field, Object value);
        Object get(String field);
    }

    private abstract class Klass {
        abstract IObject make();
    }

    private static void initialize$0(Map<String,Object> data) {
        data.put("name", "");
    }

    private static void initialize$1(Map<String,Object> data) {
        data.put("age", 0);
    }

    private static void checkType$0(Object value) {
        if (!(value instanceof String)) {
            throw new RuntimeException("type error");
        }
    }

    private static void checkType$1(Object value) {
        if (!(value instanceof Integer)) {
            throw new RuntimeException("type error");
        }
    }

    private static void initialize$2(Map<String,Object> data) {
        data.put("street", "");
    }

    private static void initialize$3(Map<String,Object> data) {
        data.put("number", 0);
    }

    private static void initialize$4(Map<String,Object> data) {
        data.put("central", false);
    }

    private static void checkType$2(Object value) {
        if (!(value instanceof Boolean)) {
            throw new RuntimeException("type error");
        }
    }

    @SuppressWarnings("unchecked")
    public static PersonsFactory factory() {
        return new PersonsFactory() {
            public String schemaName() {
                return "Example";
            }

            private Map<String, Klass> classes = new HashMap<String,Klass>();

            public IObject create(String className) {
                if (!classes.containsKey(className)) {
                    throw new RuntimeException("no such class");
                }
                return classes.get(className).make();
            }

            {
                classes.put("Person", new Klass() {
                        public IObject make() {
                            return new IObject() {

                                private Map<String,Object> data = new HashMap<String,Object>();

                                {
                                    initialize$0(data);
                                    initialize$1(data);
                                }

                                public void set(String field, Object value) {
                                    if (!data.containsKey(field)) {
                                        throw new RuntimeException("no such field " + field);
                                    }
                                    if ("name".equals(field)) {
                                        checkType$0(value);
                                    }
                                    if ("age".equals(field)) {
                                        checkType$1(value);
                                    }
                                    data.put(field, value);
                                }

                                public Object get(String field) {
                                    if (!data.containsKey(field)) {
                                        throw new RuntimeException("no such field " + field);
                                    }
                                    return data.get(field);
                                }

                            };
                        }
                });
                classes.put("Address", new Klass() {
                        public IObject make() {
                            return new IObject() {

                                private Map<String,Object> data = new HashMap<String,Object>();

                                {
                                    initialize$2(data);
                                    initialize$3(data);
                                    initialize$4(data);
                                }

                                public void set(String field, Object value) {
                                    if (!data.containsKey(field)) {
                                        throw new RuntimeException("no such field " + field);
                                    }
                                    if ("street".equals(field)) {
                                        checkType$0(value);
                                    }
                                    if ("number".equals(field)) {
                                        checkType$1(value);
                                    }
                                    if ("central".equals(field)) {
                                        checkType$2(value);
                                    }
                                    data.put(field, value);
                                }

                                public Object get(String field) {
                                    if (!data.containsKey(field)) {
                                        throw new RuntimeException("no such field " + field);
                                    }
                                    return data.get(field);
                                }

                            };
                        }
                });
            }
        };
    }
}