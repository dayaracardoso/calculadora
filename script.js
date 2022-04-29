var display = document.getElementById("display"); // define o display

function inserir(num) { // pega o valor do button clicado
  display.value += num; // adiciona sempre o que for clicado ao que já existe no display
}

function limpaCalc() { // define o valor do display como vazio
  display.value = "";
}

function calcular() {
  temConta = display.value;
  if(temConta) {
    display.value = eval(temConta);
  }
}