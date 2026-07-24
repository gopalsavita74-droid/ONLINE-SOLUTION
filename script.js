// ===================================
// ONLINE SOLUTION SCRIPT
// ===================================

// LOADER

window.addEventListener("load",function(){

const loader=document.getElementById("loader");

if(loader){
loader.style.display="none";
}

});

// YEAR

const year=document.getElementById("year");

if(year){
year.innerHTML=new Date().getFullYear();
}

// DARK MODE

const dark=document.getElementById("darkMode");

if(dark){

dark.onclick=function(){

document.body.classList.toggle("dark");

};

}

// MOBILE MENU

const menu=document.querySelector(".menu-toggle");

const nav=document.querySelector("nav");

if(menu && nav){

menu.onclick=function(){

nav.classList.toggle("show");

};

}

// TYPING EFFECT

const typing=document.getElementById("typing");

if(typing){

const text="WELCOME TO ONLINE SOLUTION";

let i=0;

function typingEffect(){

if(i<text.length){

typing.innerHTML+=text.charAt(i);

i++;

setTimeout(typingEffect,70);

}

}

typingEffect();

}

// BACK TO TOP

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",function(){

if(!topBtn)return;

if(window.scrollY>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

if(topBtn){

topBtn.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

};

}
// ===================================
// SLIDER
// ===================================

const slides=document.querySelectorAll(".slide");

let currentSlide=0;

function showSlide(index){

if(slides.length===0)return;

slides.forEach(function(slide){

slide.classList.remove("active");

});

slides[index].classList.add("active");

}

function nextSlide(){

if(slides.length===0)return;

currentSlide++;

if(currentSlide>=slides.length){

currentSlide=0;

}

showSlide(currentSlide);

}

function prevSlide(){

if(slides.length===0)return;

currentSlide--;

if(currentSlide<0){

currentSlide=slides.length-1;

}

showSlide(currentSlide);

}

if(slides.length>0){

showSlide(0);

setInterval(nextSlide,4000);

}

const next=document.querySelector(".next");

const prev=document.querySelector(".prev");

if(next){

next.onclick=nextSlide;

}

if(prev){

prev.onclick=prevSlide;

}

// ===================================
// SEARCH
// ===================================

const search=document.getElementById("searchBox");

if(search){

search.addEventListener("keyup",function(){

const value=this.value.toLowerCase();

document.querySelectorAll(".service-card").forEach(function(card){

if(card.innerText.toLowerCase().includes(value)){

card.style.display="block";

}else{

card.style.display="none";

}

});

});

}

// ===================================
// COUNTER
// ===================================

const counters=document.querySelectorAll(".counter");

counters.forEach(function(counter){

const target=Number(counter.dataset.target);

let count=0;

function updateCounter(){

const increment=Math.ceil(target/100);

count+=increment;

if(count<target){

counter.innerHTML=count;

requestAnimationFrame(updateCounter);

}else{

counter.innerHTML=target;

}

}

updateCounter();

});
// ===================================
// WHATSAPP ENQUIRY
// ===================================

function sendWhatsApp(){

const name=document.getElementById("name").value;
const mobile=document.getElementById("mobile").value;
const service=document.getElementById("service").value;
const message=document.getElementById("message").value;

const text=
"Hello ONLINE SOLUTION%0A%0A"+
"Name : "+name+"%0A"+
"Mobile : "+mobile+"%0A"+
"Service : "+service+"%0A"+
"Message : "+message;

window.open(
"https://wa.me/919140202287?text="+text,
"_blank"
);

}

// ===================================
// IMAGE POPUP
// ===================================

const popup=document.getElementById("imagePopup");
const popupImg=document.getElementById("popupImage");
const closePopup=document.querySelector(".closePopup");

document.querySelectorAll("img").forEach(function(img){

img.addEventListener("click",function(){

if(!popup)return;

popup.style.display="flex";
popupImg.src=this.src;

});

});

if(closePopup){

closePopup.onclick=function(){

popup.style.display="none";

};

}

if(popup){

popup.onclick=function(e){

if(e.target===popup){

popup.style.display="none";

}

};

}

// ===================================
// SERVICE POPUP
// ===================================

const servicePopup=document.getElementById("servicePopup");

const popupTitle=document.getElementById("popupTitle");

const popupDescription=document.getElementById("popupDescription");

const popupWhatsapp=document.getElementById("popupWhatsapp");

const close=document.querySelector(".close");

document.querySelectorAll(".service-card").forEach(function(card){

card.addEventListener("click",function(e){

if(this.tagName==="A") return;

e.preventDefault();

popupTitle.innerHTML=this.querySelector("h3").innerText;

popupDescription.innerHTML=this.querySelector("p").innerText;

popupWhatsapp.href="https://wa.me/919140202287?text=Hello ONLINE SOLUTION, I want "+encodeURIComponent(this.querySelector("h3").innerText);

servicePopup.style.display="flex";

});

});

if(close){

close.onclick=function(){

servicePopup.style.display="none";

};

}

window.onclick=function(e){

if(e.target===servicePopup){

servicePopup.style.display="none";

}

};

// ===================================
// SERVICE WORKER
// ===================================

if("serviceWorker" in navigator){

window.addEventListener("load",function(){

navigator.serviceWorker.register("service-worker.js")

.then(function(){

console.log("✅ Service Worker Registered");

})

.catch(function(error){

console.log(error);

});

});

}

// ===================================
// SCROLL ANIMATION
// ===================================

const observer=new IntersectionObserver(function(entries){

entries.forEach(function(entry){

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll(

".service-card,.why-box,.review-card,.info-box,.counter-box"

).forEach(function(el){

observer.observe(el);

});

console.log("ONLINE SOLUTION Loaded Successfully");
