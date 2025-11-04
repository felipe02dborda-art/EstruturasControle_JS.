let segredo = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;
let palpites = [20, 50, 75, 70, 80, 90, 85, 34, 89]; //exemplos apenas
let i = 0;
let palpite;
do {
  palpite = palpites[i];
  i++;
  tentativas++;
  if (palpite < segredo) console.log(palpite + " é muito baixo!");
  else if (palpite > segredo) console.log(palpite + " é muito alto!");
} while (palpite !== segredo && i < palpites.length);
if (palpite === segredo) {
  console.log("Acertou em " + tentativas + " tentativas!");
} else {
  console.log("Não conseguiu acertar com os palpites simulados. O número era " + segredo);
}
