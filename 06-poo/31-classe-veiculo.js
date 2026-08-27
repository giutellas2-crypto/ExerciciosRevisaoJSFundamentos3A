// EXERCÍCIO 31 - CLASSE E INSTÂNCIAS
// Crie uma classe Veiculo com constructor para marca, modelo e ano.
// Crie um método exibirDados() e duas instâncias da classe.
// Mostre os dados dos dois veículos.
//
// Escreva sua solução abaixo:


// CLASSES E INSTÂNCIAS (POO)

class Veiculo {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    exibirDados() {
        console.log(`${this.marca} ${this.modelo} (${this.ano})`);
    }
}
// Instâncias (Objetos criados pelo molde)
const v1 = new Veiculo("Toyota", "Corolla", 2022);
const v2 = new Veiculo("Honda", "Civic", 2021);

v1.exibirDados();
v2.exibirDados();