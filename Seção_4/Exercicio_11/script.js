let idade = 18;
let temCNH = false;

if (idade >= 18 && temCNH === true) {
  console.log("Você pode dirigir");
} else if (idade >= 18 && temCNH !== true) {
  console.log("você nao pode dirigir, pois, nao tem cnh");
} else {
  console.log("você não pode dirigir");
}
