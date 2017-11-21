var fruits = [];
var maxFruits = 3;
var maxDiceRolling = 5;
var fruitLH = 0.9;
var colorAlive = "#81fcd3", colorDead = "#2525dd";

function eventUpdate(){
  if( Math.random() > fruitLH){
    spawnRandomFruit();
  }
  colorButtons();
  eat();

}

function spawnRandomFruit(){
  if(fruits.length > maxFruits-1){
    return;
  }


  //console.log("r val " + Math.round(Math.random()*10)*stepSize);
  var goodPos = false, rCound = 0;

  var rLeft, rTop;
  while(goodPos == false){
    if(rCound > maxDiceRolling){
      return;
    }
    rLeft = Math.round(Math.random()*10)%10 *stepSize;
    rTop = Math.round(Math.random()*10)%10 *stepSize;
    goodPos = positionIsAvailable(rLeft,rTop);
    rCound++;
  }

  //TODO: check if snake sits here
  var newFruit = document.createElement("div");
  newFruit.setAttribute("id","fruit_peach");
  newFruit.setAttribute("style","width:"+ sDispWidth/10 +"px;" + "height:" + sDispHeight/10 +"px;" );

  sDisplay.appendChild(newFruit);
  newFruit.style.left = rLeft + "px";
  newFruit.style.top = rTop + "px";

  fruits.push(newFruit);
  console.log("fruit spawned");
}

function positionIsAvailable(left,top){
  //fruits
    for(var i=0; i < fruits.length; i++){
    if(fruits[i].style.left == left + "px" && fruits[i].style.top == top + "px"){
    
      return false;
    }
    
  }
    //tails
    for(var i=0; i < sTail.length; i++){
        //console.log();
    if(sTail[i].style.left == left + "px" && sTail[i].style.top == top + "px"){    
      return false;
    }
    
  }
  return true;
}
/**
* Returns a random number between min (inclusive) and max (exclusive)
*/
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}


function eat(){
    for(var i = 0; i < fruits.length; i++){
       // console.log(fruits[i].style.left + " and " +  sHead.style.left + "px");
        if(fruits[i].style.left == sHead.style.left && fruits[i].style.top == sHead.style.top ){
            appendTailBlock();
            sDisplay.removeChild(fruits[i]);
            fruits.splice(i,1);
            playerScore++;
            return;
        }
    }
    
     //tails
    for(var i=2; i < sTail.length; i++){
        
    if(sTail[i].style.left == sHead.style.left && sTail[i].style.top == sHead.style.top){    
      //death
        snakeIsAlive = false;
    }
    
  }
   
}

function changeColor(){
for(var i=0; i < sTail.length; i++){
    sTail[i].style.backgroundColor = colorDead;    
    
    }
}

