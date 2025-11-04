let numeros = [3, 8, 10, 7, 22, 5, 13, 4, 12, 9];//exemplos apenas
let pares = 0;
for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 === 0) pares++;
}
console.log("Quantidade de pares:", pares);
