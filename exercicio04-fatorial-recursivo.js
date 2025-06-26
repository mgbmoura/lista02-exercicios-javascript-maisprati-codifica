/*
===========================================================
Exercício 04 - Fatorial recursivo
Com duas versões:
1. Função com dados fixos
2. Entrada do usuário com prompt-sync
===========================================================
*/

// ======= Versão 1: Função com dados fixos =======

function fatorial(n) {
  if (n < 0) {
    throw new Error("Número negativo não tem fatorial!");
  } else if (n === 0) {
    return 1;
  } else {
    return n * fatorial(n - 1);
  }
}

console.log("Fatorial de 5:", fatorial(5)); // 120
console.log("Fatorial de 0:", fatorial(0)); // 1
console.log("Fatorial de 1:", fatorial(1)); // 1
// console.log("Fatorial de -3:", fatorial(-3)); // Gera erro

// ======= Versão 2: Entrada do usuário com prompt-sync =======

// const prompt = require('prompt-sync')();

// function fatorial(n) {
//   if (n < 0) {
//     throw new Error("Número negativo não tem fatorial!");
//   } else if (n === 0) {
//     return 1;
//   } else {
//     return n * fatorial(n - 1);
//   }
// }

// try {
//   const numero = Number(prompt("Digite um número inteiro para calcular o fatorial: "));
//   console.log(`Fatorial de ${numero}:`, fatorial(numero));
// } catch (error) {
//   console.log("Erro:", error.message);
// }
