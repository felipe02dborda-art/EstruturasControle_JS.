let a = 48;
let b = 18;
while (a !== b) {
  if (a > b) a -= b;
  else b -= a;
}
console.log("MDC =", a);
