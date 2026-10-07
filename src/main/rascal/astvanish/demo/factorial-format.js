export { format$0 as format };
function format$0() {
  var src = '';
  src += 'def factorial(';
  src += 'n,';
  src += ')\n';
  src += 'if n > 1 then\n        n * factorial(n - 1)\n   else\n        1\n   fi';
  src += ';\n';
  src += 'def power(';
  src += 'x,';
  src += 'n,';
  src += ')\n';
  src += 'if n > 1 then\n     x * power(x, n - 1)\n  else \n     n\n  fi';
  src += ';\n';
  src += '\n' + 'factorial(power(2, 3))';
  return src;
}