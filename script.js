// ===============================
// ONLINE SOLUTION
// Professional Script
// ===============================

// Search Services

const searchBox = document.getElementById("searchBox");

if (searchBox) {

searchBox.addEventListener("keyup", function () {

let filter = searchBox.value.toUpperCase();

let cards = document.querySelectorAll(".card");

cards.forEach(function(card){

let title = card.querySelector("h3");

if(title){

let text = title.innerText.toUpperCase();

if(text.indexOf(filter) > -1){

card.style.display = "";

}else{

card.style.display = "none";

}

}

});

});

}

// Smooth Scroll

document.querySelectorAll("a[href^='#']").forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});

// Card Animation

const cards=document.querySelectorAll(".card");

cards.forEach((card,index)=>{

card.style.opacity="0";

card.style.transform="translateY(40px)";

setTimeout(()=>{

card.style.transition="0.5s";

card.style.opacity="1";

card.style.transform="translateY(0)";

},index*100);

});

// Button Hover Animation

document.querySelectorAll(".btn").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="scale(1.05)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="scale(1)";

});

});

// Current Year in Footer (Optional)

const year=document.getElementById("year");

if(year){

year.innerHTML=new Date().getFullYear();

}

console.log("ONLINE SOLUTION Website Loaded Successfully");
// ===========================
// IMAGE SLIDER
// ===========================

let slideIndex = 0;

const slides = document.querySelectorAll(".slide");

const nextBtn = document.querySelector(".next");

const prevBtn = document.querySelector(".prev");

function showSlide(index){

slides.forEach(slide=>{

slide.classList.remove("active");

});

if(index>=slides.length){

slideIndex=0;

}

if(index<0){

slideIndex=slides.length-1;

}

slides[slideIndex].classList.add("active");

}

function nextSlide(){

slideIndex++;

showSlide(slideIndex);

}

function prevSlide(){

slideIndex--;

showSlide(slideIndex);

}

if(nextBtn){

nextBtn.onclick=nextSlide;

}

if(prevBtn){

prevBtn.onclick=prevSlide;

}

// Auto Slider

setInterval(()=>{

slideIndex++;

showSlide(slideIndex);

},4000);

showSlide(slideIndex);
// ==========================
// LOADER
// ==========================

// ==========================
// BACK TO TOP
// ==========================

const topBtn=document.getElementById("topBtn");

window.onscroll=function(){

if(document.documentElement.scrollTop>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

};

topBtn.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

};
// ==========================
// IMAGE POPUP
// ==========================

const popup=document.getElementById("imagePopup");

const popupImg=document.getElementById("popupImage");

const closePopup=document.querySelector(".closePopup");

document.querySelectorAll(".card img").forEach(img=>{

img.addEventListener("click",function(){

popup.style.display="flex";

popupImg.src=this.src;

});

});

if(closePopup){

closePopup.onclick=function(){

popup.style.display="none";

};

}

window.onclick=function(e){

if(e.target==popup){

popup.style.display="none";

}

};
// ==========================
// MOBILE MENU
// ==========================

const menuBtn=document.querySelector(".menu-toggle");

const nav=document.querySelector("nav");

if(menuBtn){

menuBtn.onclick=function(){

nav.classList.toggle("active");

};

}
// ==========================
// DARK MODE
// ==========================

const dark=document.getElementById("darkMode");

if(dark){

dark.onclick=function(){

document.body.classList.toggle("dark");

};

}
// ===============================
// ANIMATED COUNTER
// ===============================

const counters = document.querySelectorAll(".counter");

counters.forEach(counter=>{

counter.innerText="0";

const updateCounter=()=>{

const target=+counter.getAttribute("data-target");

const count=+counter.innerText;

const increment=target/100;

if(count<target){

counter.innerText=Math.ceil(count+increment);

setTimeout(updateCounter,20);

}else{

if(target==5000){

counter.innerText="5000+";

}

else if(target==20){

counter.innerText="20+";

}

else if(target==5){

counter.innerText="5+";

}

else if(target==100){

counter.innerText="100%";

}

}

};

updateCounter();

});
// ===============================
// SCROLL ANIMATION
// ===============================

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll("section").forEach(sec=>{

sec.classList.add("hidden");

observer.observe(sec);

});
// ===============================
// TYPING EFFECT
// ===============================

const text = "ONLINE SOLUTION";

let i = 0;

function typing() {

    const typingElement = document.getElementById("typing");

    if (typingElement && i < text.length) {

        typingElement.innerHTML += text.charAt(i);

        i++;

        setTimeout(typing, 120);

    }

}

typing();
// ===============================

    updateCounter();

});
// ===============================
// AUTO YEAR
// ===============================

const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}