export {match$0 as match};
function match_$0(i, input, k) {
  if (input[i] === 'b') k(i+1, input);
}
function match_$1(i, input, k) {
  if (input[i] === 'a') k(i+1, input);
}
function match_$2(i, input, k) {
  match_$1(i, input, function (i, input) {
                match_$0(i, input, k);
            });
}
function match_$3(i, input, k) {
  match_$2(i, input, function (i, input) {
                match_$0(i, input, k);
            });
}
function match_$4(i, input, k) {
  (function f(i, input) {
                match_$1(i, input, f);
                k(i, input);
            })(i, input);
}
function match_$5(i, input, k) {
  match_$4(i, input, function (i, input) {
                match_$0(i, input, k);
            });
}
function match_$6(i, input, k) {
  match_$3(i, input, k);
            match_$5(i, input, k);
}
function match_$7(i, input, k) {
  match_$6(i, input, k);
}
function match_$8(i, input, k) {
  match_$1(i, input, k);
            match_$0(i, input, k);
}
function match_$9(i, input, k) {
  match_$8(i, input, k);
}
function match_$10(i, input, k) {
  (function f(i, input) {
                match_$9(i, input, f);
                k(i, input);
            })(i, input);
}
function match_$11(i, input, k) {
  match_$10(i, input, function (i, input) {
                match_$7(i, input, k);
            });
}
function match$0(input) {
  var i = 0; // force i to be dynamic
    match_$11(i, input, function (i, input) {
            console.log('matched up till: ' + i);
        });
}