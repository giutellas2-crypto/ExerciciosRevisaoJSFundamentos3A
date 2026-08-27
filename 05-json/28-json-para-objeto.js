// EXERCÍCIO 28 - JSON PARA OBJETO
// Considere a String JSON: '{"nome":"Notebook","preco":3500,"estoque":8}'.
// Converta-a em objeto utilizando JSON.parse() e mostre apenas o nome do produto.
//
// Escreva sua solução abaixo:


const produtoJSON = '{"nome":"Notebook","preco":3500,"estoque":8}';

// Convertendo a string JSON de volta para um objeto JavaScript:
const produtoObjeto = JSON.parse(produtoJSON);

// Exibindo apenas o nome do produto:
console.log("Nome do produto:", produtoObjeto.nome);