const leia = require('readline-sync');

let nome;
let cargo;
let salario;
let novoSalario;
let reajuste;

nome = leia.question('\nNome do colaborador: ')
cargo = leia.questionInt('Cargo: ')
salario = leia.questionFloat('Salário: ')

switch (cargo) {
    case 1:
        cargo = "Gerente"
        reajuste = 0.10
        break;
    case 2:
        cargo = "Vendedor"
        reajuste = 0.07
        break;
    case 3:
        cargo = "Supervisor"
        reajuste = 0.09
        break;
    case 4:
        cargo = "Motorista"
        reajuste = 0.06
        break;
    case 5:
        cargo = "Estoquista"
        reajuste = 0.05
        break;
    case 6:
        cargo = "Técnico de TI"
        reajuste = 0.08
        break;    
    default:
        break;
}

    novoSalario = salario + (reajuste * salario)

console.log(`\nNome do colaborador: ${nome}`);
console.log(`\nCargo: ${cargo}`);
console.log(`\nSalário: `,
	new Intl.NumberFormat('pt-BR', {
		style: 'currency',
		currency: 'BRL',
	}).format(novoSalario)
);

console.log('\n')