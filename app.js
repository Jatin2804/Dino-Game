var dino = document.getElementById("dino");
var block = document.getElementById("block");
var counter = 0;

//jump

function jump(){
    if(dino.classList == "animate"){
        return
    }
    dino.classList.add("animate");
    setTimeout(function(){
        dino.classList.remove("animate");
    },300)
}

document.body.onkeydown = function(e){
    if(e.keyCode == 32){
        jump();
    }
}