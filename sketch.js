function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(imagemEstrada);
  mostraAtor();
  movimentoAtor();
  mostraCarros();
  movimentoCarros();
  voltaPosicaoInicialCarros();
}