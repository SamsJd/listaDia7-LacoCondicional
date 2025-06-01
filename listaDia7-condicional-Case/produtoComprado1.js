const leia = require('readline-sync');

let codigo;
let quantidade;
let valorTotal;

codigo = leia.questionInt('\nCódigo do Produto: ')
    if (codigo >=7) {
        console.log("Código do Produto Inválido.\n")
        return
    }
quantidade = leia.questionInt('Quantidade: ')

switch (codigo) {
    case 1:
        console.log(`\nProduto: Cachorro Quente`)
        valorTotal = quantidade * 10
        console.log("Valor Total:",
	        new Intl.NumberFormat('pt-BR', {
		    style: 'currency',
		    currency: 'BRL',
	        }).format(valorTotal)
            );
        break;
    case 2:
        console.log(`\nProduto: X-Salada`)
        valorTotal = quantidade * 15
        console.log("Valor Total:",
	        new Intl.NumberFormat('pt-BR', {
		    style: 'currency',
		    currency: 'BRL',
	        }).format(valorTotal) );
        break;
    case 3:
        console.log(`\nProduto: X-Bacon`)
        valorTotal = quantidade * 18
        console.log("Valor Total:",
	        new Intl.NumberFormat('pt-BR', {
		    style: 'currency',
		    currency: 'BRL',
	        }).format(valorTotal));
        break;
    case 4:
        console.log(`\nProduto: Bauru`)
        valorTotal = quantidade * 12
        console.log("Valor Total:",
	        new Intl.NumberFormat('pt-BR', {
		    style: 'currency',
		    currency: 'BRL',
	        }).format(valorTotal));
        break;
    case 5:
        console.log(`\nProduto: Refrigerante`)
        valorTotal = quantidade * 8
        console.log("Valor Total:",
	        new Intl.NumberFormat('pt-BR', {
		    style: 'currency',
		    currency: 'BRL',
	        }).format(valorTotal));
        break;
    case 6:
        console.log(`\nProduto: Suco de laranja`)
        valorTotal = quantidade * 13
        console.log("Valor Total:",
	        new Intl.NumberFormat('pt-BR', {
		    style: 'currency',
		    currency: 'BRL',
	        }).format(valorTotal));
        break;
}

console.log("\n")