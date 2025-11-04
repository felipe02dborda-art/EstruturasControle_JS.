let notas = [8.5, 7.0, 9.2, 6.8, 10]; //exemplos apenas
let somaNotas = 0;
for (let i = 0; i < notas.length; i++) {
  somaNotas += notas[i];
}
let media = somaNotas / notas.length;
console.log("Média =", media);
