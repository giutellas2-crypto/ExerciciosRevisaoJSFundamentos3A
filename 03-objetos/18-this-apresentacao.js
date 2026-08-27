// EXERCÍCIO 18 - UTILIZANDO THIS
// Crie um objeto pessoa com nome, profissao e um método apresentar().
// O método deve utilizar this e retornar uma frase de apresentação.
//
// Escreva sua solução abaixo:

const pessoa = {
    nome: "Giulia",
    profissao: "Desenvolvedor",
    apresentar: function() {
        return `Olá, meu nome é ${this.nome} e eu sou ${this.profissao}.`;
    }
};

// Exemplo de uso e exibição no console:
console.log(pessoa.apresentar());