let A = parseInt(prompt("Digite um número A: "));
let B = parseInt(prompt("Digite outro número B: "));
let C;

if (A == B) {
  C = A + B;
  alert(`A SOMA DE A E B É ${C}`);
} else if (A != B) {
  C = A * B;
  alert(`A MULTIPLICAÇÃO DE A E B É ${C}`);
}
