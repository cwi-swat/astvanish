package astvanish;


import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.google.gson.Gson;

public abstract class Factory {

    @SuppressWarnings({ "unchecked", "rawtypes" })
    public static void main(String[] args) throws IOException {
        String src = readMyJson();
        Gson gson = new Gson();
        Map ast = gson.fromJson(src, Map.class);

        Factory f = factory(ast);

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

    public interface IClass {
        IObject make();
    }

    private static void initialize(Map<String,Object> data, String fld, Map<String,Object> type) {
        System.out.println(type);
        switch ((String)type.get("_tag")) {
            case "integer":
                data.put(fld, 0); 
                break;
            case "boolean":
                data.put(fld, false);
                break;
            case "string":
                data.put(fld, "");
                break;
        }
    }

    private static void checkType(Object value, Map<String,Object> type) {
        switch ((String)type.get("_tag")) {
            case "integer":
                if (!(value instanceof Integer)) {
                    throw new RuntimeException("type error");
                }
                break;
            case "boolean":
                if (!(value instanceof Boolean)) {
                    throw new RuntimeException("type error");
                }
                break;
            case "string":
                if (!(value instanceof String)) {
                    throw new RuntimeException("type error");
                }
                break;
        }
    }

    @SuppressWarnings("unchecked")
    public static Factory factory(Map<String,Object> $schema) {
        return new Factory() {
            public String schemaName() {
                return $schema.get("name").toString();
            }

            private Map<String, IClass> classes = new HashMap<>();

            public IObject create(String className) {
                if (!classes.containsKey(className)) {
                    throw new RuntimeException("no such class");
                }
                return classes.get(className).make();
            }

            { 
                for (Map<String,Object> c: (List<Map<String,Object>>)$schema.get("classes")) {
                    classes.put(c.get("name").toString(), new IClass() {
                        public IObject make() {
                            return new IObject() {

                                private Map<String,Object> data = new HashMap<>();

                                {
                                    for (Map<String,Object> f: (List<Map<String,Object>>)c.get("fields")) {
                                        initialize(data, f.get("name").toString(), (Map<String,Object>)f.get("typ"));
                                    }
                                }

                                public void set(String field, Object value) {
                                    if (!data.containsKey(field)) {
                                        throw new RuntimeException("no such field " + field);
                                    }
                                    for (Map<String,Object> f: (List<Map<String,Object>>)c.get("fields")) {
                                        if (f.get("name").toString().equals(field)) {
                                            checkType(value, (Map<String,Object>)f.get("typ"));
                                        }
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
                
            }
        };
    }
}

