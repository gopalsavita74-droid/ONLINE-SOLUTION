// ===============================
// LOADER
// ===============================

window.addEventListener("load", function () {
    const loader = document.getElementById("loader");
    if (loader) {
        loader.style.display = "none";
    }
});

// ===============================
// CURRENT YEAR
// ===============================

const year = document.getElementById("year");

if (year) {
    year.innerHTML = new Date().getFullYear();
}

// ===============================
// BACK TO TOP
// ===============================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function () {

    if (!topBtn) return;

    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

if (topBtn) {

    topBtn.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}

// ===============================
// DARK MODE
// ===============================

const darkBtn = document.getElementById("darkMode");

if (darkBtn) {

    darkBtn.addEventListener("click", function () {

        document.body.classList.toggle("dark");

    });

}

// ===============================
// TYPING EFFECT
// ===============================

const typingElement = document.getElementById("typing");

if (typingElement) {

    const text = "WELCOME TO ONLINE SOLUTION";
    let i = 0;

    function typing() {

        if (i < text.length) {

            typingElement.innerHTML += text.charAt(i);

            i++;

            setTimeout(typing, 80);

        }

    }

    typing();

}

// ===============================
// MOBILE MENU
// ===============================

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

if (menuToggle && nav) {

    menuToggle.addEventListener("click", function () {

        nav.classList.toggle("show");

    });

}
// ===============================
// IMAGE SLIDER
// ===============================

const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

function showSlide(index) {

    if (slides.length === 0) return;

    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");
}

function nextSlide() {

    if (slides.length === 0) return;

    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);
}

if (slides.length > 0) {

    showSlide(0);

    setInterval(nextSlide, 4000);

}

const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

if (nextBtn) {
    nextBtn.addEventListener("click", nextSlide);
}

if (prevBtn) {

    prevBtn.addEventListener("click", function () {

        currentSlide--;

        if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        }

        showSlide(currentSlide);

    });

}

// ===============================
// IMAGE POPUP
// ===============================

const imagePopup = document.getElementById("imagePopup");
const popupImage = document.getElementById("popupImage");
const closePopup = document.querySelector(".closePopup");

if (imagePopup && popupImage) {

    document.querySelectorAll("img").forEach(img => {

        img.addEventListener("click", function () {

            popupImage.src = this.src;
            imagePopup.style.display = "flex";

        });

    });

}

if (closePopup) {

    closePopup.addEventListener("click", function () {

        imagePopup.style.display = "none";

    });

}

window.addEventListener("click", function (e) {

    if (e.target === imagePopup) {

        imagePopup.style.display = "none";

    }

});

// ===============================
// SEARCH FILTER
// ===============================

const searchBox = document.getElementById("searchBox");

if (searchBox) {

    searchBox.addEventListener("keyup", function () {

        const value = this.value.toLowerCase();

        document.querySelectorAll(".service-card").forEach(card => {

            const text = card.innerText.toLowerCase();

            card.style.display = text.includes(value) ? "block" : "none";

        });

    });

}
// ===============================
// COUNTER
// ===============================

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const target = +counter.getAttribute("data-target");
    let count = 0;

    function updateCounter() {

        const increment = Math.ceil(target / 100);

        count += increment;

        if (count < target) {
            counter.innerText = count;
            requestAnimationFrame(updateCounter);
        } else {
            counter.innerText = target;
        }

    }

    updateCounter();

});

// ===============================
// SMOOTH SCROLL
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});

// ===============================
// STICKY HEADER
// ===============================

window.addEventListener("scroll", function () {

    const header = document.querySelector("header");

    if (!header) return;

    if (window.scrollY > 50) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }

});

// ===============================
// PREVENT IMAGE DRAG
// ===============================

document.querySelectorAll("img").forEach(img => {
    img.draggable = false;
});

// ===============================
// WHATSAPP FORM
// ===============================

function sendWhatsApp() {

    const name = document.getElementById("name")?.value || "";
    const mobile = document.getElementById("mobile")?.value || "";
    const service = document.getElementById("service")?.value || "";
    const message = document.getElementById("message")?.value || "";

    const text =
        "Hello ONLINE SOLUTION\n\n" +
        "Name : " + name +
        "\nMobile : " + mobile +
        "\nService : " + service +
        "\nMessage : " + message;

    window.open(
        "https://wa.me/919140202287?text=" + encodeURIComponent(text),
        "_blank"
    );

}
// ===============================
// SEARCH FILTER
// ===============================

const searchBox = document.getElementById("searchBox");

