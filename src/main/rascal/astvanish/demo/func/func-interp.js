
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
case 'mul': 
   return eve($exp.lhs, env) * eve($exp.rhs, env);
   break;
case 'sub': 
   return eve($exp.lhs, env) - eve($exp.rhs, env);
   break;
case 'gt': 
   return eve($exp.lhs, env) > eve($exp.rhs, env);
   break;
case 'ifThenElse': 
   return eve($exp.cond, env) ? eve($exp.then, env) : eve($exp.els, env);
   break;
case 'call': 
   var args = [];
            for (const a of $exp.actuals) args.push(eve(a, env));
            return env[$exp.name](args);
   break;
}}
