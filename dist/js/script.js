const header = document.querySelector("header");
const fixedNav = header.offsetTop;
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");
const buttonToTop = document.querySelector("#button-to-top");
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

// Navbar Fixed On Scroll
window.onscroll = () => {
  if (!window.pageYOffset > fixedNav) {
    header.classList.remove("navbar-fixed");
    buttonToTop.classList.add("hidden");
  } else {
    header.classList.add("navbar-fixed");
    buttonToTop.classList.remove("hidden");
  }
};

// Navigation menu
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-actived");
  navMenu.classList.toggle("hidden");
});

// Navbar menu Minimize
window.addEventListener("click", (event) => {
  if (event.target != hamburger && event.target != navMenu) {
    hamburger.classList.remove("hamburger-actived");
    navMenu.classList.add("hidden");
  }
});

// Dark Mode Toggle

darkToggle.addEventListener("click", () => {
  if (darkToggle.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
});

// Dark Mode Toggle adjust it's position to localStorage accordingly
if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}
