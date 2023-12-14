function preload(){
  nimg = loadImage("nun.png");
  bg = loadImage("bg.jpg");
  homeimg = loadImage("home.png");
  kidimg = loadAnimation("1.png","2.png","3.png");
  pumpimg = loadImage("pump.png");
}

function setup() {

  createCanvas(windowWidth,windowHeight);
 
home = createSprite(150,height-200,20,20);
home.addImage(homeimg);
home.scale = 0.7;

nun = createSprite(170,height-70,10,10);
nun.addImage(nimg);
nun.scale = 0.2;

kid = createSprite(300,height-70,20,20);
kid.addAnimation("running",kidimg);
kid.scale = 0.2;

bgimg = createSprite(0,0,width,height);
bgimg.addImage(bg);






  



}

function draw() 
{
  background(0);
 createPumpkin();

drawSprites()
}

function createPumpkin(){
  if(frameCount%100===0){
  pumpkin = createSprite(width,Math.round(random(150,height-150)))
  pumpkin.addImage(pumpimg);
  pumpkin.velocityX = -3;
  pumpkin.scale = 0.1;}

}



