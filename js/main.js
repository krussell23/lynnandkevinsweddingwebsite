const nav = document.querySelector("svg.hamburger");

nav.addEventListener("click", function (e) {
  document.querySelector("nav").classList.toggle("show-nav");
});
