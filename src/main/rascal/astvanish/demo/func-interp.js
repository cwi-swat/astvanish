
function run($prog) {
    var env = {};
    {
        for (const d of $prog.defs) env[d.name] = function (args) {
            var myEnv = Object.assign({}, env);
            for (const f of d.params) {
                myEnv[f.toString()] = args.shift();
            }
            return eval(d.body, myEnv);
        };
        return eval($prog.main, env);
    }
}

function eval($exp, env) {
    switch ($exp._tag) {
        case 'var':
            return env[$exp.name];
            break;
        case 'number':
            return parseInt($exp.number.toString());
            break;
        case 'mul':
            return eval($exp.lhs, env) * eval($exp.rhs, env);
            break;
        case 'sub':
            return eval($exp.lhs, env) - eval($exp.rhs, env);
            break;
        case 'gt':
            return eval($exp.lhs, env) > eval($exp.rhs, env);
            break;
        case 'ifThenElse':
            return eval($exp.cond, env) ? eval($exp.then, env) : eval($exp.els, env);
            break;
        case 'call':
            var args = [];
            for (const a of $exp.actuals) args.push(eval(a, env));
            return env[$exp.name](args);
            break;
    }
}

function format($prog) {
    var src = '';
    {
        for (const d of $prog.defs) {
            src += 'def ' + d.name + "(";
            for (const p of d.params) {
                src += p.toString() + ',';
            }
            src += ')\n';
            src += formatExp(d.body);
            src += ';\n';
        }
        src += '\n' + formatExp($prog.main);
    }
    return src;
}


function formatExp($exp) { return $exp.toString(); }
