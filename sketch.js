
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var wall;
var wall2;
var wall3;
var wall4;
let engine;
let world;
var ball;
var ball2;
var ball3;
var ball4;
var ball5;
var ball6;
var ground;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.50,
    frictionAir:0.001
  }

  var ball_options2 = {
    restitution: 0.50,
    frictionAir:0.01
  }
  var ball_options3 = {
    restitution: 0.20,
    frictionAir:0.21
  }
  var ball_options4 = {
    restitution: 0.80,
    frictionAir:0.01
  }
  var ball_options5 = {
    restitution: 0.60,
    frictionAir:0.01
  }
  var ball_options6 = {
    restitution: 0.80,
    frictionAir:0.001
  }

   var ground_options ={
     isStatic: true
   };
  
       wall = Bodies.rectangle(300,200,100,20,ground_options);
       wall2 = Bodies.rectangle(0,200,20,400,ground_options);
       World.add(world,wall2);
       wall3 = Bodies.rectangle(400,200,20,400,ground_options);
       World.add(world,wall3);
       wall4 = Bodies.rectangle(200,0,400,20,ground_options);
       World.add(world,wall4);
       World.add(world,wall);

ball2 = Bodies.circle(250,10,20,ball_options2);
ball3 = Bodies.circle(250,10,20,ball_options3);
ball4 = Bodies.circle(250,10,20,ball_options4);
ball5 = Bodies.circle(250,10,20,ball_options5);
ball6 = Bodies.circle(250,10,20,ball_options6);
World.add(world,ball2);
World.add(world,ball3);
World.add(world,ball4);
World.add(world,ball5);
World.add(world,ball6);

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background("lightyellow");  
  Engine.update(engine);
  
  ellipse(ball.position.x,ball.position.y,20);
  ellipse(ball3.position.x,ball3.position.y,20);
  ellipse(ball4.position.x,ball4.position.y,20);
  ellipse(ball5.position.x,ball5.position.y,20);
  ellipse(ball6.position.x,ball6.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);
  rect(wall2.position.x,wall2.position.y,20,400);
  rect(wall3.position.x,wall3.position.y,20,400);
  rect(wall4.position.x,wall4.position.y,400,20);
  fill("lightblue");
  rect(wall.position.x,wall.position.y,100,20);
  ellipse(ball2.position.x,ball2.position.y,20);
}

