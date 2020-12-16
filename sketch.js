const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world
function preload(){
poly = loadImage ("polygon.png")
bg = loadImage ("j.jpg")
}

function setup(){
createCanvas(1000,700)
engine = Engine.create()
world = engine.world
Engine.run(engine)
ground = new Ground (500,690,1000,20)
stand1 = new Stand (290,300,250,10)

polygon = Bodies.circle(50,200,20);
World.add(world,polygon)
//level one
 block1 = new Block(300,500,30,40); 
 block2 = new Block(330,500,30,40); 
 block3 = new Block(360,500,30,40); 
 block4 = new Block(390,500,30,40);
  block5 = new Block(420,500,30,40); 
  block6 = new Block(450,500,30,40); 
  block7 = new Block(480,500,30,40);
   //level two
    block8 = new Block(330,450,30,40);
     block9 = new Block(360,450,30,40);
      block10 = new Block(390,450,30,40);
       block11 = new Block(420,450,30,40);
        block12 = new Block(450,450,30,40); 
        //level three
         block13 = new Block(360,400,30,40); 
         block14 = new Block(390,400,30,40); 
         block15 = new Block(420,400,30,40); 
         //top 
         block16 = new Block(390,350,30,40);
         slingshot = new Slingshot(this.polygon,{x: 200, y: 400})


}

function draw (){
    background (bg)
    ground.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    imageMode(CENTER);
    image(poly,polygon.position.x,polygon.position.y,40,40);
    slingshot.display();
 
    
        
    
}
function mouseDragged(){
  
        Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
    
}


function mouseReleased(){
    slingshot.fly();
    
}

function keyPressed(){
    if(keyCode === 32){
     slingshot.attach(this.polygon);
    }
}