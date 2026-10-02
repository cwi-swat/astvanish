function formatExp() { return 'if n > 1 then\n        n * factorial(n - 1)\n   else\n        1\n   fi'; }
function formatExp$0() { return 'if n > 1 then\n     x * power(x, n - 1)\n  else \n     n\n  fi'; }
function formatExp$1() { return 'factorial(power(2, 3))'; }
function format() {
    var src = '';
    src += 'def factorial(';
    src += 'n,';
    src += ')\n';
    src += formatExp();
    src += ';\n';
    src += 'def power(';
    src += 'x,';
    src += 'n,';
    src += ')\n';
    src += formatExp$0();
    src += ';\n';
    src += '\n' + formatExp$1();
    return src;
}