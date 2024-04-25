class Endereco {
  constructor(rua, bairro, cidade, estado) {
    this.rua = rua;
    this.bairro = bairro;
    this.cidade = cidade;
    this.estado = estado;
  }

  set novaRua(novaRua) {
    this.rua = novaRua;
  }

  set novoBairro(novoBairro) {
    this.bairro = novoBairro;
  }

  set novaCidade(novaCidade) {
    this.cidade = novaCidade;
  }

  set novoEstado(novoEstado) {
    this.estado = novoEstado;
  }
}

let endereco = new Endereco("Rua Nelson Ehlers", "Centro", "Erechim", "RS");

console.log(endereco);

endereco.novaRua = "Rua Alemanha";

console.log(endereco);

endereco.novoBairro = "Três Vendas";

console.log(endereco);

endereco.novaCidade = "Getulio Vargas";

console.log(endereco);

endereco.novoEstado = "PA";

console.log(endereco);
