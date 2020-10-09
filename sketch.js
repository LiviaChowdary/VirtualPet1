//Create variables here
var dog, happyDog;
var database;
var food, foodStock,foodS;

function preload() {
  dogImg = loadImage('images/dogImg.png');
  happyDogImg = loadImage('images/dogImg1.png')
}


function setup() {
  createCanvas(500, 500);
 // dog = createSprite(200,200,1,1);
  dog = image(dogImg,200,200,100,100);
  
  foodStock = 0;

  // database = firebase.database();
  // foodStock=database.ref('food');
  // foodStock.on("value",readStock);
}


function draw() {  
  //background("white");
  if(keyWentDown(UP_ARROW)) {
    writeStock(foodS);
    dog.addImage(dogHappy);
    }

  drawSprites();
  text("foodstock:"+ foodStock,170,200);
  //add styles here

}
//function to read vaules from database
function readStock(data){
   foodS = data.val();
  } 
//function to write values in database
 function writeStock(x){
    database.ref('/').update({
      food:x
    })

  }