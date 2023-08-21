//valorestela
let xTela = 600;
let yTela = 400;
//valoresbolinha
let xBolinha = 300;
let yBolinha = 200;
let diamentroBolinha = 20;
let raio = diamentroBolinha / 2;
//velocidadebolinha
let velocidadeXBolinha = 2;
let velocidadeYBolinha = 2;
//valoresraquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

//valoresraqueteoponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

//placarjogo
let meusPontos = 0;
let pontosOponente = 0;



let colidiu = false

function setup() {
  createCanvas(xTela, yTela);
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verficaColisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaMinhaRaquete();
  //verificaColisaoRaquete();
  verificaColisaoRaquete(xRaquete, yRaquete);
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente();
  incluiPlacar();
  marcaPonto();
}

function mostraBolinha(){
  circle(xBolinha, yBolinha, diamentroBolinha);
}

function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;  
}

function verficaColisaoBorda(){
  if (xBolinha + raio > width || xBolinha - raio < 0 ){
    velocidadeXBolinha *= -1; 
  }
  
  if (yBolinha + raio > height || yBolinha - raio < 0 ){
    velocidadeYBolinha *= -1;
  }   
}

function mostraRaquete(x, y){
  rect(x, y, raqueteComprimento, raqueteAltura); 
}


function movimentaMinhaRaquete(){
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
  yRaquete = constrain(yRaquete, 10, 295);
}

function verificaColisaoRaquete() {
  if (xBolinha - raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete){
     velocidadeXBolinha *= -1;
    }
}

function verificaColisaoRaquete(x, y){
  colidiu =
  collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
  if (colidiu){
    velocidadeXBolinha *= -1;
  } 
}

function movimentaRaqueteOponente(){
  velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteComprimento / 2 - 30;
  yRaqueteOponente += velocidadeYOponente;
  yRaqueteOponente = constrain(yRaqueteOponente, 10, 295);
}

function incluiPlacar(){
  fill(255)
  text(meusPontos, 278, 26);
  text(pontosOponente, 321, 26);
}

function marcaPonto(){
  if (xBolinha > 590){
    meusPontos += 1;
  }
  if (xBolinha < 10){
    pontosOponente += 1;
  }
}