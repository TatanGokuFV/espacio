var canvas
var backgroungImg
var planet
var planetImg
var menuImg

function preload(){
backgroundImg=loadImage("pixel art space.png");
planetImg=loadImage("planet.png");
menuImg=loadImgae("menu.png")
}

function setup(){
canvas=createCanvas(windowWidth,windowHeight);
planet=createSprite(windowWidth/2,windowHeight/2+650,100,100);
planet.scale=2
planet.addImage(planetImg);
}

function draw(){
  background(backgroundImg);
  
  drawSprites();
}