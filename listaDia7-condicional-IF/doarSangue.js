const leia = require('readline-sync');

let nome;
let idade;
let doacao;

nome = leia.question('\nDigite o Nome do Doador: ');
idade = leia.questionInt('Digite a Idade do Doador: '); 
    if (idade <=0) {
        console.log('IDADE INVÁLIDA');
        return
    }
doacao = leia.keyInYNStrict('É a Primeira Doação de Sangue? ');

if ((idade >= 18 && idade <=59) || (idade >= 60 && idade <=69 && doacao === false)) {
    console.log (`\n${nome} ESTÁ apto/a/e para doar sangue.\nParabéns e Boa Sorte!`);
} else if (idade >= 60 && idade <=69 && doacao === true) {
    console.log (`\n${nome} NÃO está apto/a/e para doar sangue.\nUma Pena!`);
} else {
    console.log (`\n${nome} NÃO está apto/a/e para doar sangue.\nUma Pena!`);
}

console.log("\n");