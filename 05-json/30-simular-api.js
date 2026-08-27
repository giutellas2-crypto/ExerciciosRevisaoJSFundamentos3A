// EXERCÍCIO 30 - SIMULANDO RESPOSTA DE API
// Crie um objeto resposta com as propriedades sucesso, mensagem e dados.
// A propriedade dados deve conter um array com dois produtos.
// Converta a resposta para JSON e depois converta novamente para objeto.
// Mostre a mensagem e os produtos recebidos.
//
// Escreva sua solução abaixo:


// SIMULAÇÃO DE FLUXO DE API (JSON)

const resposta = {
    sucesso: true,
    mensagem: "Produtos recuperados com sucesso!",
    dados: [
        { id: 1, nome: "Gloss da Kylie Jenner", preco: 250 },
        { id: 2, nome: "Gloss da Kiko", preco: 120 }
    ]
};

// 1. Objeto -> JSON (Envio)
const json = JSON.stringify(resposta);

// 2. JSON -> Objeto (Recebimento)
const dados = JSON.parse(json);

// 3. Uso dos dados
console.log(dados.mensagem, dados.dados);