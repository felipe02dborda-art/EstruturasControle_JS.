let numeros = [5, 8, 3, 10, 0];//exemplos apenas
let total = 0;
let i = 0;
while (true) {
  let n = numeros[i];
  i++;
  if (n === 0) break;
  total += n;
}
console.log("Soma total =", total);
