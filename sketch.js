/*const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Mouse=Matter.Mouse;
const MouseConstraint=Matter.MouseConstraint;

var engine, world,canvas;
var ball1,ball2,ball3,ball4,ball5;
var string1,string2,string3,string4,string5;
var mConstraint;

//function preload() {
   
//}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    let canvasmouse=Mouse.create(canvas.elt);
    canvasmouse.pixelRation=pixelDensity();
    let options={
        mouse:canvasmouse
    };
    mConstraint=MouseConstraint.create(engine,options);
    World.add(world,mConstraint);

    ball1=new Ball(600,340,50,50);        
    ball2=new Ball(500,340,50,50);
    ball3=new Ball(400,340,50,50);
    ball4=new Ball(700,340,50,50);
    ball5=new Ball(800,340,50,50); 
    string1=new String(ball1.body,{x:600,y:100});
    string2=new String(ball2.body,{x:500,y:100});
    string3=new String(ball3.body,{x:400,y:100});
    string4=new String(ball4.body,{x:700,y:100});
    string5=new String(ball5.body,{x:800,y:100});
    
}
function draw()
{
    background("black");
    Engine.update(engine);
    ball1.display();
    string1.display();
    ball2.display();
    string2.display();
    ball3.display();
    string3.display();
    ball4.display();
    string4.display();
    ball5.display();
    string5.display();
}
function mouseReleased()
{
    Matter.body.setPosition(ball1.body,{x:mouseX,y:mouseY});
}*/
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Mouse = Matter.Mouse;
const Constraint = Matter.Constraint;

const MouseConstraint = Matter.MouseConstraint;

var world, engine, canvas;
var pendulum1, pendulum2, pendulum3, pendulum4, pendulum5;
var sling1, sling2, sling3, sling4, sling5;
var mConstraint;

function setup() {
  canvas = createCanvas(800, 500);
  engine = Engine.create();
  world = engine.world;

  let canvasmouse = Mouse.create(canvas.elt);
  canvasmouse.pixelRatio = pixelDensity();
  let options = {
    mouse: canvasmouse
  };
  mConstraint = MouseConstraint.create(engine, options);
  World.add(world, mConstraint);

  pendulum1 = new Ball(340, 450, "#00b0ff");
  pendulum2 = new Ball(400, 450, "#e91e63");
  pendulum3 = new Ball(460, 450, "#ffc107");
  pendulum4 = new Ball(520, 450, "#e91e63");
  pendulum5 = new Ball(580, 450, "#00b0ff");

  sling1 = new String(pendulum1.body, { x: 340, y: 200 });
  sling2 = new String(pendulum2.body, { x: 400, y: 200 });
  sling3 = new String(pendulum3.body, { x: 460, y: 200 });
  sling4 = new String(pendulum4.body, { x: 520, y: 200 });
  sling5 = new String(pendulum5.body, { x: 580, y: 200 });
}

function draw() {
  background(0);
  Engine.update(engine);
  pendulum1.display();
  pendulum2.display();
  pendulum3.display();
  pendulum4.display();
  pendulum5.display();
  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();
}

function mouseDragged() {
  Matter.Body.setPosition(pendulum1.body, { x: mouseX, y: mouseY });
}
