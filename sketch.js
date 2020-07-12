//Create variables here
var canvas
var dog
var happydog
var foodS
var foodStock

function preload()
{
  //load images here
  dog_img = loadImage('images/dogImg.png');
  happydog_img = loadImage('images/dogImg1.png');
}

function setup() {
	createCanvas(500, 500);
  dog.addImage(dog_img);
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() { 
  background (46, 139, 87)
 if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  happydog.addImage(happydog_img);
 }
  drawSprites();
  //add styles here
  fill(red);
  stroke(7);
  text('Note: Press the up arrow key to the dog and make it happy',0,250);
}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){

  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  
  database.ref('/').update({
    Food:x
  })
}


