
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

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display(); 
  
  drawSprites();
 
}











