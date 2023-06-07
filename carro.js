//Tamanho dos carros
let xCarros = [600,600,600];
let yCarros = [40,96,150];
let comprimentoCarros = [50,50,50];
let alturaCarros = [40,40,40];

//Velocidade dos carros
let velocidadeCarros = [2,2.5,3.2];

//Posição inicial dos carros
let posicInicCarro = 600;

//Chegada do carro no final da tela
let finalTela = -60;


function mostraCarros(){
  for(let i = 0; i < imagensCarros.length; i += 1){
   image(imagensCarros[i], xCarros[i],yCarros[i],comprimentoCarros[i],alturaCarros[i]);   
  }
}

function movimentoCarros(){
  for(let i = 0; i < xCarros.length; i += 1){
    xCarros[i] -= velocidadeCarros[i];
  }
}

function passouTodaTela(xCarro){
  return xCarro < finalTela;
}

function voltaPosicaoInicialCarros(){
  for(let i = 0; i < xCarros.length; i += 1){
    if(passouTodaTela (xCarros[i])){
      xCarros[i] = posicInicCarro;
    }
  }
}  