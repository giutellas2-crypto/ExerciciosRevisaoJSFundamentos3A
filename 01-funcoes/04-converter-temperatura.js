// EXERCÍCIO 04 - CONVERTER TEMPERATURA
// Crie uma Function Expression que receba uma temperatura em Celsius
// e retorne o valor convertido para Fahrenheit.
// Fórmula: Fahrenheit = Celsius * 1.8 + 32.
//
// Escreva sua solução abaixo:

const converterCelsiusParaFahrenheit = function(celsius) {
    return celsius * 1.8 + 32;
};

// Exemplo de uso e exibição no console:
const tempFahrenheit = converterCelsiusParaFahrenheit(25);
console.log("A temperatura em Fahrenheit é:", tempFahrenheit);