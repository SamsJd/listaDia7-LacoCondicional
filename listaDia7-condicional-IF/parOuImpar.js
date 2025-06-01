const leia = require('readline-sync');

let numero;

numero = leia.questionInt('Digite um número: ');

    if(numero > 0 && (numero % 2 === 0)) {
        console.log(`\nO Número ${numero} é par e positivo!`);
    } else if (numero > 0 && (numero % 2 !== 0)) {
        console.log(`\nO Número ${numero} é ímpar e positivo!`);
    } else if (numero < 0 && (numero % 2 === 0)) { 
        console.log(`\nO Número ${numero} é par e negativo!`);
    } else { 
        console.log(`\nO Número ${numero} é ímpar e negativo!`);
    }

console.log("\n")