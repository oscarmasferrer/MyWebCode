// Menú de navegación en móvil
const toggle = document.getElementById("navtoggle");
const links = document.getElementById("navlinks");

if (toggle && links) {
  toggle.addEventListener("click", () => {
    links.classList.toggle("open");
  });
}
