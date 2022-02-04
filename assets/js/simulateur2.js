
console.log("simulateur 2");
const previousButton = document.getElementById("previous")
const nextButton = document.getElementById("next")
const submitButton = document.getElementById('validate')
const form = document.getElementById('stepByStepForm')
const dots = document.getElementsByClassName('progress-bar__dot')
const numberOfSteps = 3
let currentStep = 1

for(let i = 0 ; i < dots.length ; ++i){
   dots[i].addEventListener('click', ()=>{
     goToStep(i+1)
   })
}

previousButton.onclick = goPrevious
nextButton.onclick = goNext


function goNext(e) {
   e.preventDefault()
   currentStep += 1
   goToStep(currentStep)
}

function goPrevious(e) {
   e.preventDefault()
   currentStep -= 1
   goToStep(currentStep)
}

function goToStep(stepNumber){
   currentStep = stepNumber

   let inputsToHide = document.getElementsByClassName('step')
   let inputs = document.getElementsByClassName(`step${currentStep}`)
   let indicators = document.getElementsByClassName('progress-bar__dot')

   for(let i = indicators.length-1; i >= currentStep ; --i){
      indicators[i].classList.remove('full')
   }

   for(let i = 0; i < currentStep; ++i){
      indicators[i].classList.add('full')
   }

   //hide all input
   for (let i = 0; i < inputsToHide.length; ++i) {
      hide(inputsToHide[i])
   }

   //only show the right one
   for (let i = 0; i < inputs.length; ++i) {
      show(inputs[i])
   }

   //if we reached final step
   if(currentStep === numberOfSteps){
      enable(previousButton)
      disable(nextButton)
      show(submitButton)
   }

   //else if first step
   else if(currentStep === 1){
     disable(previousButton)
      enable(next)
      hide(submitButton)
   }

   else {
      enable(previousButton)
      enable(next)
      hide(submitButton)
   }
}

function enable(elem) {
   elem.classList.remove("disabled");
   elem.disabled = false;
}

function disable(elem) {
   elem.classList.add("disabled");
   elem.disabled = true;
}

function show(elem){
   elem.classList.remove('hidden')
}

function hide(elem){
   elem.classList.add('hidden')
}


console.log("simulateur");
const bareme = {
  1 :{
    14879 : "bleu",
    19074 : "jaune",
    29148 : "violet",
    //29149 : "rose" // >29149
  },
  2 :{
    21760 : "bleu",
    27896 : "jaune",
    42848 : "violet",
    //42848 : "rose" // >42848
  },
  3 :{
    26170 : "bleu",
    33547 : "jaune",
    51592 : "violet",
    //51592 : "rose" // >51592
  },
  4 :{
    30572 : "bleu",
    39192 : "jaune",
    60336 : "violet",
    //60336 : "rose" // >60336
  },
  5 :{
    34993 : "bleu",
    44860 : "jaune",
    69081 : "violet",
    //69081 : "rose" // >69081
  }
}
const baremeParis = {
  1 :{
    21123 : "bleu",
    25714 : "jaune",
    38184 : "violet",
    //38184 : "rose" // >29149
  },
  2 :{
    31003 : "bleu",
    37739 : "jaune",
    56130 : "violet",
    //56130 : "rose" // >42848
  },
  3 :{
    37232 : "bleu",
    45326 : "jaune",
    67585 : "violet",
    //67585 : "rose" // >51592
  },
  4 :{
    43472 : "bleu",
    52925 : "jaune",
    79041 : "violet",
    //79041 : "rose" // >60336
  },
  5 :{
    49736 : "bleu",
    60546 : "jaune",
    90496 : "violet",
    //90496 : "rose" // >69081
  }
}
const suppColors = {
  "bleu" : 4526,
  "jaune" : 5797,
  "violet" : 8744,
  "rose" : 8744
}
const isolationExt = {
  "bleu" : 75,
  "jaune" : 60,
  "violet" : 40,
  "rose" : 15,
  "plafond" : 150
}
const cee = {
  "isolation des murs par l'extérieur": 19,
  "isolation des murs par l'intérieur": 19,
  "isolation des combles perdues par le sol": 8,
  "isolation des rampants de toiture": 8
}
const paris = ["75","77","78","91","92","93","94","95"]

