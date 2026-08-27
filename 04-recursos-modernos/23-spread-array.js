// EXERCÍCIO 23 - SPREAD EM ARRAY
// Crie dois arrays de tecnologias: um de Front-End e outro de Back-End.
// Utilize Spread para criar um terceiro array contendo todas as tecnologias.
//
// Escreva sua solução abaixo:

const frontEnd = ["HTML", "CSS", "JavaScript", "React"];
const backEnd = ["Node.js", "Python", "SQL"];

// Unindo os dois arrays em um terceiro utilizando o operador Spread:
const todasTecnologias = [...frontEnd, ...backEnd];

console.log("Todas as tecnologias:", todasTecnologias);