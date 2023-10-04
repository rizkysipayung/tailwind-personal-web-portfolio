const header = document.querySelector("header");
const fixedNav = header.offsetTop;
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

// Navbar Fixed On Scroll
window.onscroll = () => {
  if (!window.pageYOffset > fixedNav) {
    header.classList.remove("navbar-fixed");
  } else {
    header.classList.add("navbar-fixed");
  }
};

// Navigation menu
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-actived");
  navMenu.classList.toggle("hidden");
});
