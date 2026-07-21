// ===============================
// SERVICE POPUP
// ===============================

const servicePopup = document.getElementById("servicePopup");
const popupTitle = document.getElementById("popupTitle");
const popupDescription = document.getElementById("popupDescription");
const popupWhatsapp = document.getElementById("popupWhatsapp");
const closeServicePopup = document.querySelector("#servicePopup .close");

const serviceData = {

"PAN Card":{
desc:"New PAN Card, PAN Correction, e-PAN Download. Required: Aadhaar Card + Mobile Number.",
msg:"Hello, I want PAN Card Service."
},

"Aadhaar Service":{
desc:"Aadhaar Update, Address Update, Mobile Update & Aadhaar Download.",
msg:"Hello, I want Aadhaar Service."
},

"Passport Seva":{
desc:"New Passport Apply, Renewal & Document Guidance.",
msg:"Hello, I want Passport Service."
},

"Driving Licence":{
desc:"Learning Licence, Driving Licence Renewal & Other Services.",
msg:"Hello, I want Driving Licence Service."
},

"GST Registration":{
desc:"GST Registration, GST Return Filing & Business Registration.",
msg:"Hello, I want GST Registration Service."
},

"ITR Filing":{
desc:"Income Tax Return Filing for Salaried & Business.",
msg:"Hello, I want ITR Filing Service."
},

"Railway Ticket":{
desc:"IRCTC Railway Ticket Booking Service.",
msg:"Hello, I want Railway Ticket Booking."
},

"Flight Ticket":{
desc:"Domestic & International Flight Ticket Booking.",
msg:"Hello, I want Flight Ticket Booking."
}

};
document.querySelectorAll(".service-card").forEach(card=>{

card.style.cursor="pointer";

card.addEventListener("click",function(){

let title=this.querySelector("h3").innerText;

if(serviceData[title]){

popupTitle.innerText=title;

popupDescription.innerText=serviceData[title].desc;

popupWhatsapp.href="https://wa.me/919140202287?text="+encodeURIComponent(serviceData[title].msg);

servicePopup.style.display="flex";

}

});

});

closeServicePopup.onclick=function(){

servicePopup.style.display="none";

};

window.addEventListener("click",function(e){

if(e.target==servicePopup){

servicePopup.style.display="none";

}

});