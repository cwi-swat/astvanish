function checkType(x) {
    if (typeof x === 'string') return true;

    throw 'value ' + x + ' is not compatible with type str';
}
function checkType$0(x) {
    if (Number.isInteger(x)) return true;

    throw 'value ' + x + ' is not compatible with type int';
}
function checkType$3(x) {
    if (x === true || x === false) return true;

    throw 'value ' + x + ' is not compatible with type bool';
}
function define() {
    var m = {};
    m.__name = 'Example';
    m['Person'] = function () {
        var data = {};
        data['name'] = null;
        data['age'] = null;
        var obj = {};
        obj['name'] = function (x) {
            if (x !== undefined) {
                checkType(x);
                data['name'] = x;
            }
            else {
                return data['name'];
            }
        };
        obj['age'] = function (x) {
            if (x !== undefined) {
                checkType$0(x);
                data['age'] = x;
            }
            else {
                return data['age'];
            }
        };
    };
    m['Address'] = function () {
        var data = {};
        data['street'] = null;
        data['number'] = null;
        data['central'] = null;
        var obj = {};
        obj['street'] = function (x) {
            if (x !== undefined) {
                checkType(x);
                data['street'] = x;
            }
            else {
                return data['street'];
            }
        };
        obj['number'] = function (x) {
            if (x !== undefined) {
                checkType$0(x);
                data['number'] = x;
            }
            else {
                return data['number'];
            }
        };
        obj['central'] = function (x) {
            if (x !== undefined) {
                checkType$3(x);
                data['central'] = x;
            }
            else {
                return data['central'];
            }
        };
    };
    return m;
}