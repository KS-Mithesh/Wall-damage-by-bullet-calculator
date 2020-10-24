var wall, thickness;
var bullet, speed, weight;
var damage = 0;

function setup() {
  createCanvas(1400,400);

  speed    = random(223,321);
  weight   = random(30,52);
  thickness= random(22,83);

  bullet  = createSprite(50, 200, 50, 30);

  wall = createSprite(1200, 200, thickness, 200);

  bullet.velocityX=speed;
}

function draw() {
  background("black");

  wall.shapeColor="grey";
  bullet.shapeColor="white";

  if (wall.x-bullet.x <= (bullet.width+wall.width)/2) {
    console.log(damage);
    bullet.velocityX = 0;
    bullet.x = wall.x-((bullet.width+wall.width)/2)+1;
    damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness);

    if(damage<10) {
      bullet.shapeColor="green";
    }
    
    if(damage>=10) {
      bullet.shapeColor="red";
    }
  }

  drawSprites();
}