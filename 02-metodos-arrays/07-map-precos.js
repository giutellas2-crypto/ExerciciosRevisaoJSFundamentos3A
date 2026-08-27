// EXERCÍCIO 07 - MAP - REAJUSTE DE PREÇOS
// Considere o array: [50, 100, 150, 200].
// Utilize map() para criar um novo array com aumento de 10% em cada preço.
// Mostre o array original e o novo array.
//
// Escreva sua solução abaixo:

const precosOriginais = [50, 100, 150, 200];

const precosComAumento = precosOriginais.map(preco => preco * 1.1);

console.log("Preços Originais:", precosOriginais);
console.log("Preços com Aumento (10%):", precosComAumento);