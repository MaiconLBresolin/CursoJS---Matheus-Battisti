class Carro {
  constructor(marca, cor, gas, consumo) {
    this.marca = marca;
    this.cor = cor;
    this.gas = gas;
    this.consumo = consumo;
  }

  dirigir(km) {
    let litrosCons = km / this.consumo;
    this.gas -= litrosCons;
  }

  abastecer(l) {
    this.gas += l;
  }
}

let carro = new Carro("VW", "Azul", 100, 14);

console.log(carro);

carro.dirigir(300);

console.log(carro);

carro.abastecer(2);

console.log(carro);
