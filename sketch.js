var ladrao,diamante,laser1,laser2,paredes
var estadoJogo

function setup() {
  createCanvas(400, 400);
  montarJogo()
  estadoJogo ="parado"

  
}

function draw() {
  background(0);
  
  drawSprites()
  
  if(estadoJogo =="parado"){
    
    textSize(20)
    fill("white")
    text("Pressione ESPAÇO para iniciar",60,180)
    
    if(keyDown("SPACE")){
      laser1.velocityY = 10
      laser2.velocityY = -10
      estadoJogo ="play"
      
      
    }
    
  }
    
   if(estadoJogo =="play"){
     
     laser1.bounceOff(paredes)
     laser2.bounceOff(paredes)
     ladrao.collide(paredes)
    
    if(keyDown("left")){
      
      ladrao.x = ladrao.x - 5
      
    }else if(keyDown("right")){
      ladrao.x = ladrao.x + 5
      
    }else if(keyDown("up")){
      
      ladrao.y = ladrao.y - 5
      
    }else if(keyDown("down")){
      ladrao.y = ladrao.y + 5
      
    }
     
     if(
     
     ladrao.isTouching(laser1)||
       ladrao.isTouching(laser2)
     
     ){
       
       estadoJogo = "gameOver"
       
     }
     
     if(ladrao.isTouching(diamante)){
       
       estadoJogo = "winner"
       
     }
       
       
   }
     
  if(estadoJogo =="gameOver"){
    
    fimDeJogo()
    fill("white")
    textSize(30)
    text("O ladrao foi capturado",50,200)
    
    textSize(15)
    text("Pressione R para reiniciar",100,250)
    
    if(keyDown("r")){
      estadoJogo = "parado"
      montarJogo()
      
    }
    
  }
  
  if(estadoJogo =="winner"){
    
    fimDeJogo()
    textSize(30)
    fill("white")
    text("O diamante foi roubado",50,200)
    
    textSize(15)
    text("Pressione R para reiniciar",100,250)
    
    if(keyDown("r")){
      estadoJogo = "parado"
      montarJogo()
    }
    
    
  }

}

function montarJogo(){
  ladrao = createSprite(200,390,20,20)
  diamante = createSprite(360,20,20,20)
  laser1 = createSprite(100,200,200,10)
  laser1.shapeColor = "red"
   laser2 = createSprite(300,200,200,10)
  laser2.shapeColor = "red"
  ladrao.shapeColor = "blue"
  paredes = createEdgeSprites()
  
}


function fimDeJogo(){
  
  ladrao.remove()
  diamante.remove()
  laser1.remove()
  laser2.remove()
  
}

