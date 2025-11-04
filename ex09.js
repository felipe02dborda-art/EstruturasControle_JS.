let numeros = [5, 8, 12, 0, 7, -3];//exemplos apenas
let cont = 0;
let i = 0;
while (true) {
  let n = numeros[i];
  i++;
  if (n < 0) break;
  cont++;
}
console.log("Foram digitados", cont, "números positivos.");
