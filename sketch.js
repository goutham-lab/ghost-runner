var tower,towerImage,gameState="play";
var doorImage,door,doorsGroup,climberImage,climber,climbersGroup;
var ghost,ghostImage,invisibleBlockGroup,invisibleBlock;

function preload(){
  towerImage=loadImage("tower.png");
  doorImage=loadImage("door.png");
  climberImage=loadImage("climber.png");
  ghostImage=loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");

}
function setup(){
 createCanvas(600,600) ;
  spookySound.loop();
  tower=createSprite(300,300);
  tower.addImage("tower",towerImage);
  tower.velocityY=1;
  
   doorsGroup=new Group();
  climbersGroup=new Group();
  invisibleBlockGroup= new Group();
  
  ghost=createSprite(200,200,50,50);
  ghost.scale=0.3;
  ghost.addImage("ghost",ghostImage);
  
 
  
}

function draw(){
  background(0);
  if(gameState==="play"){
    
  
  if(keyDown("space")){
     ghost.velocityY=-5;
     
     
     }
  if(keyDown("left_arrow")){
     ghost.x=ghost.x-3;
     
     
     }
  if(keyDown("space")){
    ghost.x=ghost.x+3;
     
     
     }
  ghost.velocityY=ghost.velocityY+0.8;
    if(tower.y>400){
    tower.y=300;
    
  }
   spawnDoors(); 
  
  if(climbersGroup.isTouching(ghost)){
     ghost.velocityY=0;
     }
  if(invisibleBlockGroup.isTouching(ghost)||ghost.y>600){
    ghost.destroy();
    gameState="end";
  }
    
  
  
  drawSprites();
  
  }
 if (gameState === "end"){ stroke("yellow"); fill("yellow"); textSize(30); text("Game Over", 230,250) }

}

function spawnDoors(){
  if(frameCount%240===0){
   door= createSprite(200,-50);
    door.addImage("door",doorImage);
    
    climber=createSprite(200,10);
    climber.addImage("climber",climberImage);
    
    invisibleBlock=createSprite(200,15);
    invisibleBlock.width=climber.width;
    invisibleBlock.height=2;
    
    door.x=Math.round(random(120,400));
    door.velocityY=1;
    
    climber.x=door.x;
    climber.velocityY=1;
    
    invisibleBlock.x=door.x;
    
    invisibleBlock.velocityY=1;
    
    ghost.depth=door.depth;
    ghost.depth=ghost.depth+1;
    
    
    climber.lifetime=800;
    door.lifetime=800;
    invisibleBlock.lifetime=800;
    
    doorsGroup.add(door);
    climbersGroup.add(climber);
    invisibleBlock.debug=true;
    invisibleBlockGroup.add(invisibleBlock);
  }
  
  
}