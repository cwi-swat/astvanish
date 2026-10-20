package astvanish;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public interface Factory {

    public String schemaName();
    public IObject create(String className);

    public interface IObject {
        void set(String field, Object value);
        Object get(String field);
    }

    public interface IClass {
        IObject make();
    }

    private static void initialize(Map<String,Object> data, String fld, Tree type) {
        switch (type.tag()) {
            case "int":
                data.put(fld, 0); 
                break;
            case "bool":
                data.put(fld, false);
                break;
            case "str":
                data.put(fld, "");
                break;
        }
    }

    private static void checkType(Object value, Tree type) {
        switch (type.tag()) {
            case "int":
                if (!(value instanceof Integer)) {
                    throw new RuntimeException("type error");
                }
            case "bool":
                if (!(value instanceof Boolean)) {
                    throw new RuntimeException("type error");
                }
            case "str":
                if (!(value instanceof String)) {
                    throw new RuntimeException("type error");
                }
        }
    }

    @SuppressWarnings("unchecked")
    public static Factory factory(Tree $schema) {
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
                for (Tree c: (List<Tree>)$schema.get("classes")) {
                    classes.put(c.get("name").toString(), new IClass() {
                        public IObject make() {
                            return new IObject() {

                                private Map<String,Object> data = new HashMap<>();
                                {
                                    for (Tree f: (List<Tree>)c.get("fields")) {
                                        initialize(data, f.get("name").toString(), (Tree)f.get("type"));
                                    }
                                }

                                public void set(String field, Object value) {
                                    if (!data.containsKey(field)) {
                                        throw new RuntimeException("no such field");
                                    }
                                    for (Tree f: (List<Tree>)c.get("fields")) {
                                        if (f.get("name").toString().equals(field)) {
                                            checkType(value, (Tree)f.get("type"));
                                        }
                                    }
                                    data.put(field, value);
                                }

                                public Object get(String field) {
                                    if (!data.containsKey(field)) {
                                        throw new RuntimeException("no such field");
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

