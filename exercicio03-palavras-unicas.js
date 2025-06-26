/*
===========================================================
Exercício 03 - Palavras únicas em uma string
Com duas versões:
1. Função com dados fixos
2. Entrada do usuário com prompt-sync
===========================================================
*/

// ======= Versão 1: Função com dados fixos =======

function palavrasUnicas(texto) {
  const palavras = texto.split(" ");
  const unicas = [];

  for (let i = 0; i < palavras.length; i++) {
    const palavra = palavras[i];
    if (unicas.indexOf(palavra) === -1) {
      unicas.push(palavra);
    }
  }

  return unicas;
}

const textoFixo = "olá mundo olá mundo 48 mundo";
console.log("Texto:", textoFixo);
console.log("Palavras únicas:", palavrasUnicas(textoFixo));

// ======= Versão 2: Entrada do usuário com prompt-sync =======

// const prompt = require('prompt-sync')();

// function palavrasUnicas(texto) {
//   const palavras = texto.split(" ");
//   const unicas = [];

//   for (let i = 0; i < palavras.length; i++) {
//     const palavra = palavras[i];
//     if (unicas.indexOf(palavra) === -1) {
//       unicas.push(palavra);
//     }
//   }

//   return unicas;
// }

// const textoUsuario = prompt("Digite um texto: ");
// console.log("Palavras únicas:", palavrasUnicas(textoUsuario));
