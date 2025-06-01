const leia = require('readline-sync');

let nA;
let nB;
let nC;

nA = leia.questionInt('Digite o número A: ')
nB = leia.questionInt('Digite o número B: ')
nC = leia.questionInt('Digite o número C: ')

if ((nA + nB) > nC) {
    console.log(`\nA Soma de A + B é Maior do que C\n`);
} else if ((nA + nB) < nC) {
    console.log(`\nA Soma de A + B é Menor do que C\n`);
} else if ((nA + nB) === nC) {
    console.log(`\nA Soma de A + B é Igual a C\n`);
}
