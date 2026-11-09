
export { run as run };


function run($prog, args) {var env = {};
    {
        for (const d of $prog.defs) env[d.name] = function(args) {
                    var myEnv = Object.assign({}, env);
                    for (const f of d.params) {
                        myEnv[f.toString()] = args.shift();
                    }
                    return eve(d.body, myEnv);
                };
        return env[$prog.main](args.slice());
    }}

function eve($exp, env) {switch ($exp._tag) {
case 'var': 
   return env[$exp.name];
   break;
case 'number': 
   return parseInt($exp.number.toString());
   break;
case 'true': 
   return true;
   break;
case 'false': 
   return false;
   break;
case 'paren': 
   return eve($exp.arg, env);
   break;
case 'neg': 
   return -eve($exp.arg, env);
   break;
case 'not': 
   return !eve($exp.arg, env);
   break;
case 'mul': 
   return eve($exp.lhs, env) * eve($exp.rhs, env);
   break;
case 'div': 
   return Math.trunc(eve($exp.lhs, env) / eve($exp.rhs, env));
   break;
case 'mod': 
   return eve($exp.lhs, env) % eve($exp.rhs, env);
   break;
case 'add': 
   return eve($exp.lhs, env) + eve($exp.rhs, env);
   break;
case 'sub': 
   return eve($exp.lhs, env) - eve($exp.rhs, env);
   break;
case 'lt': 
   return eve($exp.lhs, env) < eve($exp.rhs, env);
   break;
case 'leq': 
   return eve($exp.lhs, env) <= eve($exp.rhs, env);
   break;
case 'gt': 
   return eve($exp.lhs, env) > eve($exp.rhs, env);
   break;
case 'geq': 
   return eve($exp.lhs, env) >= eve($exp.rhs, env);
   break;
case 'eq': 
   return eve($exp.lhs, env) === eve($exp.rhs, env);
   break;
case 'neq': 
   return eve($exp.lhs, env) !== eve($exp.rhs, env);
   break;
case 'and': 
   return eve($exp.lhs, env) && eve($exp.rhs, env);
   break;
case 'or': 
   return eve($exp.lhs, env) || eve($exp.rhs, env);
   break;
case 'ifThenElse': 
   return eve($exp.cond, env) ? eve($exp.then, env) : eve($exp.els, env);
   break;
case 'let': 
   var letEnv = Object.assign({}, env);
            letEnv[$exp.name] = eve($exp.exp, env);
            return eve($exp.body, letEnv);
   break;
case 'call': 
   var args = [];
            for (const a of $exp.actuals) args.push(eve(a, env));
            return env[$exp.name](args);
   break;
}}
