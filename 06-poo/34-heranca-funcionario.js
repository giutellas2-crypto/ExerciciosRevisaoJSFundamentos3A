// EXERCÍCIO 34 - HERANÇA E SUPER
// Crie uma classe Pessoa com nome e um método apresentar().
// Crie a classe Funcionario que herde de Pessoa e receba também o cargo.
// Utilize super() no constructor e sobrescreva apresentar() incluindo o cargo.
//
// Escreva sua solução abaixo:

// HERANÇA E SUPER

// HERANÇA COMPACTA

class Pessoa {
    constructor(nome) { this.nome = nome; }
    apresentar() { return `Sou ${this.nome}`; }
}

class Funcionario extends Pessoa {
    constructor(nome, cargo) {
        super(nome);
        this.cargo = cargo;
    }
    apresentar() { return `${super.apresentar()}, ${this.cargo}`; }
}

const f = new Funcionario("Gandalf", "Mago");
console.log(f.apresentar()); // Sou Gandalf, Mago