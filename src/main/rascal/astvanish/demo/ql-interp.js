
var update;

function run($ql) {
   var env = {};
   initialize($ql, env);
   render($ql, env);
   update = compute($ql, env);
}


function initialize($ql, env) { for (const q of $ql.questions) initializeQuestion(q, env); }

function defaultFor($type) {
   switch ($type._tag) {
      case 'integer':
         return 0;
         break;
      case 'boolean':
         return false;
         break;
      case 'string':
         return '';
         break;
   }
}

function initializeQuestion($q, env) {
   switch ($q._tag) {
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
   }
}

function render($ql, env) { for (const q of $ql.questions) renderQuestion(q, env); }


function compute($ql, env) {
   {
      return function (x, val) {
         env[x] = val;
         do {
            var change = false;

            for (const q of $ql.questions) change = change || computeQuestion(q, env);
         }
         while (change);
      };
   }
}

function computeQuestion($q, env) {
   switch ($q._tag) {
      case 'answerable':
         return false;
         break;
      case 'computed':
         var val = eve($q.expr, env);
         if (val !== env[$q.name]) {
            env[$q.name] = val;
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
   }
}


function renderQuestion($q, env) {
   switch ($q._tag) {
      case 'answerable':
         widget($q.type, $q.prompt, $q.name, false, env, function (x) { update($q.name.toString(), x.value); });
         break;
      case 'computed':
         widget($q.type, $q.prompt, $q.name, true, env, null);
         break;
      case 'block':
         for (const q of $q.questions) {
            renderQuestion(q, env);
         }
         break;
      case 'ifThenElse':
         if (eve($q.cond, env)) {
            renderQuestion($q.then, env);
         }
         else {
            renderQuestion($q.els, env);
         }
         break;
      case 'ifThen':
         if (eve($q.cond, env)) {
            renderQuestion($q.then, env);
         }


         break;
   }
}

function widget($type, $label, $name, readOnly, env, func) {
   page.append($label.toString());
   var elt = createElement("input");
   switch ($type._tag) {
      case 'integer':
         elt.setAttribute("type", "number");
         elt.value = env[$name.toString()];
         break;
      case 'boolean':
         elt.setAttribute("type", "checkbox");
         elt.checked = env[$name.toString()];
         break;
      case 'string':
         elt.setAttribute("type", "text");
         elt.value = env[$name.toString()];
         break;
   }
   page.append(elt);
   if (readOnly) {
      elt.disabled = true;
   }
   else {
      elt.onchange = func;
   }
}

function eve($e, env) {
   switch ($e._tag) {
      case 'var':
         return env[$e.name];
         break;
      case 'integer':
         return parseInt($e.theInt.toString());
         break;
      case 'string':
         return unquote($e.theStr.toString());
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
         return Math.round(eve($e.lhs, env) / eve($e.rhs, env));
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
   }
}
