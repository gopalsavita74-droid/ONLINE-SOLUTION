// =====================================
// ONLINE SOLUTION SCRIPT
// =====================================

// LOADER
window.addEventListener("load", () => {

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

// MENU

const menu=document.querySelector(".menu-toggle");

const nav=document.querySelector("nav");

if(menu && nav){

menu.onclick=function(){

nav.classList.toggle("show");

};

}

// TYPING

const typing=document.getElementById("typing");

if(typing){

const txt="WELCOME TO ONLINE SOLUTION";

let i=0;

function type(){

if(i<txt.length){

typing.innerHTML+=txt.charAt(i);

i++;

setTimeout(type,70);

}

}

type();

}

// BACK TO TOP

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

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
// =====================================
// SLIDER
// =====================================

const slides=document.querySelectorAll(".slide");

let currentSlide=0;

function showSlide(index){

if(slides.length===0)return;

slides.forEach(slide=>{

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

// =====================================
// SEARCH
// =====================================

const search=document.getElementById("searchBox");

if(search){

search.addEventListener("keyup",function(){

const value=this.value.toLowerCase();

document.querySelectorAll(".service-card").forEach(card=>{

card.style.display=
card.innerText.toLowerCase().includes(value)
?
"block"
:
"none";

});

});

}

// =====================================
// COUNTER
// =====================================

document.querySelectorAll(".counter").forEach(counter=>{

const target=+counter.dataset.target;

let count=0;

function update(){

const inc=Math.ceil(target/100);

count+=inc;

if(count<target){

counter.innerHTML=count;

requestAnimationFrame(update);

}else{

counter.innerHTML=target;

}

}

update();

});
// =====================================
// IMAGE POPUP
// =====================================

const imagePopup=document.getElementById("imagePopup");
const popupImage=document.getElementById("popupImage");
const closePopup=document.querySelector(".closePopup");

if(imagePopup && popupImage){

document.querySelectorAll("img").forEach(img=>{

img.addEventListener("click",function(){

popupImage.src=this.src;

imagePopup.style.display="flex";

});

});

}

if(closePopup){

closePopup.onclick=function(){

imagePopup.style.display="none";

};

}

window.addEventListener("click",function(e){

if(e.target===imagePopup){

imagePopup.style.display="none";

}

});

// =====================================
// WHATSAPP FORM
// =====================================

function sendWhatsApp(){

const name=document.getElementById("name")?.value||"";

const mobile=document.getElementById("mobile")?.value||"";

const service=document.getElementById("service")?.value||"";

const message=document.getElementById("message")?.value||"";

const text=
`Hello ONLINE SOLUTION

Name : ${name}
Mobile : ${mobile}
Service : ${service}
Message : ${message}`;

window.open(

"https://wa.me/919140202287?text="+encodeURIComponent(text),

"_blank"

);

}

// =====================================
// SERVICE POPUP
// =====================================

const servicePopup=document.getElementById("servicePopup");

const popupTitle=document.getElementById("popupTitle");

const popupDescription=document.getElementById("popupDescription");

const popupWhatsapp=document.getElementById("popupWhatsapp");

const closeService=document.querySelector("#servicePopup .close");

const serviceData={

"PAN Card":{
desc:"New PAN Card, Correction, e-PAN Download.",
msg:"Hello, I want PAN Card Service."
},

"Aadhaar Service":{
desc:"Aadhaar Update, Download & Mobile Update.",
msg:"Hello, I want Aadhaar Service."
},

"Passport Seva":{
desc:"New Passport & Renewal.",
msg:"Hello, I want Passport Service."
},

"Driving Licence":{
desc:"Learning & Permanent Driving Licence.",
msg:"Hello, I want Driving Licence Service."
},

"GST Registration":{
desc:"GST Registration & Return Filing.",
msg:"Hello, I want GST Registration."
},

"ITR Filing":{
desc:"Income Tax Return Filing.",
msg:"Hello, I want ITR Filing."
},

"Railway Ticket":{
desc:"IRCTC Railway Ticket Booking.",
msg:"Hello, I want Railway Ticket."
},

"Flight Ticket":{
desc:"Domestic & International Flight Ticket Booking.",
msg:"Hello, I want Flight Ticket."
}

};

document.querySelectorAll(".service-card").forEach(card=>{

card.addEventListener("click",function(e){

const title=this.querySelector("h3")?.innerText;

if(serviceData[title] && servicePopup){

e.preventDefault();

popupTitle.innerText=title;

popupDescription.innerText=serviceData[title].desc;

popupWhatsapp.href="https://wa.me/919140202287?text="+encodeURIComponent(serviceData[title].msg);

servicePopup.style.display="flex";

}

});

});

if(closeService){

closeService.onclick=function(){

servicePopup.style.display="none";

};

}

window.addEventListener("click",function(e){

if(e.target===servicePopup){

servicePopup.style.display="none";

}

});

// =====================================
// SMOOTH SCROLL
// =====================================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

// =====================================
// SERVICE WORKER
// =====================================

if("serviceWorker" in navigator){

window.addEventListener("load",()=>{

navigator.serviceWorker.register("./sw.js")

.then(()=>console.log("✅ Service Worker Registered"))

.catch(err=>console.log(err));

});

}

// =====================================
// END
// =====================================
