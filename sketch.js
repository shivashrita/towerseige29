const Engine = Matter.Engine;
const World  =  Matter.World;
const Constraint = Matter.Constraint;
const Bodies = Matter.Bodies;

var engine,world;
var ground,stand1,stand2,ballonpopstate,holder;
var polygon_img,slingshot;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16;

function preload()
{
    polygon_img=loadImage("polygon.png");
}
function setup()
{
    
    createCanvas(900,400);

    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);

    ground=new Ground();

    //stand1= new Stand(930,300,250,10);
    //stand2= new Stand (700,200,200,10);
    fill("pink");
    block1 = new block(500,360,20,30);
    block2 = new block(510,330,20,30);
    block3 = new block(520,360,20,30);
    block4 = new block(530,330,20,30);
    block5 = new block(540,360,20,30);
    fill("green");
    block6 = new block(550,330,20,30);
    block7 = new block(560,360,20,30);
    block8 = new block(570,330,20,30);
    block9 = new block(580,360,20,30);
    block10 = new block(590,330,20,30);
     fill("blue");
    block11 = new block(600,360,20,30); 
    block12 = new block(610,330,20,30);
    block13 = new block(620,360,20,30);    
    block14 = new block(630,330,20,30);
    block15 = new block(640,360,20,30);
    fill("yellow");
    block16 = new block(650,280,20,30);

    ball=Bodies.circle(50,200,20);
    World.add(world,ball);

    slingshot= new SlingShot(this.ball,{x:100,y:200});


}

function draw()
{
        background("orange");
    
        //Engine.update(engine);
    
        ground.display();
       // stand1.display();
        //stand2.display();
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
        image(polygon_img,ball.position.x,ball.position.y,40,40);

        slingshot.display();      
}
function mouseDragged(){
           Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}
function mouseReleased(){
    slingshot.fly();
}

