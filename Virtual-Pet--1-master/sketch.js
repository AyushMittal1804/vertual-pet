//Create variables here
var dog,happdog,food,foodStock,dataBase,dogimage,readStock;
function preload()
{
  dogimage = loadImage("images/dogImg.png")
  dogHappy =loadImage("images/dogImg1.png")
	//load images here
}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(250,250,20,20)
  dog.addImage("dog",dogimage)
  dog.scale =.1
 
  
}


function draw() {  
background(46,139,87)

readStock()
feed()


  drawSprites();
  //add styles here

}


function readStock(){

  var readstockref = database.ref('food')
  readstockref.on("value",function(data){
    readStock = data.val();
  })
}
 function update(read){
  database.ref('/').update({
    food: read
  })
}

function feed(){
  console.log(readStock)
  if(keyDown(UP_ARROW)){
    dog.changeImage(dogHappy)
    readStock = readStock-1
    update(readStock)
    
  }


}