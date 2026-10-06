function eval_(i, input, k) { if (input[i] === 'b') { k(i + 1, input); } }
function eval$0(i, input, k) { if (input[i] === 'a') { k(i + 1, input); } }
function eval$1(i, input, k) {
    eval$0(i, input, function (i, input) {
        eval_(i, input, k);
    });
}
function eval$2(i, input, k) {
    eval$1(i, input, function (i, input) {
        eval_(i, input, k);
    });
}
function eval$3(i, input, k) {
    (function f(i, input) {
        eval$0(i, input, f);
        k(i, input);
    })(i, input);
}
function eval$4(i, input, k) {
    eval$3(i, input, function (i, input) {
        eval_(i, input, k);
    });
}
function eval$5(i, input, k) {
    eval$2(i, input, k);
    eval$4(i, input, k);
}
function eval$6(i, input, k) { eval$5(i, input, k); }
function eval$7(i, input, k) {
    eval$0(i, input, k);
    eval_(i, input, k);
}
function eval$8(i, input, k) { eval$7(i, input, k); }
function eval$9(i, input, k) {
    (function f(i, input) {
        eval$8(i, input, f);
        k(i, input);
    })(i, input);
}
function eval$10(i, input, k) {
    eval$9(i, input, function (i, input) {
        eval$6(i, input, k);
    });
}
function match(input) {
    var i = 0; // force i to be dynamic
    try {
        eval$10(i, input, function (i, input) {
            throw { pos: i };
        });
    }
    catch (e) { return e; }
}