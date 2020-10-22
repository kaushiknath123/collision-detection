var car, wall;

var speed, weight;



function setup() {
  createCanvas(1200,400);
 car =  createSprite(25, 200, 50, 50);
 car.shapeColor=("white");

 wall = createSprite(1100, 200, 50, height/2);
 wall.shapeColor=("black");

 speed=random(60,150);
 weight=random(500, 1400);

 car.velocityX = speed;
}

function draw() {
  background("grey");  

  if(wall.x-car.x<(wall.width+car.width)/2){

    car.velocityX=0;
    var deformation=(0.5*speed*weight*speed)/22500;

    if(deformation>180){
      car.shapeColor=("red");
    }
    if(deformation<180 && deformation>100){
      car.shapeColor=("yellow");
    }
    if(deformation<100){
      car.shapeColor=("green");
    }
  }
  drawSprites();
}