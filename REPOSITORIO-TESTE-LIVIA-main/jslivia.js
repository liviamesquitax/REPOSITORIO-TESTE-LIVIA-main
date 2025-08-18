let numero01 = parseInt(prompt("Digite um número: "));
let numero02 = parseInt(prompt("Digite outro número: "));

if (numero01 == numero02) {
  alert("Os número são iguais");
} else if (numero01 != numero02) {
  alert("Os número são diferentes");
}
if (numero01 < numero02) {
  alert(
    `Você digitou os números ${numero01} e ${numero02}, em ordem crescente.`
  );
} else if (numero01 > numero02) {
  alert(
    `Você digitou os números ${numero02} e ${numero01}, em ordem crescente.`
  );
}
