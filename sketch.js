var player
var playerImg
var terror;
var tImg;
var bg;
var bgImg;
var ground;
function preload(){
 bgImg = loadImage("images/Background/MyBg(1).jpg"); 
 playerImg = loadAnimation("images/Player/P1.png","images/Player/P2.png","images/Player/P3.png","images/Player/P4.png","images/Player/P5.png","images/Player/P6.png");
 tImg = loadAnimation("images/Terrorist/T-1.png","images/Terrorist/T-2.png","images/Terrorist/T-3.png","images/Terrorist/T-4.png","images/Terrorist/T-5.png","images/Terrorist/T-6.png","images/Terrorist/T-7.png")
}
function setup() {
  createCanvas(1000, 600);

  ground = createSprite(displayWidth+700,500,displayWidth*5,20);
  player = createSprite(500,300);
  player.addAnimation("player",playerImg);
  player.scale = 2;
  terror = createSprite(400,400,);
  terror.addAnimation("t1",tImg);
  
}

function draw() {
  background(0);
  image(bgImg,-displayWidth,0,displayWidth*5,displayHeight); 
  player.x = camera.x
  if(keyDown(RIGHT_ARROW)){
    camera.x+=20;
  }
  player.velocityY = player.velocityY+0.5;
  player.collide(ground);
  drawSprites();
}
