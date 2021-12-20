const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var button1;
var button2;
var ground;
var left;
var right;
var top_wall;
var ball;
var ball_opt;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  button1 = createImg("up.png")
  button1.position(300,300)
  button1.size(50,50)
  button1.mouseClicked(ball_Vforce)

  button2 = createImg("right.png")
  button2.position(50,50)
  button2.size(50,50)
  button2.mouseClicked(ball_Hforce)
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
  ball_opt = {
    restitution: 1
  }
  ball = Bodies.circle(200,200,20,ball_opt);
  World.add(world,ball)
 console.log(ball)
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background("Black");
  ellipse(ball.position.x,ball.position.y,20)
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);
  //ball_Hforce();
  //ball_Vforce();
}

function ball_Hforce(){
  Matter.Body.applyForce(ball, {x:0,y:0}, {x:0.01,y:0.001})
  
}

function ball_Vforce(){
  Matter.Body.applyForce(ball, {x:0,y:0}, {x:0.05,y:-0.05})
}

