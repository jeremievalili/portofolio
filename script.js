console.log("Portfolio version 2 - Structure complete chargée ✅")

// Effet d'apparition au scroll
const sections = document.querySelectorAll("section");

const revealOnScroll = () => {
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < window.innerHeight - 100) {
      section.classList.add("visible");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll(); // pour l’état initial
