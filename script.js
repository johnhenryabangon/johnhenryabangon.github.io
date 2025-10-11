// Simple typing animation
const text = ["Web Developer", "Cybersecurity Enthusiast", "Software Engineer"];
let index = 0;
let charIndex = 0;
const typingText = document.querySelector(".typing-text");

function type() {
    if (charIndex < text[index].length) {
        typingText.textContent += text[index].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 2000);
    }
}

function erase() {
    if (charIndex > 0) {
        typingText.textContent = text[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50);
    } else {
        index = (index + 1) % text.length;
        setTimeout(type, 500);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    if (typingText) type();

    // ===== Navbar Toggle =====
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('show');
            menuToggle.classList.toggle('active');
        });
    }
});

