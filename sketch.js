var bg, canvas;
var tom;
var jerry;
var jerryImg1, jerryImg2, jerryImg3;
var tomImg1,tomImg2, tomImg3;


function preload() {
  bg = loadImage("images/garden.png"); 
  tomImg1= loadAnimation("images/cat1.png"); 
  tomImg2=loadAnimation("images/tomTwo.png","images/tomThree.png");
   tomImg3= loadAnimation("images/tomFour.png");
    jerryImg1=loadAnimation("images/jerryOne.png"); 
    jerryImg2= loadAnimation("images/jerryTwo.png","images/jerryThree.png"); 
    jerryImg3=loadAnimation("images/jerryFour.png");




function setup(){
    canvas = createCanvas(1000,800);
    //create tom and jerry sprites here
    tom = createSprite(870,600);
    tom.addAnimation("catSleeping", tomImg1);
    tom.scale = 0.2;

    jerry = createSprite(200, 600);
  jerry.addAnimation("mouseStanding", jerryImg1);
  jerry.scale = 0.15;
}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
if(cat.x - mouse.x < (cat.width - mouse.width)/2)
{
  tom.velocityX-0;
  tom.addAnimation("catLastImage", tomImg3);
  tom.x-300;
  tom.scale = 0.2;
  tom.changeAnimation("catLastImage");
  jerry.addAnimation("mouseLastImage", jerryImg2);
  jerry.scale=0.15;
  jerry.changeAnimation("mouseLatImage");


  

}
  drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
    jerry.addAnimation("mouseTeasing", jerryImg1);
    jerry.changeAnimation("mouseTeasing");
    jerry.frameDelay = 25;
     
tom.velocityX = -5;
    tom.addAnimation("catRunning", tomImg2);
    tom.changeAnimation("catRunning");
}
}
}