
export { match as match }

function match($re, input) {
   var i = 0; // force i to be dynamic
   try {
      match_($re.re, i, input, function (i, input) {
         if (i === input.length) {
            // console.log('match');
            throw "match";
         }
      });
   }
   catch (e) {
      return true;
   }
   return false;
}

function match_($re, i, input, k) {
   switch ($re._tag) {
      case 'word':
         if (input[i] === $re.word)
            k(i + 1, input);

         break;
      case 'parens':
         match_($re.arg, i, input, k);
         break;
      case 'seq':
         match_($re.lhs, i, input, function (i, input) {
            match_($re.rhs, i, input, k);
         });
         break;
      case 'alt':
         match_($re.lhs, i, input, k);
         match_($re.rhs, i, input, k);
         break;
      case 'opt':
         match_($re.re, i, input, k);
         k(i, input);
         break;
      case 'iter':
         (function f(i, input) {
            match_($re.re, i, input, f);
            k(i, input);
         })(i, input);
         break;
   }
}