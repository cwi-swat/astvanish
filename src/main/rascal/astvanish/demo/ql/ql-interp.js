
export { run as run };


function run($ql) {var env = {};
    initialize($ql, env);

    var update = compute($ql, env);
    render($ql, env, update);
    var vis = true;
    {
        for (const q of $ql.questions) {
            updateVisibility(q, vis, env);
        }
    }}


function initialize($ql, env) {for (const q of $ql.questions) initializeQuestion(q, env);}

function defaultFor($type) {switch ($type._tag) {
case 'integer': 
   return 0;
   break;
case 'boolean': 
   return false;
   break;
case 'string': 
   return '';
   break;
}}

function initializeQuestion($q, env) {switch ($q._tag) {
case 'answerable': 
   env[$q.name] = defaultFor($q.type);
   break;
case 'computed': 
   env[$q.name] = defaultFor($q.type);
   break;
case 'block': 
   for (const q of $q.questions) {
                initializeQuestion(q, env);
            }
   break;
case 'ifThenElse': 
   initializeQuestion($q.then, env);
            initializeQuestion($q.els, env);
   break;
case 'ifThen': 
   initializeQuestion($q.then, env);
   break;
}}

function render($ql, env, upd) {for (const q of $ql.questions) renderQuestion(q, env, upd);}

function updater($name, $type, upd) {return function(x) {
        switch ($type._tag) {
case 'integer': 
   upd($name.toString(), parseInt(x.target.value));
   break;
case 'boolean': 
   upd($name.toString(), x.target.checked);
   break;
case 'string': 
   upd($name.toString(), x.target.value);
   break;
}
    };}

function renderQuestion($q, env, upd) {switch ($q._tag) {
case 'answerable': 
   widget($q.type, $q.prompt, $q.name, false, env, updater($q.name, $q.type, upd));
   break;
case 'computed': 
   widget($q.type, $q.prompt, $q.name, true, env, null);
   break;
case 'block': 
   for (const q of $q.questions) {
                renderQuestion(q, env, upd);
            }
   break;
case 'ifThenElse': 
   renderQuestion($q.then, env, upd);
            renderQuestion($q.els, env, upd);
   break;
case 'ifThen': 
   renderQuestion($q.then, env, upd);
   break;
}}

function widget($type, $label, $name, readOnly, env, func) {var div = document.createElement('div');
    div.id = $name.toString() + '-div';
    div.appendChild(document.createTextNode($label.toString().slice(1, -1)));
    var elt = document.createElement('input'); 
    elt.id = $name.toString() + '-widget';           
    switch ($type._tag) {
case 'integer': 
   elt.setAttribute('type', 'number');
            elt.value = env[$name.toString()];
   break;
case 'boolean': 
   elt.setAttribute('type', 'checkbox');
            elt.checked = env[$name.toString()];
   break;
case 'string': 
   elt.setAttribute('type', 'text');
            elt.value = env[$name.toString()];
   break;
}
    if (readOnly) {
        elt.disabled = true;
    }
    else {
        elt.onchange = func;
    }
    div.appendChild(elt);
    document.body.appendChild(div);}


function compute($ql, env) {{
        return function (x, val) {
            env[x] = val;
            do {
                var change = false;
            
                for (const q of $ql.questions) change = change || computeQuestion(q, env);
            }
            while (change);
            var vis = true;
            for (const q of $ql.questions) {
                updateVisibility(q, vis, env);
            }
        };
    }}

function updateVisibility($q, vis, env) {switch ($q._tag) {
case 'answerable': 
   var elt = document.getElementById($q.name + '-div');
            elt.style.display = vis ? 'block' : 'none';
   break;
case 'computed': 
   var elt = document.getElementById($q.name + '-div');
            elt.style.display = vis ? 'block' : 'none';
   break;
case 'block': 
   for (const q of $q.questions) {
                updateVisibility(q, vis, env);
            }
   break;
case 'ifThenElse': 
   updateVisibility($q.then, eve($q.cond, env), env);
            updateVisibility($q.els, !eve($q.cond, env), env);
   break;
case 'ifThen': 
   updateVisibility($q.then, eve($q.cond, env), env);
   break;
}}

function updateValue($name, $type, val) {var elt = document.getElementById($name.toString() + '-widget');
    switch ($type._tag) {
case 'integer': 
   elt.value = val;
   break;
case 'string': 
   elt.value = val;
   break;
case 'boolean': 
   elt.checked = val;
   break;
}}

function computeQuestion($q, env) {switch ($q._tag) {
case 'answerable': 
   return false;
   break;
case 'computed': 
   var val = eve($q.expr, env);
            if (val !== env[$q.name]) {
                env[$q.name] = val;
                updateValue($q.name, $q.type, val);
                return true;
            }

        
   break;
case 'block': 
   var change = false;
            for (const q of $q.questions) {
                change = change || computeQuestion(q, env);
            }
            return change;
   break;
case 'ifThenElse': 
   if (eve($q.cond, env)) {
                return computeQuestion($q.then, env);
            }
            else {
                return computeQuestion($q.els, env);
            }
   break;
case 'ifThen': 
   if (eve($q.cond, env)) {
                return computeQuestion($q.then, env);
            }   
    
   break;
}}



function eve($e, env) {switch ($e._tag) {
case 'var': 
   return env[$e.name];
   break;
case 'integer': 
   return parseInt($e.theInt.toString());
   break;
case 'string': 
   return $e.theStr.slice(1,-1);
   break;
case 'boolean': 
   return $e.theBool === 'true';
   break;
case 'parens': 
   return eve($e.arg, env);
   break;
case 'not': 
   return !eve($e.arg, env);
   break;
case 'mul': 
   return eve($e.lhs, env) * eve($e.rhs, env);
   break;
case 'div': 
   var x = eve($e.lhs, env);
            var y = eve($e.rhs, env);
            if (y === 0) {
                window.alert('Division by zero in: ' + $e.toString());
                return 0;
            }
            return Math.round(x / y);
   break;
case 'add': 
   return eve($e.lhs, env) + eve($e.rhs, env);
   break;
case 'sub': 
   return eve($e.lhs, env) - eve($e.rhs, env);
   break;
case 'eq': 
   return eve($e.lhs, env) === eve($e.rhs, env);
   break;
case 'neq': 
   return eve($e.lhs, env) !== eve($e.rhs, env);
   break;
case 'gt': 
   return eve($e.lhs, env) > eve($e.rhs, env);
   break;
case 'lt': 
   return eve($e.lhs, env) < eve($e.rhs, env);
   break;
case 'leq': 
   return eve($e.lhs, env) <= eve($e.rhs, env);
   break;
case 'geq': 
   return eve($e.lhs, env) >= eve($e.rhs, env);
   break;
case 'and': 
   return eve($e.lhs, env) && eve($e.rhs, env);
   break;
case 'or': 
   return eve($e.lhs, env) || eve($e.rhs, env);
   break;
}}
