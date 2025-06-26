/*
===========================================================
Exercício 02 - Jogo de adivinhação
Com duas versões:
1. Jogo com número secreto fixo para testes
2. Jogo com número secreto aleatório e entrada do usuário com prompt-sync
===========================================================
*/

// ======= Versão 1: Número secreto fixo =======

function jogoAdivinhacao() {
  const numeroSecreto = 42; // número fixo para teste
  let tentativas = 0;
  const palpites = [30, 50, 42]; // exemplo de sequência de palpites fixos

  for (let i = 0; i < palpites.length; i++) {
    const palpite = palpites[i];
    tentativas++;
    console.log(`Palpite: ${palpite}`);

    if (palpite < numeroSecreto) {
      console.log("Mais alto!");
    } else if (palpite > numeroSecreto) {
      console.log("Mais baixo!");
    } else {
      console.log(`Parabéns! Você acertou em ${tentativas} tentativa(s)!`);
      break;
    }
  }
}

jogoAdivinhacao();

// ======= Versão 2: Jogo com prompt-sync e número aleatório =======

// const prompt = require('prompt-sync')();

// function jogoAdivinhacao() {
//   const numeroSecreto = Math.floor(Math.random() * 100) + 1;
//   let tentativas = 0;
//   let palpite;

//   do {
//     palpite = Number(prompt("Digite seu palpite (1 a 100): "));
//     tentativas++;

//     if (palpite < numeroSecreto) {
//       console.log("Mais alto!");
//     } else if (palpite > numeroSecreto) {
//       console.log("Mais baixo!");
//     } else {
//       console.log(`Parabéns! Você acertou em ${tentativas} tentativa(s)!`);
//     }
//   } while (palpite !== numeroSecreto);
// }

// jogoAdivinhacao();
