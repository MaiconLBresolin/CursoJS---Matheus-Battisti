function podeAuto(age) {
  if (age >= 18) {
    console.log("Você pode entrar na auto escola");
  } else {
    console.log(
      "Você não pode entrar na auto escola, pois ainda nao tem a idade"
    );
  }
}

podeAuto(18);
podeAuto(19);
podeAuto(13);
