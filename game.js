document.addEventListener("DOMContentLoaded", function(){
    
    canvas = document.getElementById("myCanv");
    ctx = canvas.getContext("2d");
    setInterval(game, 1000/10);
    document.addEventListener("keydown", pushKey);
    setTarget();
});
// # configuration 
positiveC = "green";
negativeC = "red";
playerC = "dodgerblue";
// # data
gs = tc = 20;
px = py = 9;

as = 2;
ah = as*tc;

redArea = 0+as;
greenArea = gs-as;

target = "";

score = 0;

function game() {
    
    // # draw map and areas
    ctx.fillStyle = "black";
    ctx.fillRect(0,0,canvas.width, canvas.height);
    
    ctx.fillStyle = positiveC;
    ctx.fillRect(0, gs*tc-ah, gs*tc, ah);
    
    ctx.fillStyle = negativeC;
    ctx.fillRect(0, 0, gs*tc, ah);
    
    // # draw player
    ctx.fillStyle = playerC;
    ctx.fillRect(px*gs, py*gs, gs, gs);
    
    // # check for areas
    if(py <= redArea){
        if(target == "negative"){
            console.log("OK");
            score++;
        }else{
            console.log("not OK");
            score = 0;
        }
        px=py=9;
        setTarget();
    }
    if(py >= greenArea){
        if(target == "positive"){
            console.log("OK");
            score++;
        }else{
            console.log("not OK");
            score = 0;
        }
        px=py=9;
        setTarget();
    }
    
    document.getElementById("score").innerHTML = score;
    
}

function pushKey(evt) {
    
    switch(evt.keyCode){
        case 37:
            px -= 1;
            break;
        case 38:
            
            py -= 1;
            break;
        case 39:
            px += 1;
            break;
        case 40:
            py += 1;
            break;
    }
    
    if(px < 0){
        px = tc-1;
    }
    if(px > tc-1){
        px = 0;
    }
    console.log("X: "+px+" Y: "+py);
}

function setTarget() {
    
    var nmb = Math.floor(Math.random()*2);
    var pntr = document.getElementById("color");
    var clr = undefined;;
    
    switch(nmb){
        case 0:
            clr = positiveC;
            target = "positive";
            break;
        case 1:
            clr = negativeC;
            target = "negative";
            break;
    }
    
    pntr.style.backgroundColor = clr;
}
