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
var len = 0;
let musicline = document.getElementById("musicline");
let cont = document.getElementById("cont");
var positionInfo = musicline.getBoundingClientRect();
let musiclineW = positionInfo.width;
var musicpoint = document.getElementById("musicpoint");
function timer2(){
    amins = (audio.duration / 60 | 0).toString();
    asecs = (audio.duration % 60 | 0).toString();
    mins = audio.currentTime / 60 | 0;
    if(mins.toString().length < 2){
        mins = "0"+(audio.currentTime / 60 | 0).toString();
    }
    secs = audio.currentTime % 60 | 0;
    if(secs.toString().length < 2){
        secs = "0"+(audio.currentTime % 60 | 0).toString(); 
    }
    document.getElementById("timestamp").innerHTML = mins + " : " + secs + " / " + amins + " : " + asecs;

    len = (audio.currentTime/audio.duration) * 100;
    musicpoint.style.width = len + "%"; 
}

cont.addEventListener("click", (pos)=>{
    //console.log(pos.offsetX)
    //console.log(musiclineW)
    var x = (pos.offsetX / musiclineW) * 100;
    //console.log(x)
    skip(x)
});
function skip(x){
    if(x == 0 || x == musiclineW){
        musicpoint.style.width = 0 + "%";
    }
    else{
        musicpoint.style.width = x + "%";
        audio.currentTime = audio.duration * (x / 100); 
    }
}

let musichover = document.getElementById("musichover");
 var mpoint = Number(musicpoint.style.width) / musiclineW * 100;
 cont.addEventListener("mouseover",(pos)=>{
    var x = (pos.offsetX / musiclineW) * 100;
    // x -= mpoint;
    beforeSkip(x)
});
function beforeSkip(x){
    musichover.style.width = x + "%";
    // var mpointStr = Number.toString(mpoint);
    // musichover.style.left = mpointStr + "%";
}
cont.addEventListener("mouseleave",()=>{
    musichover.style.width = 0;
    // musichover.style.marginLeft = 0
    x = 0
});