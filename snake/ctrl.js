document.onkeydown = keyControl;

function move(){
var currentLeft = parseInt(sHead.style.left.toString());  
var currentTop = parseInt(sHead.style.top.toString());  
    
    //console.log(sHead.style.top.toString());   
    //console.log(direction);
    switch (direction){
        case 0:
            sHead.style.left = (currentLeft + stepSize)%sDispWidth + 'px';
            break;
        case 1:
            
            sHead.style.top = (currentTop + stepSize)% sDispHeight + 'px';
            break;
        case 2:
            if(currentLeft - stepSize >= 0){
            sHead.style.left = currentLeft - stepSize + 'px';
            }else{
            sHead.style.left = sDispWidth - stepSize + "px";
            }
            break;
        case 3:
            if(currentTop - stepSize >= 0){
            sHead.style.top = (currentTop - stepSize) % sDispHeight + 'px';
                 }else{
            sHead.style.top = sDispHeight - stepSize + "px";
            }
            break;
    }
}

function directionChange(){
    console.log("click");
    direction = (direction + 1) % 4;
}

function sUP(){
    changeToDirection(3);
}

function sDown(){   
    changeToDirection(1);
}

function sLeft(){    
    changeToDirection(2);
}

function sRight(){
    changeToDirection(0);
}

function changeToDirection(dir){
    if(directionChanged){
        return;
    }
    switch(dir){
    case 0:
            if(direction == 2 || direction == 0 ){    
                break;
            }else{
                console.log("right");
                directionChanged = true;
                direction = 0;
            }
            break;
    case 1:
            if(direction == 3 || direction == 1 ){    
                break;
            }else{
                console.log("down");
                directionChanged = true;
                direction = 1;
            }
            break;
    case 2:
            if(direction == 0 || direction == 2 ){    
                break;
            }else{
                console.log("left");
                directionChanged = true;
                direction = 2;
            }
            break;
    case 3:
            if(direction == 1 || direction == 3 ){    
                break;
            }else{
                console.log("up");
                directionChanged = true;
                direction = 3;
            }
            break;

    }
    
}

function colorButtons(){

   if(direction == 0 || direction == 2){
        verticalCtrl(true);
   }else{
        verticalCtrl(false);
   }
}

function verticalCtrl(on){
    var up = document.getElementById("bUP"),
    down = document.getElementById("bDown"),
    left = document.getElementById("bLeft"),
    right = document.getElementById("bRight"),
    bColorOn = '#8ccece',
    bColorOff  = '#eee',
    colorOff = '#fff',
    colorOn = '#000';
    
    if(on){
    up.style.backgroundColor= bColorOn;
    down.style.backgroundColor=bColorOn;
    left.style.backgroundColor=bColorOff;
    right.style.backgroundColor= bColorOff; 
        
    up.style.color= colorOn;
    down.style.color=colorOn;
    left.style.color=colorOff;
    right.style.color= colorOff; 
    }else{
    up.style.backgroundColor= bColorOff;
    down.style.backgroundColor=bColorOff;
    left.style.backgroundColor=bColorOn;
    right.style.backgroundColor= bColorOn; 
        
    up.style.color= colorOff;
    down.style.color=colorOff;
    left.style.color=colorOn;
    right.style.color= colorOn; 
    }
}

function keyControl(key){
//key = key || window.event;
//left = 37; up=38;right=39; down=40
    switch(key.keyCode){
        case 37:  
            key.preventDefault();
            changeToDirection(2);
            break;
        case 38:            
            key.preventDefault();
            changeToDirection(3);
            break;
        case 39:
            key.preventDefault();
            changeToDirection(0);
            break;
        case 40:
            key.preventDefault();
            changeToDirection(1);
            break;
    }
}