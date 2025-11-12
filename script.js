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


// --- Filtrage des projets ---
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Retirer l'état actif des autres boutons
    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const category = btn.dataset.filter;

    projectCards.forEach((card) => {
      const isVisible = category === "all" || card.dataset.category === category;
      card.style.display = isVisible ? "block" : "none";
    });
  });
});