let btnFinal = document.getElementById("next");
Array.from(document.querySelector(".button-group").querySelectorAll(".button")).forEach(element =>{
  element.addEventListener("click", (event) =>{
    alert(currentStep);
    if (currentStep > 1) {
      btnFinal.classList.add("final");
      simulate();
    }
  });
});

function simulate() {
  document.getElementById("stepByStepForm").querySelector(".button.final").addEventListener('click', (event) => {
  event.preventDefault();
  // do something on submit of a form
  //let travaux = Array.from(document.querySelectorAll(".type-travaux input")).filter(item => item.checked === true)[0].value;
  let residence = Array.from(document.querySelectorAll(".residence input")).filter(item => item.checked === true)[0].value;
  //let anciennete = parseFloat(document.getElementById("simulateur-prime-renov").querySelector("label#anciennete").querySelector("input").value);
  let people = parseFloat(document.getElementById("stepByStepForm").querySelector("label#people").querySelector("input").value);
  let revenus = parseFloat(document.getElementById("stepByStepForm").querySelector("label#revenus").querySelector("input").value);
  //let surface = parseFloat(document.getElementById("simulateur-prime-renov").querySelector("label#surface").querySelector("input").value);
  //let occupation = parseFloat(document.getElementById("simulateur-prime-renov").querySelector("label#duree").querySelector("input").value);
  let zipcode = document.getElementById("stepByStepForm").querySelector("label#zipcode").querySelector("input").value;
  let localite = "";
  let entries = "";
  let result = "";
  let color = "";
  let pictoPrime = document.getElementById("prime-color").querySelector("img");

    //bareme[people];
    if (paris.includes(zipcode.substring(0,2))) {
      localite = "paris";
      entries = Object.keys(baremeParis[people]);
      result = entries.filter(key => revenus <= key)[0];
      color = baremeParis[people][result] || "rose";
    }
    else {
      localite = zipcode;
      entries = Object.keys(bareme[people]);
      result = entries.filter(key => revenus <= key)[0];
      color = bareme[people][result] || "rose";
    }
    //let entries = Object.keys(bareme[people]);
    //let result = entries.filter(key => revenus <= key)[0];
    //let color = bareme[people][result] || "rose";
    let aides = isolationExt[color];
    console.log(localite);
    console.log(color);
    debugger;
      if (residence === 'no') {
        debugger;
        document.getElementById("results").querySelector("#color").innerHTML = "";
        document.getElementById("results").querySelector("#aides").innerText = "";
        document.getElementById("results").querySelector("#aides").innerText = "Vous n'êtes pas éligible à MaPrimeRénov'";
        pictoPrime.src = `${window.location.origin}/assets/images/icones/pictos-entreprise/prime-neutre.png`;
      }
      else {
        debugger;
        pictoPrime.src = `${window.location.origin}/assets/images/icones/pictos-entreprise/prime-${color}.png`;
        color = color.replace(/^\w/, (c) => c.toUpperCase());
        document.getElementById("results").querySelector("#color").innerHTML = `Vous êtes éligible à <span class=${color}>MaPrimeRénov ${color}</span>`;
        document.getElementById("results").querySelector("#aides").innerHTML = `Vous avez droit à ${aides}€/m<sup>2</sup> avec MaPrimeRénov'<br> XX€/m<sup>2</sup> avec la prime CEE<br>Le total des primes est de XX€/m<sup>2</sup>`;
      }

    //document.querySelector('#scroll-to').scrollIntoView({
    //  behavior: 'smooth'
    //});

      return color;
    }
  );
}


Array.from(document.querySelectorAll('input[type=radio]')).forEach((element) => {
})
