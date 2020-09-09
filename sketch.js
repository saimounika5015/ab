const world = Matter.World;
const  engine = Matter.Engine;
const body = Matter.Bodies;

var abWorld, abEngine, abBody;

var ground;

var box1, box2, box3;

var pig1;

var loft1;


function setup() {
  createCanvas(1200,400);

  abEngine = engine.create();
  abWorld = abEngine.world;

  box1 = new Boxes(850,320,60,60);
  box2 = new Boxes(1000, 320, 60,60);
  pig1 = new Pigs(900,330);
  loft1 = new Loft(900,360, 10, PI/2)
  console.log(loft1);
  ground = new Ground(600,height, 1210, 15);
}

function draw() {
  background("black");  


  engine.update(abEngine);

 
  console.log(ground.body.position.y);
 // box1.color = "yellow";
 // box2.color = "red";
  box1.display();
  box2.display();
  pig1.display();
  loft1.display();
  
  ground.display();

  drawSprites();
}