// JS
const navLinks = document.querySelector(".nav-links");

function onToggleMenu(e){
    // Cambia el ícono
    e.setAttribute("name", e.getAttribute("name") === "menu" ? "close" : "menu");
    // Alterna la posición del menú
    navLinks.classList.toggle("top-12"); // o mejor: navLinks.classList.toggle("top-0");
    navLinks.classList.toggle("top-[-100%]");
}