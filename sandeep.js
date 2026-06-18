const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

const revealElements = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  revealElements.forEach((element) => {
    const top = element.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (top < screenHeight - 120) {
      element.classList.add("active");
    }
  });
});

const typingText = document.getElementById("typing");
const words = [
  "Price Action Analyst",
  "Risk Management Focused",
  "Trading Psychology Learner",
  "Capital Preservation Mindset"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];

  if (isDeleting) {
    typingText.textContent = currentWord.substring(0, charIndex--);
  } else {
    typingText.textContent = currentWord.substring(0, charIndex++);
  }

  if (!isDeleting && charIndex === currentWord.length + 1) {
    isDeleting = true;
    setTimeout(typeEffect, 1000);
    return;
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
  }

  setTimeout(typeEffect, isDeleting ? 60 : 100);
}

typeEffect();

const moneyRain = document.querySelector(".money-rain");
const symbols = ["$", "₹", "$", "₹", "₿", "€"];

for (let i = 0; i < 35; i++) {
  const span = document.createElement("span");
  span.textContent = symbols[Math.floor(Math.random() * symbols.length)];
  span.style.left = Math.random() * 100 + "%";
  span.style.animationDuration = 4 + Math.random() * 5 + "s";
  span.style.animationDelay = Math.random() * 4 + "s";
  span.style.fontSize = 20 + Math.random() * 24 + "px";
  moneyRain.appendChild(span);
}