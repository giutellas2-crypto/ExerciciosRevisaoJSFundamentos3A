// EXERCÍCIO 21 - DESESTRUTURAÇÃO DE OBJETO
// Crie um objeto curso com nome, cargaHoraria e modalidade.
// Utilize desestruturação para criar variáveis com essas propriedades.
// Mostre as variáveis no console.
//
// Escreva sua solução abaixo:


const curso = {
    nome: "JavaScript Moderno",
    cargaHoraria: 40,
    modalidade: "Online"
};

// Desestruturando o objeto em variáveis individuais:
const { nome, cargaHoraria, modalidade } = curso;

console.log("Nome do Curso:", nome);
console.log("Carga Horária:", cargaHoraria, "horas");
console.log("Modalidade:", modalidade);