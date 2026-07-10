// =========================
// MAHIM GAMING PORTFOLIO
// script.js
// =========================

// Typing Effect
const typingElement = document.getElementById("typing");

const words = [
    "Minecraft Player",
    "Web Developer",
    "Designer",
    "Student",
    "Content Creator"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!isDeleting) {

        typingElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentWord.length) {
            isDeleting = true;
            typingSpeed = 1500;
        } else {
            typingSpeed = 100;
        }

    } else {

        typingElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }

            typingSpeed = 200;
        } else {
            typingSpeed = 60;
        }

    }

    setTimeout(typeEffect, typingSpeed);
}

typeEffect();

// =========================
// Mobile Menu
// =========================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Close menu after clicking a link
document.querySelectorAll("#navLinks a").forEach(link => {

    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });

});

// =========================
// Back To Top Button
// =========================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        topBtn.style.display = "flex";
        topBtn.style.justifyContent = "center";
        topBtn.style.alignItems = "center";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// =========================
// Navbar Background
// =========================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "rgba(10,10,20,.85)";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.4)";

    } else {

        header.style.background = "rgba(10,10,20,.55)";
        header.style.boxShadow = "none";

    }

});

// =========================
// Scroll Reveal Animation
// =========================

const revealElements = document.querySelectorAll(
    ".glass-card, .skill-card, .project-card"
);

const reveal = () => {

    const triggerBottom = window.innerHeight * 0.85;

    revealElements.forEach(element => {

        const boxTop = element.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {

            element.style.opacity = "1";
            element.style.transform = "translateY(0)";

        }

    });

};

revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(50px)";
    element.style.transition = "all .8s ease";

});

window.addEventListener("scroll", reveal);

reveal();

// =========================
// Active Navigation Link
// =========================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// =========================
// Smooth Hover Effect
// =========================

document.querySelectorAll(".project-card").forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const x = e.offsetX;
        const y = e.offsetY;

        card.style.background =
            `radial-gradient(circle at ${x}px ${y}px,
            rgba(139,92,246,.25),
            rgba(255,255,255,.05))`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.background = "rgba(255,255,255,.06)";

    });

});

// =========================
// Console Message
// =========================

console.log(`
=====================================
      MAHIM GAMING PORTFOLIO
=====================================

Website loaded successfully.

Made with HTML, CSS & JavaScript.
`);
