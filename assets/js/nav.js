console.log('bonjour');
let x = "thomas";
console.log(x);
let button = document.getElementById("btn-nav");
console.log(button);
let sidenav = document.getElementById("side-menu");
console.log(sidenav);
button.addEventListener('click', (event) => {
  console.log(button);
  sidenav.classList.toggle("open");
});
