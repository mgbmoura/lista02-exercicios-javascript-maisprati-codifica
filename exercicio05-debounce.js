/*
===========================================================
Exercício 05 - Debounce
Com duas versões:
1. Função debounce com execução simulada no código
2. Entrada do usuário com prompt-sync (ex: digitando nomes)
===========================================================
*/

// ======= Versão 1: Função simulada com timeout fixo =======

function debounce(fn, delay) {
  let timerId = null;

  return function (...args) {
    if (timerId !== null) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

function saudacao() {
  console.log("Executando função final (ex: salvar, pesquisar, etc)");
}

const debounced = debounce(saudacao, 1000);

// Simula chamadas rápidas
console.log("Chamando função várias vezes seguidas...");
debounced();
debounced();
debounced(); // Apenas essa será executada após 1s

// ======= Versão 2: Com prompt-sync para entrada interativa do usuário =======

// const prompt = require('prompt-sync')();

// function debounce(fn, delay) {
//   let timerId = null;

//   return function (...args) {
//     if (timerId !== null) {
//       clearTimeout(timerId);
//     }
//     timerId = setTimeout(() => {
//       fn.apply(this, args);
//     }, delay);
//   };
// }

// function imprimirNome(nome) {
//   console.log(`Nome digitado: ${nome}`);
// }

// const debouncedNome = debounce(imprimirNome, 1500);

// console.log("Digite nomes rapidamente. A função será chamada apenas após 1,5s de pausa.");

// while (true) {
//   const entrada = prompt("Digite algo (ou 'sair' para encerrar): ");
//   if (entrada.toLowerCase() === "sair") break;
//   debouncedNome(entrada);
// }
