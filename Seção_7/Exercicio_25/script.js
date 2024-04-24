function decrePar(num) {
  for (let i = num; i >= 0; i--) {
    if (num % 2 == 0) {
      console.log(num);
    }
    num = num - 1;
  }
}

decrePar(50);
