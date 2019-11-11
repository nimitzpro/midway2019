// let left1 = document.getElementById("leftimg");
// let left2 = document.getElementById("leftimg2");
// function left(){
//     left1.style.display = "none";
//     left2.style.display = "inline-block";
// }
// function leftout(){
//     left1.style.display = "inline-block";
//     left2.style.display = "none";
// }

// let right1 = document.getElementById("rightimg");
// let right2 = document.getElementById("rightimg2");
// function right(){
//     right1.style.display = "none";
//     right2.style.display = "inline-block";
// }
// function rightout(){
//     right1.style.display = "inline-block";
//     right2.style.display = "none";
// }

var i = 1;
var j = 1;
var y = "i";
window.onload = () => {
    document.getElementById(y+i.toString()).style.display = "block";
    document.getElementById("page").innerHTML = "Page " + i.toString() + " out of 8";
};

function changeRight(){
    if(i != 8){
        j = i;
        i++;
    }
    document.getElementById(y+i.toString()).style.display = "block";
    document.getElementById(y+j.toString()).style.display = "none";
    document.getElementById("page").innerHTML = "Page " + i.toString() + " out of 8";
}
function changeLeft(){
    if(i != 1){
        j = i;
        i--;
    }
    document.getElementById(y+i.toString()).style.display = "block";
    document.getElementById(y+j.toString()).style.display = "none";
    document.getElementById("page").innerHTML = "Page " + i.toString() + " out of 8";
}