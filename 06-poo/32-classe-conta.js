// EXERCÍCIO 32 - ENCAPSULAMENTO
// Crie uma classe ContaBancaria com o campo privado #saldo.
// Crie os métodos depositar(valor), sacar(valor) e consultarSaldo().
// Não permita saque maior que o saldo disponível.
//
// Escreva sua solução abaixo:


// ENCAPSULAMENTO (CAMPOS PRIVADOS #)

class ContaBancaria {
    #saldo = 0; // Privado: não acessível fora da classe
    depositar(valor) {
        if (valor > 0) this.#saldo += valor;
    }
    sacar(valor) {
        if (valor > 0 && valor <= this.#saldo) this.#saldo -= valor;
        else console.log("Saldo insuficiente!");
    }
    consultarSaldo() {
        return `Saldo: R$ ${this.#saldo}`;
    }
}
const conta = new ContaBancaria();
conta.depositar(500);
conta.sacar(200);
console.log(conta.consultarSaldo()); // Saldo: R$ 300