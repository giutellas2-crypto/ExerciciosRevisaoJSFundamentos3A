// EXERCÍCIO 27 - OBJETO PARA JSON
// Crie um objeto pedido com numero, cliente e valorTotal.
// Converta o objeto para JSON utilizando JSON.stringify()
// e mostre o resultado.
//
// Escreva sua solução abaixo:


function saudacao(nome, periodo = "dia") {
    return `Bom ${periodo}, ${nome}!`;
}

// Teste 1: Omitindo o período (assume o valor padrão "dia")
console.log(saudacao("Carlos")); 
// Exibe: Bom dia, Carlos!

// Teste 2: Informando o período explicitamente
console.log(saudacao("Mariana", "tarde")); 
// Exibe: Bom tarde, Mariana!

console.log(saudacao("Ana", "noite")); 
// Exibe: Bom noite, Ana!