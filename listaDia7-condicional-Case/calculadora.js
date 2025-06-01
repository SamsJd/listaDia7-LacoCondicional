const leia = require('readline-sync');

let n1;
let n2;
let operacao;
let resultado;

n1 = leia.questionFloat('Digite o 1º número: ')
n2 = leia.questionFloat('Digite o 2º número: ')
operacao = leia.questionInt('Operação: ')

switch (operacao) {
    case 1:
        resultado = n1 + n2
        console.log(`\n${n1.toFixed(1)} + ${n2.toFixed(1)} = ${resultado.toFixed(1)}`)
        break;
    case 2:
        resultado = n1 - n2
        console.log(`\n${n1.toFixed(1)} - ${n2.toFixed(1)} = ${resultado.toFixed(1)}`)
        break;
    case 3:
        resultado = n1 * n2
        console.log(`\n${n1.toFixed(1)} * ${n2.toFixed(1)} = ${resultado.toFixed(1)}`)
        break;
    case 4:
        resultado = n1 / n2
        console.log(`\n${n1.toFixed(1)} / ${n2.toFixed(1)} = ${resultado.toFixed(1)}`)
        break;
    default:
        console.log("\n*Operação Inválida!*")
        break;
}
console.log("\n")