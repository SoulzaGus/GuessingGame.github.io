function chut() {
  let numAleatorio = Math.floor(Math.random() * 100) + 1; 
  let tentativas = 0;
  let acertou = false; 
  const maxTentativas = 10;

  let labelResult = document.getElementById("guessResult"); 
  let guess = parseInt(document.getElementById("chute").value);

  while (!acertou && tentativas < maxTentativas) {
    tentativas++;

    if (guess === numAleatorio) {
      let pontuacao = 100 - tentativas;
      labelResult.innerHTML = "Dammmmmmmnnn bruh! Você acertou em " + tentativas + " tentativas. Seu Score foi: " + pontuacao + ".";
      acertou = true; 
    } else if (isNaN(guess)) {
      labelResult.innerHTML = "Cê é loko brow?!"; 
    } else {
      if (guess < numAleatorio) {
        if (guess >= numAleatorio - 10) {
          labelResult.innerHTML = "Por pouco broo, Tente um número um pouco maior.";
        } else {
          labelResult.innerHTML = "Tente um número maior bro.";
        }
      } else {
        if (guess <= numAleatorio + 10) {
          labelResult.innerHTML = "Por pouco broo, Tente um número um pouco menor.";
        } else {
          labelResult.innerHTML = "Tente um número menor bro.";
        }
      }
    }

    guess = parseInt(document.getElementById("chute").value); 
  }

  if (guess === numAleatorio) {
    labelResult.innerHTML = "Você não acertou em " + maxTentativas + " tentativas. O número era " + numAleatorio + ".";
  }
}
