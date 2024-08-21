const navLinks = document.querySelectorAll(".links-navbar li");
const menuBtn = document.querySelector(".btn-menu-mobile");
const mobileMenu = document.querySelector(".menu-mobile");
const overflow = document.querySelector(".overflow");
const mobileLinks = document.querySelectorAll(".links-mobile li");

menuBtn.addEventListener("click", () => {
  const icon = document.querySelector(".btn-menu-mobile img");
  menuBtn.classList.toggle("active-btn");
  mobileMenu.classList.toggle("active-menu");
  overflow.classList.toggle("active-menu");
  if (menuBtn.classList.contains("active-btn")) {
    icon.src = "assets/img/icon-close-menu.svg";
  } else {
    icon.src = "assets/img/icon-menu.svg";
  }
});

navLinks.forEach((link) => {
  const subMenu = link.querySelector(".menu-secundario");
  link.addEventListener("click", () => {
    link.classList.toggle("active");
    subMenu.classList.toggle("active-menu");
  });
});
mobileLinks.forEach((link) => {
  const subMenu = link.querySelector(".mobile-secundario");
  link.addEventListener("click", () => {
    link.classList.toggle("active");
    subMenu.classList.toggle("active-menu");
  });
});