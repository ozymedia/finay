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

document.querySelector("form").addEventListener("submit", handleSubmit);

const handleSubmit = (e) => {
  e.preventDefault()
  let myForm = document.getElementById('form');
  let formData = new FormData(myForm)
  fetch('/', {
    method: 'POST',
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString()
  }).then(() => console.log('Form successfully submitted')).catch((error) =>
    alert(error))
}

function closebox(){
  let image = event.currentTarget.dataset.image;
  document.querySelector(".lightbox").querySelector("img").src = `${window.location.origin}/assets/images/realisations/${image}`;
  document.querySelector(".lightbox").classList.add("visible");

  document.querySelector(".lightbox").addEventListener("click", (event) => {
  // do something on click of an element
    event.currentTarget.classList.remove("visible");
  });
}



