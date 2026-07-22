// Menú de navegación en móvil
const toggle = document.getElementById("navtoggle");
const links = document.getElementById("navlinks");

if (toggle && links) {
  toggle.addEventListener("click", () => {
    links.classList.toggle("open");
  });
}

// Selector de idioma (ES / EN)
const langButtons = document.querySelectorAll(".lang-btn");
const i18nElements = document.querySelectorAll("[data-i18n]");

function applyLang(lang) {
  i18nElements.forEach((el) => {
    const text = el.getAttribute("data-" + lang);
    if (text) el.textContent = text;
  });
  langButtons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
  document.documentElement.lang = lang;
  localStorage.setItem("portfolio-lang", lang);
}

langButtons.forEach((btn) => {
  btn.addEventListener("click", () => applyLang(btn.dataset.lang));
});

const savedLang = localStorage.getItem("portfolio-lang") || "es";
applyLang(savedLang);
