let button = document.getElementById("btn-nav");
console.log(button);
let sidenav = document.getElementById("side-menu");
let nav = document.getElementById("nav");
console.log(sidenav);
button.addEventListener('click', (event) => {
  console.log(button);
  sidenav.classList.toggle("open");
});

