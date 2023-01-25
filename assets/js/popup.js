document.getElementById("popup").style.display = "none";

function showStuff() {
    document.getElementById("popup").style.display = "inline";
}

let linksNav = Array.from(document.querySelector("nav").querySelectorAll("a"));
linksNav.forEach( element =>{
    element.addEventListener('mouseover', (event) => {
        showStuff();
    });
})

document.querySelector(".fa-circle-xmark").addEventListener("click", (event)=>{
    document.getElementById("popup").remove();
})

//setTimeout(showStuff, 10000);