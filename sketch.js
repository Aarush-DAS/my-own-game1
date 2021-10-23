var form,canvas,game,player;
var bg,ship,monster,princess,astroids,alienSpaceShip,coin,landing,fuel,spaceShip,manImg;
var bgImg,man,shipImg
var playerCount=0;
var gameState=0;

function preload() {
  bgImg=loadImage("images/space.jpg");
  shipImg=loadImage("images/ship.png");
  monster=loadImage("images/monster.png");
  manImg=loadImage("images/man.png");
  landing=loadImage("images/landing.jpg");
  princess=loadImage("images/princess.png");
  alienSpaceShip=loadImage("images/alienShip.png");
  fuel=loadImage("images/fuel.png");
  astroids=loadImage("images/astroids.png");
  coin=loadImage("images/coin.png");
  spaceShip=loadImage("images/spaceship.png");
}

function setup() {
  canvas=createCanvas(windowWidth,windowHeight);
  database = firebase.database();
  game=new Game();
  game.getState();
  game.start();
  bg=createSprite(900,900);
  bg.addImage(bgImg);
  bg.scale=1.2;
  bg.velocityY=1;
  man=createSprite(width/2,height-20,20,20);
  man.addImage(manImg);
  man.visible=false
  ship=createSprite(450,700);
  }



function draw() {
  //background(bg);  
  if(gameState===1){
  
    if(bg.y>displayHeight){
      bg.y=bg.width/2;
    }
    game.play();
      }
  
  if(playerCount===1){
    game.update(1);
  }
  drawSprites();
  
}