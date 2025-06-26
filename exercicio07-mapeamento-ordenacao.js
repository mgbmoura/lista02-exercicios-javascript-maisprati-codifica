/*
===========================================================
Exercício 07 - Mapeamento e ordenação de produtos
Com duas versões:
1. Array produtos fixo no código
2. Entrada do usuário com prompt-sync (nome e preço)
===========================================================
*/

// ======= Versão 1: Array produtos fixo no código =======

function nomesOrdenadosPorPreco(produtos) {
  return produtos
    .sort((a, b) => a.preco - b.preco)
    .map(produto => produto.nome);
}

const produtosFixo = [
  { nome: "Banana", preco: 2.5 },
  { nome: "Maçã", preco: 3.0 },
  { nome: "Laranja", preco: 1.8 }
];

console.log("Nomes ordenados por preço:", nomesOrdenadosPorPreco(produtosFixo));

// ======= Versão 2: Entrada do usuário com prompt-sync =======

// const prompt = require('prompt-sync')();

// function nomesOrdenadosPorPreco(produtos) {
//   return produtos
//     .sort((a, b) => a.preco - b.preco)
//     .map(produto => produto.nome);
// }

// const produtosUsuario = [];
// console.log("Digite produtos (nome e preço). Digite 'fim' para encerrar.");

// while (true) {
//   const nome = prompt("Nome do produto: ");
//   if (nome.toLowerCase() === "fim") break;

//   const preco = Number(prompt("Preço do produto: "));
//   produtosUsuario.push({ nome, preco });
// }

// console.log("Nomes ordenados por preço:", nomesOrdenadosPorPreco(produtosUsuario));
