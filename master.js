const hamburgerMenu = document.getElementById("hamburgerMenu");
const topNavMenu = document.getElementById("headerNavContainer");

hamburgerMenu.addEventListener("click", () => {
  topNavMenu.classList.toggle("menu-toggle");
}
);