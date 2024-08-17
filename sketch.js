
let campoIdade;
let campoFilmes;
let campoDesenhos;


function setup() {
  createCanvas(600, 400);
  createElement("h1", "Recomendador de Desenhos/Filmes")
    createSpan ("Sua idade:");
    campoIdade = createInput("5");
    campoDesenhos = createCheckbox("Desenhos - 5 a 11 anos"); 
    campoFilmes = createCheckbox ("Filmes - 12 a 18 anos");
}

function draw() {
  background("black");
  let idade = campoIdade.value();
  let recomendacao = geraRecomendacao (idade);
  fill(color(150,0,0))
  textAlign(CENTER, CENTER);
  textSize(30);
  text (recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade) {
  if(idade >= 18) {return "Doce vingança"}
  if(idade >= 17) {return "Logan"}
  if(idade >= 16) {return "Deadpool"}
  if(idade >= 15) {return "Maze runner"}
  if(idade >= 14) {return "Venom"}
  if(idade >= 13) {return "Guardiões da galáxia"}
  if(idade >= 12) {return "Os vingadores"}
  if(idade >= 11) {return "Coraline"}
  if(idade >= 10) {return "Carros"}
  if(idade >= 9) {return "Kung fu panda"}
  if(idade >= 8) {return "Toy story"}
  if(idade >= 7) {return "Up - altas aventuras"}
  if(idade >= 6) {return "gato de botas"}
  if(idade >= 5) {return "como treinar seu dragão"}  
  
}