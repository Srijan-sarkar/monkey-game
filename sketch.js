//Global Variables

var monkey,monkeyimg,obsimg,foodimg,obsgroup,Background,Backgroundimg,score,foodgroup,ground;

function preload(){
  
  monkeyimg =  loadAnimation("Monkey_01","Monkey_02","Monkey_03","Monkey_04","Monkey_05","Monkey_06","Monkey_07","Monkey_08","Monkey_09","Monkey_10");

  obsimg = loadImage("stone.png");
  foodimg = loadImage("Banana.png");
  Backgroundimg = loadImage("jungle.jpg")
  
}


function setup() {
  createCanvas(600,300);
  
  monkey = createSprite (100,100);
  monkey.addAnimation(monkeyimg);
  monkey.scale = 0.1;
  
  ground = createSprite (300,50,600,50)
  ground.visible = false;
  
  Background = createSprite (300,150);
  Background.addImage(Backgroundimg);
  
  Background.velocityX = -12;
  
  obsgroup = createGroup();
  foodgroup = createGroup();
  
}


function draw(){
 background(255);
  
  if (keyDown("space") && monkey.position.x<100){
    
     monkey.velocityY = 5; 
    
  }
  
  monkey.velocityY = monkey.velocityY-0.5;
  monkey.collide(ground);
  
  if (Background.position.x<0){
    
    Background.position.x = 400;
    
  }
  
  if (foodgroup.isTouching(monkey)){
    
     score = score + 2;
    foodgroup.destroyEach();
    
  } 
  
  switch(score){
      
    case 10 :monkey.scale = 0.12;
            break;
    case 20 :monkey.scale = 0.14;
            break; 
    case 30 :monkey.scale = 0.16;
            break;
    case 40 :monkey.scale = 0.18;
            break;  
  }
  
  if (obsgroup.isTouching(monkey)){
    
     score = 0; 
    
  } 
  
  drawSprites();
  
  text ("score :"+score,300,200);
  
}

function food (){
  
  if (frameCount%80===0){
    var y = random(120,200);
  
  var banana = createSprite(400,y);
  banana.addImage(foodimg);
  
  banana.velocityX = ground.velocityX;
  banana.scale = 0.1;
  
  banana.lifetime = 80;
  foodgroup.add(banana);
  }
  
}

function stone (){
  
  if (frameCount%120===0){
  
  var rock = createSprite(400,350);
  rock.addImage(obsimg);
  
  rock.velocityX = ground.velocityX;
  rock.scale = 0.3;
  
  rock.lifetime = 80;
  
 obsroup.add(rock);
 }
  
}