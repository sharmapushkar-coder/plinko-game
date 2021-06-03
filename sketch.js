var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles =[];
var plinkos = [];
var divisions=[];
var bg;
//var 
var ground;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10;
var d1,d2,d3,d4,d5,d6,d7,d8,d9,d10;
var divisionHeight=300;
var score =0;


function setup() {
  createCanvas(800, 600);
  engine = Engine.create();
  world = engine.world;
  ground=new Ground(width/2,width-220,width,10);
  b1=new Box(90,450,10,250);
  b2=new Box(220,450,10,250);
  b3=new Box(350,450,10,250);
  b4=new Box(480,450,10,250);
  b5=new Box(610,450,10,250);
  b6=new Box(740,450,10,250);

  d1=new Ball(80,110);
  d2=new Ball(195,110);
  d3=new Ball(315,110)
  d4=new Ball(435,110);
  d5=new Ball(570,110);
  d6=new Ball(700,110);

  d7=new Ball(40,180);
  d8=new Ball(120,180);
  d9=new Ball(200,180);
  d10=new Ball(290,180);
  d11=new Ball(370,180);
  d12=new Ball(450,180);
  d13=new Ball(540,180);
  d14=new Ball(630,180);
  d15=new Ball(710,180);
  d16=new Ball(770,180);

  d17=new Ball(80,245);
  d18=new Ball(195,245);
  d19=new Ball(315,245)
  d20=new Ball(435,245);
  d21=new Ball(570,245);
  d22=new Ball(700,245);
}
 


function draw() {
  background("black");
  textSize(20)
 text(mouseX+":"+mouseY,20,30);
  Engine.update(engine);
   ground.display();
   b1.display();
   b2.display();
   b3.display();
   b4.display();
   b5.display();
   b6.display();

   d1.display();
   d2.display();
   d3.display();
   d4.display();
   d5.display();
   d6.display();
   d7.display();
   d8.display();
   d9.display();
   d10.display();
   d11.display();
   d12.display();
   d13.display();
   d14.display();
   d15.display();
   d16.display();

   d17.display();
   d18.display();
   d19.display();
   d20.display();
   d21.display();
   d22.display();

}