const nav_small = document.getElementById("nav__small");
const menu_button = document.getElementById("menu__button");

menu_button.addEventListener("mouseenter", showMenu);

function showMenu() {
  nav_small.style.height = "200px";
}

nav_small.addEventListener("mouseleave", ocultarMenu);

function ocultarMenu() {
  nav_small.style.height = "0px";
}
