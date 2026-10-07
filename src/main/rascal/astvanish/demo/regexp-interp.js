


function match($re, input) {
    var i = 0; // force i to be dynamic
    try {
        {
            match_($re.word, i, input, function (i, input) {
                throw { pos: i };
            });
        }
    }
    catch (e) {
        return e;
    }
}

function match_($re, i, input, k) {
    switch ($re._tag) {
        case 'word':
            if (input[i] === $re.word) {
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