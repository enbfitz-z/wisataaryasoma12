const music = document.getElementById("bgMusic");

if(music){
window.addEventListener("load",()=>{

music.play().catch(()=>{

document.addEventListener("click",()=>{
music.play();
},{once:true});

});

});
}

const klik = new Audio("klik.mp3");

document.querySelectorAll(".menu").forEach(menu=>{

menu.addEventListener("click",()=>{

klik.currentTime=0;
klik.play();

});

});

window.addEventListener("load",()=>{

setTimeout(()=>{

document.getElementById("loader").classList.add("hide");

},3000);

});

function updateJam(){

const sekarang = new Date();

document.getElementById("jam").innerHTML =
sekarang.toLocaleString("id-ID");

}

setInterval(updateJam,1000);

updateJam();

const topBtn = document.getElementById("topBtn");

window.onscroll = function(){

if(document.documentElement.scrollTop > 200){

topBtn.style.display = "block";

}else{

topBtn.style.display = "none";

}

}

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,
behavior:"smooth"

});

});

const gambar = [

"borobudur.jpg",
"dieng.jpg",
"lawangsewu.jpg"

];

let i = 0;

setInterval(()=>{

const slider = document.getElementById("slider");

if(slider){

i++;

if(i >= gambar.length){

i = 0;

}

slider.src = gambar[i];

}

},4000);