if (searchBox) {
    searchBox.addEventListener("keyup", function () {
        const value = this.value.toLowerCase();

        document.querySelectorAll(".service-card").forEach(card => {
            const text = card.innerText.toLowerCase();
            card.style.display = text.includes(value) ? "block" : "none";
        });
    });
}

// ===============================
// COUNTER
// ===============================

document.querySelectorAll(".counter").forEach(counter => {

    const target = Number(counter.dataset.target) || 0;
    let count = 0;

    function updateCounter() {
        const increment = Math.ceil(target / 100);

        count += increment;

        if (count < target) {
            counter.innerText = count;
            requestAnimationFrame(updateCounter);
        } else {
            counter.innerText = target;
        }
    }

    updateCounter();
});

// ===============================
// SMOOTH SCROLL
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});

// ===============================
// STICKY HEADER
// ===============================

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (!header) return;

    header.classList.toggle("sticky", window.scrollY > 50);

});

// ===============================
// PREVENT IMAGE DRAG
// ===============================

document.querySelectorAll("img").forEach(img => {
    img.draggable = false;
});

// ===============================
// WHATSAPP FORM
// ===============================

function sendWhatsApp() {

    const name = document.getElementById("name")?.value || "";
    const mobile = document.getElementById("mobile")?.value || "";
    const service = document.getElementById("service")?.value || "";
    const message = document.getElementById("message")?.value || "";

    const text =
`Hello ONLINE SOLUTION

Name : ${name}
Mobile : ${mobile}
Service : ${service}
Message : ${message}`;

    window.open(
        "https://wa.me/919140202287?text=" + encodeURIComponent(text),
        "_blank"
    );
}
// ===============================
// SERVICE POPUP
// ===============================

const servicePopup = document.getElementById("servicePopup");
const popupTitle = document.getElementById("popupTitle");
const popupDescription = document.getElementById("popupDescription");
const popupWhatsapp = document.getElementById("popupWhatsapp");
const closeService = document.querySelector("#servicePopup .close");

const serviceData = {

    "PAN Card": {
        desc: "New PAN Card, Correction, e-PAN Download.",
        msg: "Hello, I want PAN Card Service."
    },

    "Aadhaar Service": {
        desc: "Aadhaar Update, Download & Mobile Update.",
        msg: "Hello, I want Aadhaar Service."
    },

    "Passport Seva": {
        desc: "New Passport & Renewal.",
        msg: "Hello, I want Passport Service."
    },

    "Driving Licence": {
        desc: "Learning & Permanent Driving Licence.",
        msg: "Hello, I want Driving Licence Service."
    },

    "GST Registration": {
        desc: "GST Registration & Return Filing.",
        msg: "Hello, I want GST Registration Service."
    },

    "ITR Filing": {
        desc: "Income Tax Return Filing.",
        msg: "Hello, I want ITR Filing Service."
    },

    "Railway Ticket": {
        desc: "IRCTC Railway Ticket Booking.",
        msg: "Hello, I want Railway Ticket Booking."
    },

    "Flight Ticket": {
        desc: "Domestic & International Flight Ticket Booking.",
        msg: "Hello, I want Flight Ticket Booking."
    }

};

document.querySelectorAll(".service-card").forEach(card => {

    card.style.cursor = "pointer";

    card.addEventListener("click", function () {

        const title = this.querySelector("h3")?.innerText;

        if (!title || !serviceData[title]) return;

        popupTitle.textContent = title;
        popupDescription.textContent = serviceData[title].desc;

        popupWhatsapp.href =
            "https://wa.me/919140202287?text=" +
            encodeURIComponent(serviceData[title].msg);

        servicePopup.style.display = "flex";

    });

});

if (closeService) {

    closeService.addEventListener("click", function () {
        servicePopup.style.display = "none";
    });

}

window.addEventListener("click", function (e) {

    if (e.target === servicePopup) {
        servicePopup.style.display = "none";
    }

});

// ===============================
// SERVICE WORKER
// ===============================

if ("serviceWorker" in navigator) {

    window.addEventListener("load", function () {

        navigator.serviceWorker.register("./sw.js")
            .then(() => console.log("✅ Service Worker Registered"))
            .catch(err => console.log(err));

    });

}

// ===============================
// END
// ===============================
// ===============================
// WHATSAPP BUTTONS
// ===============================

const WHATSAPP_NUMBER = "919140202287";

// सभी WhatsApp बटन पर काम करेगा
document.querySelectorAll(".whatsapp-btn").forEach(btn => {

    btn.addEventListener("click", function (e) {

        e.preventDefault();

        const service = this.dataset.service || "Online Service";

        const message =
`Hello ONLINE SOLUTION,

I want information about:
${service}

Please contact me.`;

        window.open(
            `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
            "_blank"
        );

    });

});