// EXERCÍCIO 26 - PARÂMETRO PADRÃO
// Crie uma função saudacao que receba nome e periodo.
// O parâmetro periodo deve ter o valor padrão "dia".
// Teste a função informando e omitindo o período.
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