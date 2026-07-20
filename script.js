// ===============================
// LOADER
// ===============================

window.addEventListener("load", function () {

document.getElementById("loader").style.display = "none";

});

// ===============================
// CURRENT YEAR
// ===============================

document.getElementById("year").innerHTML = new Date().getFullYear();

// ===============================
// BACK TO TOP
// ===============================

const topBtn = document.getElementById("topBtn");

window.onscroll = function () {

if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {

topBtn.style.display = "block";

} else {

topBtn.style.display = "none";

}

};

topBtn.onclick = function () {

window.scrollTo({

top: 0,

behavior: "smooth"

});

};

// ===============================
// DARK MODE
// ===============================

const darkBtn = document.getElementById("darkMode");

darkBtn.onclick = function () {

document.body.classList.toggle("dark");

};

// ===============================
// TYPING EFFECT
// ===============================

const text = "WELCOME TO ONLINE SOLUTION";

let i = 0;

function typing() {

if (i < text.length) {

document.getElementById("typing").innerHTML += text.charAt(i);

i++;

setTimeout(typing, 100);

}

}

typing();
// ===================================
// MOBILE MENU
// ===================================

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", () => {

nav.classList.toggle("show");

});

// ===================================
// AUTO IMAGE SLIDER
// ===================================

const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

function showSlide(index){

slides.forEach((slide)=>{

slide.classList.remove("active");

});

slides[index].classList.add("active");

}

function nextSlide(){

currentSlide++;

if(currentSlide>=slides.length){

currentSlide=0;

}

showSlide(currentSlide);

}

setInterval(nextSlide,4000);

// ===================================
// PREVIOUS / NEXT BUTTON
// ===================================

const nextBtn=document.querySelector(".next");

const prevBtn=document.querySelector(".prev");

if(nextBtn){

nextBtn.addEventListener("click",()=>{

nextSlide();

});

}

if(prevBtn){

prevBtn.addEventListener("click",()=>{

currentSlide--;

if(currentSlide<0){

currentSlide=slides.length-1;

}

showSlide(currentSlide);

});

}

// ===================================
// IMAGE POPUP
// ===================================

const popup=document.getElementById("imagePopup");

const popupImg=document.getElementById("popupImage");

const closePopup=document.querySelector(".closePopup");

document.querySelectorAll("img").forEach(img=>{

img.addEventListener("click",()=>{

popup.style.display="flex";

popupImg.src=img.src;

});

});

closePopup.onclick=function(){

popup.style.display="none";

};

window.onclick=function(e){

if(e.target==popup){

popup.style.display="none";

}

};

// ===================================
// SEARCH FILTER
// ===================================

const search=document.getElementById("searchBox");

if(search){

search.addEventListener("keyup",function(){

let value=this.value.toLowerCase();

document.querySelectorAll(".service-card").forEach(card=>{

let text=card.innerText.toLowerCase();

card.style.display=text.includes(value)?"block":"none";

});

});

}
// ==========================================
// COUNTER ANIMATION
// ==========================================

const counters = document.querySelectorAll(".counter");

const speed = 100;

counters.forEach(counter => {

const update = () => {

const target = +counter.getAttribute("data-target");

const count = +counter.innerText;

const inc = Math.ceil(target / speed);

if (count < target) {

counter.innerText = count + inc;

setTimeout(update, 20);

} else {

counter.innerText = target;

}

};

update();

});

// ==========================================
// SMOOTH SCROLL
// ==========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener("click", function(e) {

e.preventDefault();

const target = document.querySelector(this.getAttribute("href"));

if (target) {

target.scrollIntoView({

behavior: "smooth"

});

}

});

});

// ==========================================
// ACTIVE MENU
// ==========================================

const links = document.querySelectorAll("nav a");

links.forEach(link => {

link.addEventListener("click", function() {

links.forEach(l => l.classList.remove("active"));

this.classList.add("active");

});

});

// ==========================================
// SCROLL ANIMATION
// ==========================================

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if (entry.isIntersecting) {

entry.target.classList.add("show");

}

});

});

document.querySelectorAll(

".card,.service-card,.why-box,.review-card,.stat-box,.info-box"

).forEach(el => {

observer.observe(el);

});

// ==========================================
// HEADER SHADOW
// ==========================================

window.addEventListener("scroll", () => {

const header = document.querySelector("header");

if (window.scrollY > 50) {

header.classList.add("sticky");

} else {

header.classList.remove("sticky");

}

});

// ==========================================
// PREVENT IMAGE DRAG
// ==========================================

document.querySelectorAll("img").forEach(img => {

img.draggable = false;

});

// ==========================================
// END
// ==========================================
function sendWhatsApp(){

let name=document.getElementById("name").value;

let mobile=document.getElementById("mobile").value;

let service=document.getElementById("service").value;

let message=document.getElementById("message").value;


let text =
"Hello ONLINE SOLUTION%0A%0A"+
"Name: "+name+
"%0AMobile: "+mobile+
"%0AService: "+service+
"%0AMessage: "+message;


window.open(
"https://wa.me/919140202287?text="+text,
"_blank"
);

}