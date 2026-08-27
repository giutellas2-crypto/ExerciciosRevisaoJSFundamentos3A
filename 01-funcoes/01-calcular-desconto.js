// EXERCÍCIO 01 - CALCULAR DESCONTO
// Crie uma função chamada calcularDesconto que receba o preço de um produto
// e a porcentagem de desconto. A função deve retornar o preço final.
// Teste a função com um produto de R$ 200 e desconto de 10%.
// 
// Saída esperada: Preço final: R$ 180
//
// Escreva sua solução abaixo:

function calcularDesconto(preco, porcentagemDesconto) {
  const desconto = (preco * porcentagemDesconto) / 100;
  return preco - desconto;
}

// Teste da função
const precoOriginal = 200;
const desconto = 10;
const precoFinal = calcularDesconto(precoOriginal, desconto);

console.log(`Preço final: R$ ${precoFinal}`);