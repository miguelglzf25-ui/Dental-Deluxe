// Menú móvil y año automático para Dental Deluxe
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".site-nav");

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navigation.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Abrir menú");
    });
  });
}

const yearElement = document.getElementById("current-year");
if (yearElement) yearElement.textContent = new Date().getFullYear();


// Comparador interactivo de fotografías antes y después
document.querySelectorAll("[data-comparison]").forEach((slider) => {
  const range = slider.querySelector(".comparison-range");
  const update = () => slider.style.setProperty("--split", `${range.value}%`);
  range.addEventListener("input", update);
  update();
});
