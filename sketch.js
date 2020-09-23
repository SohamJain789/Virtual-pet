//Create variables here
var dog,dogImg,HappyDogImg,database,foodStock;
var foodS = 20;
function preload()
{
	//load images here
	dogImg = loadImage("images/dog.png");
	HappyDogImg = loadImage("images/HappyDog.png")			
}

function setup() {
	createCanvas(500, 500);
	dog = createSprite(250,250,10,10)
	dog.addImage(dogImg);
	dog.scale = 0.5
	database = firebase.database()
	foodStock = database.ref('food');
	foodStock.on("value",readStock);
    
  
}


function draw() {  
  background(46, 139, 87)
  if(keyWentDown(UP_ARROW)){
  	writeStock(foodS);
  	dog.addImage(HappyDogImg);
  	foodS = foodS - 1;

  }
  drawSprites();
  //add styles here
  fill("white")
  stroke("black")
  
  text("Press UP_ARROW key to feed your pet",250,50)
}

function readStock(data){
	foodS=data.val();
}

function writeStock(x){
	database.ref('/').update({
		food:x
	})
}

