// EXERCÍCIO 22 - DESESTRUTURAÇÃO DE ARRAY
// Crie um array com três cores favoritas.
// Utilize desestruturação para guardar cada cor em uma variável.
// Mostre as três variáveis.
//
// Escreva sua solução abaixo:


const cores = ["Azul", "Verde", "Roxo"];

// Desestruturando o array em variáveis individuais por posição:
const [cor1, cor2, cor3] = cores;

console.log("Primeira cor:", cor1);
console.log("Segunda cor:", cor2);
console.log("Terceira cor:", cor3);