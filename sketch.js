const World = Matter.World;
const Engine = Matter.Engine;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
//namespace

var engine, world, ball, ground

function setup() {
createCanvas(400,400);

engine = Engine.create()
world = engine.world;

var ball_options={
  restitution:4,
  frictionAir:0.05
}

ball = Bodies.circle(100,10,40, ball_options)
World.add(world, ball)

var seila={
  isStatic: true
}

ground = Bodies.rectangle(200,350,500,30, seila)
World.add(world, ground)
   

}


function draw() 
{
 background(180)
 Engine.update(engine)

rectMode(CENTER)
 rect(ground.position.x,ground.position.y,500,30)
  
 ellipseMode(CENTER)
 ellipse(ball.position.x,ball.position.y,80)
}

