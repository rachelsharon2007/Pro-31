const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles =[];
var plinkos =[];
var divisions =[];
var divisionsHeight =300;

//function preload() {
   // backgroundImg = loadImage("sprites/bg.png");
//}

function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  for(var k = 0; k <= width; k= k+80){
    divisions.push(new Divisions (k,height-divisionsHeight/2,10,divisionsHeight));
  }

  for (var j =75; j <=width; j = j+50  ){
    plinkos.push(new plinko(j,75));
  }

  for (var j =50; j <=width-10; j = j+50 ){
    plinkos.push(new plinko(j,175));
  }

  for (var j =75; j <=width; j = j+50  ){
    plinkos.push(new plinko(j,275));
  }

  for (var j =50; j <=width-10; j = j+50  ){
    plinkos.push(new plinko(j,375));
  }
 }
function draw() {
  Engine.update(engine);
  background("black");  
  ground.display();

  for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();
  }
 
    if(frameCount%60===0){
    particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
  }

 for (var j = 0; j < particles.length; j++) {
 //particles[j].display();
  }
  
  for (var k = 0; k < divisions.length; k++) {
    
    divisions[k].display();
  }
}