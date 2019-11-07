var x = true;
function vid(){
    if(x == true){
        document.getElementById("vid").pause();
        document.getElementById("vidclick").innerHTML = "Play Video";
        x = false;
    }
    else{
        document.getElementById("vid").play();
        document.getElementById("vidclick").innerHTML = "Pause Video";
        x = true;
    }
}
let down1 = document.getElementById("down1");
let down2 = document.getElementById("down2");
function button(){
    down1.style.display = "none";
    down2.style.display = "block";
}
function buttonout(){
    down1.style.display = "block";
    down2.style.display = "none";
}
function scrollDown() {
    var main = document.getElementById("main");
    main.scrollIntoView({behavior:'smooth', block:'start'});
  }

let top1 = document.getElementById("top1");
let top2 = document.getElementById("top2");
function button2(){
    top1.style.display = "none";
    top2.style.display = "block";
}
function buttonout2(){
    top1.style.display = "block";
    top2.style.display = "none";
}
function scrollUp() {
    var top = document.getElementById("top");
    top.scrollIntoView({behavior:'smooth', block:'nearest'});
  }

let hidden = document.getElementById("hidden");
let sabaton = document.getElementById("sabaton");

function togglePlayer(){
        if(sabaton.style.display == "block"){
        sabaton.style.display = "none";
        hidden.style.display = "block";
    }
    else{
        sabaton.style.display = "block";
        hidden.style.display = "none";
    }
}

let pause = document.getElementById("pause");
let play = document.getElementById("play");
let audio = document.getElementById("audio");

audio.addEventListener("onplaying",timer());

function audioControl(){
    if(play.style.display == "block"){
        pause.style.display = "block";
        play.style.display = "none";
        audio.play();
    }
    else{
        pause.style.display = "none";
        play.style.display = "block";
        audio.pause();
    }
}
function timer(){
    if(audio.onpause == true){
        clearInterval(timer2, 1000);
    }
    setInterval(timer2, 1000);
}
var mins = 0;
var secs = 0;
function timer2(){
    mins = audio.currentTime / 60 | 0;
    if(mins.toString().length < 2){
        mins = "0"+(audio.currentTime / 60 | 0).toString();
    }
    secs = audio.currentTime % 60 | 0;
    if(secs.toString().length < 2){
        secs = "0"+(audio.currentTime % 60 | 0).toString(); 
    }
    document.getElementById("timestamp").innerHTML = mins + " : " + secs;
}