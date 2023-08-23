const menu_nav = document.querySelector("#menucontainer");
const nav_header = document.querySelector(".navbar");
nav_header.classList.remove("active");
const toggleNavbar = () => {
  nav_header.classList.toggle("active");
};

menu_nav.addEventListener("click", () => toggleNavbar());
