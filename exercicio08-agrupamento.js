/*
===========================================================
Exercício 08 - Agrupamento por cliente usando reduce
Com duas versões:
1. Array vendas fixo
2. Entrada do usuário com prompt-sync
===========================================================
*/

// ======= Versão 1: Array vendas fixo  =======

function agruparPorCliente(vendas) {
  return vendas.reduce((acumulador, venda) => {
    if (acumulador[venda.cliente]) {
      acumulador[venda.cliente] += venda.total;
    } else {
      acumulador[venda.cliente] = venda.total;
    }
    return acumulador;
  }, {});
}

const vendasFixas = [
  { cliente: "Ana", total: 100 },
  { cliente: "João", total: 200 },
  { cliente: "Ana", total: 50 },
  { cliente: "Carlos", total: 300 }
];

console.log("Totais por cliente:", agruparPorCliente(vendasFixas));

// ======= Versão 2: Entrada do usuário com prompt-sync =======

// const prompt = require('prompt-sync')();

// function agruparPorCliente(vendas) {
//   return vendas.reduce((acumulador, venda) => {
//     if (acumulador[venda.cliente]) {
//       acumulador[venda.cliente] += venda.total;
//     } else {
//       acumulador[venda.cliente] = venda.total;
//     }
//     return acumulador;
//   }, {});
// }

// const vendasUsuario = [];
// console.log("Digite as vendas (cliente e total). Digite 'fim' para encerrar.");

// while (true) {
//   const cliente = prompt("Cliente: ");
//   if (cliente.toLowerCase() === "fim") break;

//   const total = Number(prompt("Valor da venda: "));
//   vendasUsuario.push({ cliente, total });
// }

// console.log("Totais por cliente:", agruparPorCliente(vendasUsuario));
