var sDisplay = document.getElementById("display");
var sHead = document.createElement("div");
var sDispHeight = sDisplay.offsetHeight;
var sDispWidth = sDisplay.offsetWidth;
var currentLeft;
var currentTop;
var off = false;
var stepSize = sDispWidth/10;
var direction = 0; //0:right,1:down,2:left,3:up
var speed = 100;

var sTail = [];
var playerScore = 0;
var pScoreOut = document.getElementById("pScore");
var snakeIsAlive = true;
var directionChanged = false;

//console.log(sDispHeight);

sHead.setAttribute("id","snakeHead");
sDisplay.appendChild(sHead);
sTail.push(sHead);

sHead.setAttribute("style","width:"+ sDispWidth/10 +"px;" + "height:" + sDispHeight/10 +"px;");

//console.log(sHead.offsetHeight);
sHead.style.left = 0 + "px";
sHead.style.top = 0 + "px";

//for testing
appendTailBlock();

//Timing and Updates
if(!off){
    setTimeout(mainUpdate,speed);        
}
function mainUpdate(){
    console.log("step");    
    if(!snakeIsAlive){
        changeColor();
        return;
    }
    directionChanged = false;
    //update stuff
    updateTail();    
    move();
    eventUpdate();
    
    
    pScoreOut.innerHTML = playerScore + " Points";    
    setTimeout(mainUpdate,speed);
}


function appendTailBlock(){
    var tailBlock = document.createElement("div");
    tailBlock.setAttribute("style","width:"+ sDispWidth/10 +"px;" + "height:" + sDispHeight/10 +"px;");
    tailBlock.setAttribute("class","snakeTail");
    sDisplay.appendChild(tailBlock);
    //console.log(sHead.style.top);
    tailBlock.style.left = sHead.style.left;
    tailBlock.style.top = sHead.style.top;
    //console.log(tailBlock.style.top);
    sTail.push(tailBlock);
}

function updateTail(){
    if(sTail.length < 2){
        
    return;
    }
var leftBuff = sTail[0].style.left, //sHead.style.left,
    topBuff = sTail[0].style.top,//sHead.style.top,
    oldLeft,
    oldTop;
    
    
    
    for(var i = 1; i < sTail.length; i++){       
        oldLeft = sTail[i].style.left;
        oldTop = sTail[i].style.top;     
            
       
        sTail[i].style.left = leftBuff;
        sTail[i].style.top = topBuff;      
        
        leftBuff = oldLeft;
        topBuff = oldTop;
       
        
    }
}

//DATA Structures
function storeCoordinate(xVal, yVal, array) {
    array.push({x: xVal, y: yVal});
}

function storeTailBlock(div,xVal,yVal,array){
    array.push({elem:div,x:xVal,y:yVal});
}


//DEBUG
function debug(){
appendTailBlock();
    
}


