// DEFORMATION CALCULATION
// 0.5 * weight * speed * speed / 22500                   

var car, wall;
var speed, weight;
var cardeform;

function setup() {
  createCanvas(900,400);
  speed = random(55,90);
  weight = random(400,900);
  car = createSprite(50, 200, 40, 40);
  car.shapeColor="blue";
  wall = createSprite(800,200,40,200);
  wall.shapeColor="black";
}

function draw() {
  background("orange");  
  car.velocityX=speed;
  text("Test by GSCO ( Global Car Safety Organisation)",600,370);
  textSize(30);
  stroke("black");
  text("CAR DEFORMATION TEST",230,50);

  if(car.x-wall.x < wall.width/2+car.width/2
    &&wall.x-car.x<wall.width/2+car.width/2){
    car.velocityX=0;
    car.x = wall.x-25;
    car.y= wall.y;
    cardeform = 0.5 * weight * speed * speed / 22500 ;
    if(cardeform<100){
      car.shapeColor="green";
      wall.shepeColor="green";
      textSize(20);
      fill("green");
      text("THIS CAR IS SAFE TO USE",100,200);
    }
    else if(cardeform>100 && cardeform<180){
      car.shapeColor="yellow";
      wall.shepeColor="yellow";
      textSize(20);
      fill("yellow");
      text("THSI CAR GIVES AVERAGE AMOUNT OF SAFETY",100,200);

    }
    else if(cardeform>180){
       car.shapeColor = "red";
       textSize(20);
       fill("red");
       text("THIS CAR CAN BE DANGEROUS TO USE",100,200);
    }
    console.log(cardeform);  
    textSize(20);
    fill("red");
    text("DEFORMATION VALUE =",100,100);
    fill("blue");
    text(cardeform,340,100);
    fill("pink");
    text("According to the test,",100,170);
    
    
   // console.log(deformation);
  }
   
  
  

  drawSprites();
}

