var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  object1=createSprite(200,200,50,100);
  object1.velocityX=5;
  object1.shapeColor="red";

  object2=createSprite(600,200,100,50);
  object2.velocityX=-5;
  object2.shapeColor="green";

  obj3=createSprite(400,200,50,50);
  obj3.shapeColor="green";
  obj4=createSprite(600,200,50,50);
  obj4.shapeColor="green";

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  

  obj4.x=mouseX;
  obj4.y=mouseY;
  
  bounceOff(object1,object2);
  bounceOff(fixedRect,movingRect);

  if(isTouching(obj3,obj4)){
    obj3.shapeColor="red";
    obj4.shapeColor="red";
  }else{
    obj3.shapeColor="green";
    obj4.shapeColor="green";
  }
  drawSprites();
}

