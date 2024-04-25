class Conta {
  constructor(saldo) {
    this.saldo = saldo;
  }

  deposito(valor) {
    this.saldo += valor;
  }
}

let conta = new Conta(1000);

console.log(conta);

conta.deposito(1000);

console.log(conta);
