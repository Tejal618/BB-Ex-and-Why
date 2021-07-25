var balloon,balloonImage1,balloonImage2;
var database , position

function preload(){
   bg =loadImage("cityImage.png");
   balloonImage1=loadAnimation("hotairballoon1.png");
   balloonImage2=loadAnimation("hotairballoon1.png","hotairballoon1.png",
   "hotairballoon1.png","hotairballoon2.png","hotairballoon2.png",
   "hotairballoon2.png","hotairballoon3.png","hotairballoon3.png","hotairballoon3.png");
  }

function setup() {
  database=firebase.database();
  createCanvas(1500,700);

  balloon=createSprite(250,450,150,150);
  balloon.addAnimation("hotAirBalloon",balloonImage1);
  balloon.scale=0.5;

  database.ref('BBaalloonn/').on("value" , readPos)
  

  textSize(20); 
}

// function to display UI
function draw() {
  background(bg);

  if(keyDown(LEFT_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    changePos(-10,0)
  }
  
  else if(keyDown(RIGHT_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    changePos(10,0) 
  }
  
  else if(keyDown(UP_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    changePos(0,-10)
  }
  
  else if(keyDown(DOWN_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    changePos(0,10)
  }

  drawSprites();
  fill(0);
  stroke("white");
  textSize(25);
  text("**Use arrow keys to move Hot Air Balloon!",40,40);
}

function changePos(x1,y1){
  database.ref('BBaalloonn/').set({
    'ex':position.ex + x1,
    'why':position.why + y1,

  })
}

function readPos(data){ //data = {ex:356 , why:359}

  position = data.val()
  console.log(position.ex)
  balloon.x = position.ex
  balloon.y = position.why

}