/*
===========================================================
Exercício 06 - Memoization
Com duas versões:
1. Função com dados fixos e chamada com console.log
2. Entrada do usuário com prompt-sync
===========================================================
*/

// ======= Versão 1: Execução com chamada fixa no código =======

function memoize(fn) {
  const cache = {};

  return function (...args) {
    const chave = JSON.stringify(args);

    if (cache.hasOwnProperty(chave)) {
      console.log("↪️ Retornado do cache:", chave);
      return cache[chave];
    } else {
      const resultado = fn(...args);
      cache[chave] = resultado;
      console.log("✅ Calculado e armazenado:", chave);
      return resultado;
    }
  };
}

function soma(a, b) {
  return a + b;
}

const somaMemo = memoize(soma);

console.log("Resultado:", somaMemo(2, 3)); // Calcula
console.log("Resultado:", somaMemo(2, 3)); // Cache
console.log("Resultado:", somaMemo(4, 5)); // Calcula
console.log("Resultado:", somaMemo(4, 5)); // Cache

// ======= Versão 2: Com prompt-sync para entrada interativa =======

// const prompt = require('prompt-sync')();

// function memoize(fn) {
//   const cache = {};

//   return function (...args) {
//     const chave = JSON.stringify(args);

//     if (cache.hasOwnProperty(chave)) {
//       console.log("↪️ Retornado do cache:", chave);
//       return cache[chave];
//     } else {
//       const resultado = fn(...args);
//       cache[chave] = resultado;
//       console.log("✅ Calculado e armazenado:", chave);
//       return resultado;
//     }
//   };
// }

// function multiplicacao(a, b) {
//   return a * b;
// }

// const multiplicacaoMemo = memoize(multiplicacao);

// console.log("Digite dois números. O resultado será memorizado.");

// while (true) {
//   let entrada = prompt("Digite dois números separados por espaço (ou 'sair'): ");
//   if (entrada.toLowerCase() === "sair") break;

//   const [a, b] = entrada.split(" ").map(Number);
//   const resultado = multiplicacaoMemo(a, b);
//   console.log("Resultado:", resultado);
// }
