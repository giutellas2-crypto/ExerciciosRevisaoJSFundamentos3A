// EXERCÍCIO 19 - ARRAY DE OBJETOS
// Crie um array com três objetos de filmes.
// Cada filme deve possuir titulo, genero e duracao.
// Percorra o array e mostre o título de cada filme.
//
// Escreva sua solução abaixo:


const filmes = [
    { titulo: "A Origem", genero: "Ficção Científica", duracao: 148 },
    { titulo: "O Senhor dos Anéis", genero: "Fantasia", duracao: 201 },
    { titulo: "Interestelar", genero: "Ficção Científica", duracao: 169 }
];

// Percorrendo o array e exibindo o título de cada filme:
filmes.forEach(filme => {
    console.log(filme.titulo);
});