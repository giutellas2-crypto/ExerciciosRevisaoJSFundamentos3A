// EXERCÍCIO 03 - CALCULAR MÉDIA
// Crie uma função que receba quatro notas, calcule e retorne a média.
// Mostre o resultado no console.
//
// Escreva sua solução abaixo:

function calcularMedia(nota1, nota2, nota3, nota4) {
    const media = (nota1 + nota2 + nota3 + nota4) / 4;
    return media;
}

// Exemplo de uso e exibição no console:
const resultado = calcularMedia(8, 7, 9, 6);
console.log("A média é:", resultado);