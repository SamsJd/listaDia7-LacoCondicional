const leia = require('readline-sync');

let codigo;
let quantidade;
let preco;
let valorTotal;

codigo = leia.questionInt('\nCódigo do Produto: ')
// if (codigo >=7) {
//     console.log("Código do Produto Inválido.\nEscolha um número de 1 a 6.")
//     return }
// Eu queria fazer assim, mas fiquei na dúvida se era para usar somente o case. Mas minha
// preferencia seria essa, interromper o código assim que desse inválido.
quantidade = leia.questionInt('Quantidade: ')

switch (codigo) {
    case 1:
        console.log(`\nProduto: Cachorro Quente`)
        preco = 10
        break;
    case 2:
        console.log(`\nProduto: X-Salada`)
        preco = 15
        break;
    case 3:
        console.log(`\nProduto: X-Bacon`)
        preco = 18
        break;
    case 4:
        console.log(`\nProduto: Bauru`)
        preco = 12
        break;
    case 5:
        console.log(`\nProduto: Refrigerante`)
        preco = 8
        break;
    case 6:
        console.log(`\nProduto: Suco de laranja`)
        preco = 13
        break;
    default:
        console.log("\nCódigo do Produto Inválido.\nEscolha um número de 1 a 6.\n")
    return
}

    valorTotal = quantidade * preco

        console.log("Valor Total:",
	        new Intl.NumberFormat('pt-BR', {
		    style: 'currency',
		    currency: 'BRL',
	        }).format(valorTotal)
        );

console.log("\n")