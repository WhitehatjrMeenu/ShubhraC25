const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var paperBall,ground,dustbin1,dustbin2,dustbin3,wall;

function preload()
{
	
}

function setup() {
	createCanvas(800,600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	paperBall = new ball(150,250,70);
	ground = new bal(400,550,800,10);
	dustbin1 = new Dustbin(600,540);
	dustbin2 = new Dustbin2(440,470);
	dustbin3 = new Dustbin3(560,410);
	wall = new Wall(790,300);	

	Engine.run(engine);
  
}


function draw() {
   background("lightblue");

	Engine.update(engine);

  rectMode(CENTER);
  paperBall.display();
  ground.display();
  dustbin1.display();
  //dustbin2.display();
 //dustbin3.display();
  wall.display();

 // keyPressed(); not requried  as key pressed is default function like function setup .
  
 //  drawSprites();-- Remove this Shubhra Not required 

 textSize(22);
 text("press up arrow to jump",50,50);
 //text("press down arrow to stop",50,75);
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:90,y:-120});
	}

	/*if (paperBall.colllide(dustbin3)){
		translation = {x:-0.2,y:3};
		Matter.Body.translate(paperBall,translation);
	}*/
}