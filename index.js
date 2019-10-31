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
let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
function button(){
    img1.style.display = "none";
    img2.style.display = "block";
}
function buttonout(){
    img1.style.display = "block";
    img2.style.display = "none";
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
let hidden = document.getElementById("hidden");
let sabaton = document.getElementById("sabaton");

function togglePlayer(){
        if(sabaton.style.display == "block"){
        sabaton.style.display = "none";
        hidden.style.display = "inline-block";
    }
    else{
        sabaton.style.display = "block";
        hidden.style.display = "none";
    }
}

// let show = document.getElementById("show");
// var showing = true;
// let fig = document.getElementsByClassName("gallery");
// function hideGallery(){
//     if(showing == true){
//         fig.style.display = "block";
//         fig.style.display = "none";
//         show.innerHTML = "Show pictures";
//         showing = false;
//     }
//     else{
//         fig.style.display = "block";
//         show.innerHTML = "Hide pictures";
//         showing = true;
//     }
// }