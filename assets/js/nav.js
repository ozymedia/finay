let button = document.getElementById("btn-nav");
console.log(button);
let sidenav = document.getElementById("side-menu");
let nav = document.getElementById("nav");
console.log(sidenav);
button.addEventListener('click', (event) => {
  console.log(button);
  sidenav.classList.toggle("open");
});
window.addEventListener("scroll", (event) => {
  if (window.pageYOffset >= 5) {
    nav.classList.add("white");
    nav.style.position = "fixed";
  } else {
    nav.classList.remove("white");
  }
});

