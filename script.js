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


// --- Validation simple du formulaire ---
const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    status.textContent = "⚠️ Merci de remplir tous les champs.";
    status.style.color = "orange";
    return;
  }

  const emailRegex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailRegex.test(email)) {
    status.textContent = "⚠️ Adresse e-mail invalide.";
    status.style.color = "orange";
    return;
  }

  // Message de confirmation
  status.textContent = "✅ Message envoyé avec succès";
  status.style.color = "#00c3ff";
  form.reset();

  // Animation du message
  setTimeout(() => {
    status.textContent = "";
  }, 4000);
});


const toggleButton = document.getElementById("theme-toggle");

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    toggleButton.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    toggleButton.textContent = "🌙";
    localStorage.setItem("theme", "light");
  }
});

window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    toggleButton.textContent = "☀️";
  }
});
