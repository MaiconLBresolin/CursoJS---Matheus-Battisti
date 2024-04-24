let onibus = {
  rodas: 8,
  limitePass: 40,
  portas: 2,
};

onibus.janelas = 20;
delete onibus.rodas;

console.log(onibus.janelas);
console.log(onibus.limitePass);
console.log(onibus.portas);
