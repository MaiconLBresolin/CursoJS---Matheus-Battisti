let num = 17;
let div = 0;

for (let i = 1; i <= num; i++) {
  if (num % 1 == 0) {
    div++;
  }
}

if (div === 2) {
  console.log("é primo");
} else {
  console.log("não é primo");
}
