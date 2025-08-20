// Algoritmo para somar (se eles forem iguais) ou multiplicar (se eles forem diferentes) dois números//


let A = parseInt(prompt("Digite um número A: ")); // o ponto e vírgula é usado para finalizar a instrução
// "let" é o termo utilizado no javaScript para declarar variáveis
// "parseInt" converte a entrada do usuário em um número inteiro
// "prompt" exibe uma caixa de diálogo para o usuário inserir uma resposta
let B = parseInt(prompt("Digite outro número B: "));
let C;

if (A == B) {
  C = A + B;
  alert(`A SOMA DE A (${A}) + B (${B}) É ${C}`);
  // "alert" exibe uma caixa de diálogo com uma mensagem
  // geralmente o alert é usado entre aspas para exibir uma mensagem
  // a crase e a estrutura ${variável} permitem a vizualização do valor de uma variável dentro de uma string (texto)
} else if (A != B) {
  C = A * B;
  alert(`A MULTIPLICAÇÃO DE A (${A}) x B (${B}) É ${C}`);
}
