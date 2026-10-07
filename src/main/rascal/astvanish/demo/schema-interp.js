

function factory($schema) {
    var m = {};
    {
        m.__name = $schema.name;
        for (const c of $schema.classes) {
            {
                m[c.name] = function () {
                    var data = {};
                    for (const f of c.fields) {
                        {
                            data[f.name] = null;
                        }

                    }
                    var obj = {};
                    for (const f of c.fields) {
                        {
                            obj[f.name] = function (x) {
                                if (x !== undefined) {
                                    checkType(f.typ, x);
                                    data[f.name] = x;
                                }
                                else {
                                    return data[f.name];
                                }
                            };
                        }
                    }
                };
            }
        }
    }

    return m;
}

function checkType($type, x) {
    switch ($type._tag) {
        case 'integer':
            if (Number.isInteger(x)) return true;

            break;
        case 'boolean':
            if (x === true || x === false) return true;

            break;
        case 'string':
            if (typeof x === 'string') return true;

            break;
    }
    throw 'value ' + x + (' is not compatible with type ' + $type.toString());
}

function sql($schema, conn) {
    {
        for (const c of $schema.classes) {
            {
                conn.exec('create table ' + c.name + ';');
                for (const f of c.fields) {
                    field2sql(f, c.name, conn);
                }
            }
        }
    }
}

function field2sql($field, $cname, conn) {
    {
        conn.exec('alter table ' + $cname.toString() + ' add column ' + $field.name + ' ' + toType($field.typ) + ';');
    }
}

function toType($type) {
    switch ($type._tag) {
        case 'integer':
            return 'integer';
            break;
        case 'boolean':
            return 'boolean';
            break;
        case 'string':
            return 'varchar(256)';
            break;
    }
}