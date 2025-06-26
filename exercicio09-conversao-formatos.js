/*
===========================================================
Exercício 09 - Conversão entre array de pares e objeto
Com duas versões:
1. Versão com dados fixos no código
2. Entrada do usuário com prompt-sync
===========================================================
*/

// ======= Versão 1: Com dados fixos =======

function paresParaObjeto(pares) {
  const obj = {};
  for (let i = 0; i < pares.length; i++) {
    const [chave, valor] = pares[i];
    obj[chave] = valor;
  }
  return obj;
}

function objetoParaPares(obj) {
  const pares = [];
  for (let chave in obj) {
    if (obj.hasOwnProperty(chave)) {
      pares.push([chave, obj[chave]]);
    }
  }
  return pares;
}

const paresFixos = [["a", 1], ["b", 2], ["c", 3]];
const objetoFixado = { x: 10, y: 20 };

console.log("De pares para objeto:", paresParaObjeto(paresFixos));
console.log("De objeto para pares:", objetoParaPares(objetoFixado));

// ======= Versão 2: Entrada do usuário com prompt-sync =======

// const prompt = require('prompt-sync')();

// function paresParaObjeto(pares) {
//   const obj = {};
//   for (let i = 0; i < pares.length; i++) {
//     const [chave, valor] = pares[i];
//     obj[chave] = valor;
//   }
//   return obj;
// }

// function objetoParaPares(obj) {
//   const pares = [];
//   for (let chave in obj) {
//     if (obj.hasOwnProperty(chave)) {
//       pares.push([chave, obj[chave]]);
//     }
//   }
//   return pares;
// }

// const modo = prompt("Escolha o modo: '1' para pares → objeto, '2' para objeto → pares: ");

// if (modo === "1") {
//   const pares = [];
//   console.log("Digite pares [chave, valor]. Digite 'fim' para encerrar.");

//   while (true) {
//     const chave = prompt("Chave: ");
//     if (chave.toLowerCase() === "fim") break;
//     const valor = prompt("Valor: ");
//     pares.push([chave, valor]);
//   }

//   console.log("Objeto gerado:", paresParaObjeto(pares));

// } else if (modo === "2") {
//   const obj = {};
//   console.log("Digite um objeto como pares chave/valor. Digite 'fim' para encerrar.");

//   while (true) {
//     const chave = prompt("Chave: ");
//     if (chave.toLowerCase() === "fim") break;
//     const valor = prompt("Valor: ");
//     obj[chave] = valor;
//   }

//   console.log("Array de pares:", objetoParaPares(obj));
// } else {
//   console.log("Modo inválido.");
// }
