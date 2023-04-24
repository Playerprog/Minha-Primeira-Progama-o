var box;

function setup() {
  createCanvas(2500,1500);
  box = createSprite(200,200,45,56);
}

function draw() 
{
  background(65);

  

  if (keyIsDown(RIGHT_ARROW))
  {
    box.position.x = box.position.x +5;
  }

  if (keyIsDown(LEFT_ARROW))
  {
    box.position.x = box.position.x -5;
  }

  if (keyIsDown(UP_ARROW))
  {
    box.position.y = box.position.y -5;
  }

  if (keyIsDown(DOWN_ARROW))
  {
    box.position.y = box.position.y +5;
  }

  drawSprites();

}




