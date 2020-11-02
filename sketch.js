var MrJimmyJoe
var jjimg
var bimg, bsprite
var food = 20;
var gameState = 1;
var s11, s12, s13, s14, s15, s21, s22, s23, s24, s25
var drag = 0;

function preload()
{
	jjimg = loadImage("jjremainder.png");
	bimg = loadImage("background.png");

}

function setup() {
	createCanvas(displayWidth-50, displayHeight-50);
	bsprite = createSprite((displayWidth-50)/2, (displayHeight-50)/2, displayWidth-50, displayHeight-50)
	bsprite.addImage(bimg);
	bsprite.scale = 15;
	MrJimmyJoe = createSprite(displayWidth/2-50, displayHeight/2-50, 50, 50);
	MrJimmyJoe.addImage(jjimg);
}


function draw() {
  rectMode(CENTER);
  background(0);

  if (food === 0){
	  clear();
	  gameState = 1;
  }

  drawSprites();

  if (gameState === 1){
	  MrJimmyJoe.visible = false;
	  s11 = createSprite(400, 110, 45, 75);
	  s11.shapeColor = "white";

	  s12 = createSprite(485, 200, 75, 45);
	  s12.shapeColor = rgb(247, 102, 94);

	  s13 = createSprite(585, 300, 75, 45);
	  s13.shapeColor = "white";

	  s14 = createSprite(450, 540, 75, 45);
	  s14.shapeColor = "white";

	  s15 = createSprite(450, 405, 45, 75);
	  s15.shapeColor = rgb(247, 102, 94);

	  s21 = createSprite(890, 110, 45, 75);
	  s21.shapeColor = "white";

	  s22 = createSprite(805, 200, 75, 45);
	  s22.shapeColor = rgb(247, 102, 94);

	  s23 = createSprite(705, 300, 75, 45);
	  s23.shapeColor = "white";

	  s24 = createSprite(840, 540, 75, 45);
	  s24.shapeColor = "white";

	  s25 = createSprite(840, 405, 45, 75);
	  s25.shapeColor = "white";

	  line(365, 60, 925, 60);

	  line(925, 60, 930, 580);

	  line(930, 580, 365, 580);

	  line(365, 580, 365, 60);
  }
  textSize(25);
  fill("black");
  if (gameState === 0){
  text("Food Left: " + food, displayWidth/2-120, displayHeight/4);
  }
}

function keyPressed(){
	if(keyCode === 32 && gameState === 0){
		food = food-1;
		MrJimmyJoe.scale = MrJimmyJoe.scale+0.2
	}
}