/*
===========================================================
Exercício 01 - Validação de data
Com duas versões:
1. Função com dados fixos
2. Entrada do usuário com prompt-sync
===========================================================
*/

// ======= Versão 1: Função com dados fixos =======

function ehDataValida(dia, mes, ano) {
  if (mes < 1 || mes > 12 || dia < 1) {
    return false;
  }

  let ehBissexto = false;

  if ((ano % 4 == 0 && ano % 100 != 0) || ano % 400 == 0) {
    ehBissexto = true;
  }

  if (mes == 2) {
    if (ehBissexto) {
      return dia <= 29;
    } else {
      return dia <= 28;
    }
  }
  if (mes == 4 || mes == 6 || mes == 9 || mes == 11) {
    return dia <= 30;
  }
    return dia <= 31;
  
}

console.log("--- INICIANDO TESTES DA FUNÇÃO ehDataValida ---");

// Teste 1: Uma data válida (hoje!)
console.log("20 de Junho de 2025 é válida?", ehDataValida(20, 6, 2025));
// Valor esperado no console: true

// Teste 2: Uma data inválida (dia impossível)
console.log("31 de Abril de 2025 é válida?", ehDataValida(31, 4, 2025));
// Valor esperado no console: false

// Teste 3: Uma data válida em ano bissexto
console.log("29 de Fevereiro de 2024 é válida?", ehDataValida(29, 2, 2024));
// Valor esperado no console: true

// Teste 4: Uma data inválida em ano não-bissexto
console.log("29 de Fevereiro de 2025 é válida?", ehDataValida(29, 2, 2025));
// Valor esperado no console: false

console.log("--- FIM DOS TESTES ---");
  
  // dados fixos
  console.log("29/02/2024 ->", ehDataValida(29, 2, 2024)); // será true
  console.log("31/04/2023 ->", ehDataValida(31, 4, 2023)); // será false
  console.log("31/12/2023 ->", ehDataValida(31, 12, 2023)); // será true
  console.log("0/5/2023 ->", ehDataValida(0, 5, 2023)); // será false
  
  // ======= Versão 2: Com prompt-sync =======
  
  // const prompt = require('prompt-sync')();
  
  // let dia = Number(prompt("Digite o dia: "));
  // let mes = Number(prompt("Digite o mês: "));
  // let ano = Number(prompt("Digite o ano: "));
  
  // if (ehDataValida(dia, mes, ano)) {
  //   console.log("Data válida!");
  // } else {
  //   console.log("Data inválida!");
  // }
  