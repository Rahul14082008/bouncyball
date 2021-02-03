const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;


function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var options = {
        isStatic : true
    }

    ground = Bodies.rectangle(200,380,50,50,options);
    World.add(world,ground);

    var ball_options = {
    restitution : 2.0
    }
    ball=Bodies.rectangle(200,200,50,50,ball_options);
    World.add(world,ball);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);

  rectMode(CENTER);
  rect(ball.position.x,ball.position.y,50,50);  
}