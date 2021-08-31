
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var mainGround
var leftground
var rightground
let ball
function preload()
{
	
}

  


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ellipseMode(RADIUS)
	//Create the Bodies Here.
	var ball_options={
		restitution:0.7
		
	  }
	  ball=Bodies.circle(200,50,30,ball_options)
	  World.add(world,ball)
	Engine.run(engine);
  mainGround=new Ground(400,500,800,3);
  leftground=new Ground(450,450,3,100)
  rightground=new Ground(600,450,3,100)
}


function draw() {
  rectMode(CENTER);
  background(0);
  mainGround.show()
  leftground.show()
  rightground.show()

if (keyWentDown("space")){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0.08,y:-0.03})
}
  ellipse(ball.position.x,ball.position.y,30)
}
function mousePressed(){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:-0.05})

}



