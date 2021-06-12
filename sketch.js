const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var engine,world;

var wizard, wizardimage;
var backgroundimage, bg;

var monster, monsterImage, monsterGroup;

function preload(){
	backgroundimage = loadImage("images/castlebackground.png");
	wizardimage = loadAnimation("images/wizardgif/frame0.png", "images/wizardgif/frame1.png", "images/wizardgif/frame2.png", "images/wizardgif/frame3.png", "images/wizardgif/frame4.png", "images/wizardgif/frame5.png", "images/wizardgif/frame6.png", "images/wizardgif/frame7.png")
	
	monsterImage = loadAnimation("images/monstergif/monster1.png", "images/monstergif/monster2.png" )

}


function setup() {
	createCanvas(windowWidth, windowHeight);
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

//	bg = createSprite(200, 200);

	wizard = createSprite(width/2 - 500, height/2 + 200);
	wizard.addAnimation("running", wizardimage);




}

function draw() {
Engine.update(engine)
  background(backgroundimage);

spawnMonster();
drawSprites();
}




function mouseDragged(){

	}

function spawnMonster(){
 if(frameCount % 20 === 0){
monster = createSprite(windowWidth+10, random(200, windowHeight-100))
monster.velocityX = -5;
monster.addAnimation("monster", monsterImage)

 }
}





			
