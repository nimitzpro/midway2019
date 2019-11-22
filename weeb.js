var vid = document.getElementById("vid");
var aud = document.getElementById("audio");
var audioLabel = document.getElementById("label");
var weebButton = document.getElementById("weebbutton");
var h1 = document.querySelectorAll("h1");

var demoQueryAll = document.querySelectorAll('section>h2, div>h2, ul, figcaption');
var images = document.querySelectorAll('figure img');
var isWeeb = false;
function weebify(){
    if(isWeeb == false){
        vid.setAttribute('src','weeb/alvideo.mp4');
        aud.setAttribute('src','weeb/almusic.mp3');
        audioLabel.innerHTML = "\"Azur Lane x Kancolle x High School Fleet x Arpeggio of Blue Steel (Mashup)\" by Sweg420";
        audioLabel.setAttribute('href','https://www.youtube.com/watch?v=IxLb09-WHEQ');
        audioLabel.style.maxWidth = "12em";
        weebButton.innerHTML = "Unweebify";
        
        demoQueryAll.forEach(query => {
            query.style.fontFamily = "AnimeAce";
          });
        h1.forEach(query =>{
            query.style.fontFamily = "Shinto";
        });
        for(i = 0;i<images.length;i++){
            images[i].setAttribute('src','weeb/'+i+'.png')
        }
        isWeeb = true;
    }
    else{
        // vid.setAttribute('src','assets/midwayvid.mp4');
        // aud.setAttribute('src','assets/midway.mp3');
        // audioLabel.innerHTML = "\"Midway\" by sabaton";
        // audioLabel.setAttribute('href','https://youtu.be/NuOnQpyP1nc');
        // weebButton.innerHTML = "Weebify";
        // demoQueryAll.forEach(query => {
        //     query.style.fontFamily = "JA3017";
        //   });
        // h1.forEach(query =>{
        //     query.style.fontFamily = "YFury";
        // });
        // isWeeb = false;
        location.reload();
    }
}