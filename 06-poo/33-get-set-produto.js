// EXERCÍCIO 33 - GETTERS E SETTERS
// Crie uma classe Produto com o campo privado #preco.
// Crie get preco e set preco. O setter não deve aceitar valores negativos.
// Crie um produto, altere o preço e mostre o resultado.
//
// Escreva sua solução abaixo:


class Produto {
    #preco = 0;

    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco; // Usa o setter
    }
    get preco() {
        return this.#preco;
    }
    set preco(novoPreco) {
        if (novoPreco >= 0) this.#preco = novoPreco;
    }
}
// Teste:
const p1 = new Produto("Mouse", 100);
p1.preco = 150;  // Atualiza via setter
p1.preco = -50;  // Ignorado pelo setter

console.log(p1.preco); // 150