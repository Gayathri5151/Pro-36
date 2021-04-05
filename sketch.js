var dog,dogimg,dogHappy,foodStock,foods;
var database;
var Food;



function preload(){
dogimg = loadImage("dogImg.png");
dogHappy = loadImage("dogImg1.png");


}

function setup() {
  createCanvas(1000,400);
  
  
  dog = createSprite(800,200,50,50);
  dog.addImage(dogimg);
  dog.scale = 0.3;

  database = firebase.database();
  
  foodStock = database.ref('Food');
  // foodStock.on("value",readStock);

  feed= createButton("Feed The Dog!")
  feed.position(700,95)

  addFood = createButton("Add More Milk")
  addFood.position(870,95)

 
}


function draw() {
  background(46,139,87); 
  
  if (keyWentDown(UP_ARROW)){
    writeStock(foods);
    dog.addImage(dogHappy);
  }

  if (keyWentUp(UP_ARROW)){
    dog.addImage(dogimg);
  }

  drawSprites();

  textSize(30);
  text("food remaining: "+foods,300,250);
  text("press the up arrow key to feed the dog",250,150);
  

}


function readStock(data){
  foods = data.val();
}

function writeStock(x){
  if (x<=0){
    x = 0;
  }
  else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  });
}




