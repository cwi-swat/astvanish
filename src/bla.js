function eval_(i, input, k) {
    if (input[i] === 'b') {
        k(i + 1, input);
    }
}
function eval$0(i, input, k) {
    if (input[i] === 'a') {
        k(i + 1, input);
    }
}
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

function main($re, input) {
    try {
        eval($re, 0, input, function (i, input) {
            throw { pos: i };
        });
    }
    catch (e) {
        return e;
    }
}

function eval_($re, i, input, k) {
    switch ($re._tag) {
        case 'word':
            if (input[i[0]] === $re.word) {
                k(i + 1, input);
            }


            break;
        case 'parens':
            eval($re.arg, i, input, k);
            break;
        case 'seq':
            eval($re.lhs, i, input, function (i, input) {
                eval($re.rhs, i, input, k);
            });
            break;
        case 'alt':
            eval($re.lhs, i, input, k);
            eval($re.rhs, i, input, k);
            break;
        case 'opt':
            eval($re.re, i, input, k);
            k(i, input);
            break;
        case 'iter':
            (function f(i, input) {
                eval($re.re, i, input, f);
                k(i, input);
            })(i, input);
            break;
    }
}