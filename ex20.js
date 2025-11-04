let numeros = [20, 15, 30, 40, 10]; // exemplo apenas
let somaNum = 0;
let count = 0;
let i = 0;
while (somaNum <= 100 && i < numeros.length) {
  let n = numeros[i];
  somaNum += n;
  count++;
  i++;
}
console.log("Soma total: " + somaNum + " — Números lidos: " + count);
