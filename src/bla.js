function checkType$0(x) {
    {
        if (typeof x === 'string') return true;
    }
    throw 'value ' + x + ' is not compatible with type ' + 'str';
}
function checkType$1(x) {
    {
        if (Number.isInteger(x)) return true;
    }
    throw 'value ' + x + ' is not compatible with type ' + 'int';
}
function checkType$2(x) {
    {
        if (x === true || x === false) return true;
    }
    throw 'value ' + x + ' is not compatible with type ' + 'bool';
}
function define$3() {
    var m = {};
    {
        m.__name = 'Example';
        {
            {
                {
                    m['Person'] = function () {
                        var data = {};
                        {
                            {
                                { data['name'] = null; }
                            } {
                                { data['age'] = null; }
                            }
                        }
                        var obj = {};
                        {
                            {
                                {
                                    obj['name'] = function (x) {
                                        if (x !== undefined) {
                                            checkType$0(x);
                                            data['name'] = x;
                                        }
                                        else {
                                            return data['name'];
                                        }
                                    };
                                }
                            } {
                                {
                                    obj['age'] = function (x) {
                                        if (x !== undefined) {
                                            checkType$1(x);
                                            data['age'] = x;
                                        }
                                        else {
                                            return data['age'];
                                        }
                                    };
                                }
                            }
                        }
                    };
                }
            } {
                {
                    m['Address'] = function () {
                        var data = {};
                        {
                            {
                                { data['street'] = null; }
                            } {
                                { data['number'] = null; }
                            } {
                                { data['central'] = null; }
                            }
                        }
                        var obj = {};
                        {
                            {
                                {
                                    obj['street'] = function (x) {
                                        if (x !== undefined) {
                                            checkType$0(x);
                                            data['street'] = x;
                                        }
                                        else {
                                            return data['street'];
                                        }
                                    };
                                }
                            } {
                                {
                                    obj['number'] = function (x) {
                                        if (x !== undefined) {
                                            checkType$1(x);
                                            data['number'] = x;
                                        }
                                        else {
                                            return data['number'];
                                        }
                                    };
                                }
                            } {
                                {
                                    obj['central'] = function (x) {
                                        if (x !== undefined) {
                                            checkType$2(x);
                                            data['central'] = x;
                                        }
                                        else {
                                            return data['central'];
                                        }
                                    };
                                }
                            }
                        }
                    };
                }
            }
        }
    }

    return m;
}




function define(schema) {
    var m = {};
    switch (schema.tag) {
        case 'schema':
            m.__name = schema.name;
            for (const c of schema.classes) {
                switch (c.tag) {
                    case 'class':
                        m[c.name] = function () {
                            var data = {};
                            for (const f of c.fields) {
                                switch (f.tag) {
                                    case 'field':
                                        data[f.name] = null;
                                        break;
                                }
                            }
                            var obj = {};
                            for (const f of c.fields) {
                                switch (f.tag) {
                                    case 'field':
                                        obj[f.name] = function (x) {
                                            if (x !== undefined) {
                                                checkType(f.typ, x);
                                                data[f.name] = x;
                                            }
                                            else {
                                                return data[f.name];
                                            }
                                        };
                                        break;
                                }
                            }
                        };
                        break;
                }
            }
            break;
    }

    return m;
}

function checkType(type, x) {
    switch (type.tag) {
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
    throw 'value ' + x + (' is not compatible with type ' + type.toString());
}