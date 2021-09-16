var numeroSecreto = parseInt(Math.random() * 11);

function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  console.log(chute);
  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = "você acertou";
    console.log("acertou");
  } else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML = "Você deve digitar um número de 0 a 10 ";
  } else {
    if (chute < numeroSecreto) {
      elementoResultado.innerHTML =
        "Que pena você errou, porém é maior o numero";
    } else {
      elementoResultado.innerHTML =
        "Que pena você errou, porém é menor o numero";
    }
  }
}
