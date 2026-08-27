// EXERCÍCIO 29 - ARRAY EM JSON
// Crie um array com três objetos de usuários contendo id, nome e email.
// Converta o array para JSON e mostre o resultado.
//
// Escreva sua solução abaixo:


const usuarios = [
    { id: 1, nome: "Ana Vilaça", email: "ana@email.com" },
    { id: 2, nome: "Iago Damasco", email: "damasco@email.com" },
    { id: 3, nome: "Tontinho irlinir", email: "irlinir@email.com" }
];

// Convertendo o array de objetos para uma string JSON:
const usuariosJSON = JSON.stringify(usuarios);

console.log(usuariosJSON);