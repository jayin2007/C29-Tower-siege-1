
var gameState

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

polygon = Bodies.circle(50,200,20);
World.add(world,polygon); 

slingshot1 = new slingshot(this.polygon,{x:100, y : 200});

imageMode(CENTER)
image(polygom_img,polygon.position.x,polygon.position.y,40,40)


  ground1 = new ground(200,395,20,800);
  ground2 = new ground(300,300,20,300);

  block1 = new block(330,235,20,20);
  block2 = new block(360,235,20,20);
  block3 = new block(390,235,20,20);
  block4 = new block(420,235,20,20);
  block5 = new block(450,235,20,20);

  block6 = new block(360,195,20,20);
  block7 = new block(390,195,20,20);
  block8 = new block(420,195,20,20);

  block9 = new block(390,115,20,20);
 

  


}



function draw() {
  background(255,255,255);  
  drawSprites();
}

function mouseDragged(){
  //if (gameState!=="launched"){
      Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
  //}
}


function mouseReleased(){
  slingshot.fly();
  gameState = "launched";
}



