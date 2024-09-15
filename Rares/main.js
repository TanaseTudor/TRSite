function deschidereclama(){
    document.getElementById("recl").style.display = "block";
    document.getElementById("reclama").play()
}
function pag2(){
    location.href = "/Rares/pag1.html"
}
document.getElementById("reclama").addEventListener("ended", (event) => { pag2() });

function muzica1(){
    var audio = new Audio('https://rares3968.github.io/TheFatRat_Time_Lapse.mp3');
audio.play();
}

function what(){
    var audio = new Audio('https://rares3968.github.io/ali-a-intro-bass-boosted.mp3');
audio.play();
}
function muzica2(){
    var audio = new Audio('https://rares3968.github.io/muzica2.mp3');
audio.play();
}