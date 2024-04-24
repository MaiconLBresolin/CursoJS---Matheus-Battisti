const calculadora = {
  soma: function (a, b) {
    return a + b;
  },
  subtracao: function (a, b) {
    return a - b;
  },
  divisao: function (a, b) {
    return a / b;
  },
  multiplicacao: function (a, b) {
    return a * b;
  },
};

console.log(calculadora.divisao(15, 5));
console.log(calculadora.soma(14, 5));
console.log(calculadora.multiplicacao(4, 5));
console.log(calculadora.subtracao(10, 5));
