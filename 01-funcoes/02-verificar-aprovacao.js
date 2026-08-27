// EXERCÍCIO 02 - VERIFICAR APROVAÇÃO
// Crie uma função que receba a média de um aluno e retorne
// "Aprovado" quando a média for maior ou igual a 7
// e "Reprovado" nos demais casos.
//
// Escreva sua solução abaixo:

function verificarAprovacao(media) {
    if (media >= 7) {
        return "Aprovado";
    } else {
        return "Reprovado";
    }
}

// Exemplo de uso e exibição no console:
console.log(verificarAprovacao(8.5)); // Retorna: Aprovado
console.log(verificarAprovacao(5.0)); // Retorna: Reprovado