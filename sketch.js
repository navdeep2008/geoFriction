
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 570);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(200,530,2100,20);
	hammer = new Hammer(200,200,100,50);
	rubber = new Rubber(20,20,2);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display(); 
  hammer.display();
  rubber.display();
  
  drawSprites();
 
}











