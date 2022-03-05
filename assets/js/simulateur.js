
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
  },
  6 :{
    40420 : "bleu",
    51812 : "jaune",
    77825 : "violet",
    //:"rose"
  },
  7 :{
    44946 : "bleu",
    57609 : "jaune",
    86569 : "violet",
    //:"rose"
  },
  8 :{
    49472 : "bleu",
    63406 : "jaune",
    95313 : "violet",
    //:"rose"
  },
  9 :{
    53998 : "bleu",
    69203 : "jaune",
    104057 : "violet",
    //:"rose"
  },
  10 :{
    58524 : "bleu",
    75000 : "jaune",
    112801 : "violet",
    //:"rose"
  },
  11 :{
    63050 : "bleu",
    80797 : "jaune",
    121545 : "violet",
    //:"rose"
  },
  12 :{
    67576 : "bleu",
    86594 : "jaune",
    130289 : "violet",
    //:"rose"
  },
  13 :{
    72102 : "bleu",
    92391 : "jaune",
    139033 : "violet",
    //:"rose"
  },
  14 :{
    76628 : "bleu",
    98188 : "jaune",
    147777 : "violet",
    //:"rose"
  },
  15 :{
    81154 : "bleu",
    103985 : "jaune",
    156521 : "violet",
    //:"rose"
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
  },
  6 :{
    55989 : "bleu",
    68159 : "jaune",
    101951 : "violet",
    //:"rose"
  },
  7 :{
    62242 : "bleu",
    75772 : "jaune",
    113406 : "violet",
    //:"rose"
  },
  8 :{
    68495 : "bleu",
    83385 : "jaune",
    124861 : "violet",
    //:"rose"
  },
  9 :{
    74748 : "bleu",
    90998 : "jaune",
    136316 : "violet",
    //:"rose"
  },
  10 :{
    81001 : "bleu",
    98611 : "jaune",
    147771 : "violet",
    //:"rose"
  },
  11 :{
    87254 : "bleu",
    106224 : "jaune",
    159226 : "violet",
    //:"rose"
  },
  12 :{
    93507 : "bleu",
    113837 : "jaune",
    170681 : "violet",
    //:"rose"
  },
  13 :{
    99760 : "bleu",
    121450 : "jaune",
    182136 : "violet",
    //:"rose"
  },
  14 :{
    106013 : "bleu",
    129063 : "jaune",
    193591 : "violet",
    //:"rose"
  },
  15 :{
    112266 : "bleu",
    136676 : "jaune",
    205046 : "violet",
    //:"rose"
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

const aidesTravaux = {
  "isolation des murs par l'extérieur": {
    "bleu":75 ,
    "jaune":60,
    "violet":40,
    "rose":15
  },
  "isolation des murs par l'intérieur": {
    "bleu":25,
    "jaune":20,
    "violet":15,
    "rose":7
  },
  "isolation des combles perdues par le sol": {
    "bleu":0,
    "jaune":0,
    "violet":0,
    "rose":0
  },
  "isolation des rampants de toiture": {
    "bleu":25,
    "jaune":20,
    "violet":15,
    "rose":7
  }
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
    //alert(currentStep);
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
  let pictoPrime = document.getElementById("stepByStepForm").querySelector("#prime-color").querySelector("img");

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
    let travauxSelect = document.getElementById("stepByStepForm").querySelector("#travaux-select").value;
    let aides = aidesTravaux[travauxSelect][color];
    let ceeAides = cee[travauxSelect];
    let totalAides = aides + ceeAides;
    console.log(localite);
    console.log(color);

      if (residence === 'no') {
        //debugger;
        totalAides = ceeAides + 0;
        document.querySelector(".step.step3").querySelector("#results").querySelector("#color").innerHTML = "Vous n'êtes pas éligible à MaPrimeRénov'";
        document.querySelector(".step.step3").querySelector("#results").querySelector("#aides").innerText = "";
        document.querySelector(".step.step3").querySelector("#results").querySelector("#aides").innerHTML = `Mais vous bénéficiez de ${ceeAides}€/m<sup>2</sup> avec la prime CEE<br><span class="total-aides">Le total des primes est de ${totalAides}€/m<sup>2</sup></span>`;
        pictoPrime.src = `${window.location.origin}/assets/images/icones/pictos-entreprise/prime-neutre.png`;

      }
      else {
        //debugger;
        pictoPrime.src = `${window.location.origin}/assets/images/icones/pictos-entreprise/prime-${color}.png`;
        color = color.replace(/^\w/, (c) => c.toUpperCase());
        //alert(`Vous êtes éligible à <span class=${color}>MaPrimeRénov ${color}</span>`);
        //alert(`Vous avez droit à ${aides}€/m<sup>2</sup> avec MaPrimeRénov'<br> XX€/m<sup>2</sup> avec la prime CEE<br>Le total des primes est de XX€/m<sup>2</sup>`);
        document.querySelector(".step.step3").querySelector("#results").querySelector("#color").innerHTML = `Vous êtes éligible à <span class=${color}>MaPrimeRénov ${color}</span>`;
        document.querySelector(".step.step3").querySelector("#results").querySelector("#aides").innerHTML = `<span style="text-decoration:underline;">Vous avez droit à</span> :<br>- ${aides}€/m<sup>2</sup> avec MaPrimeRénov'<br>- ${ceeAides}€/m<sup>2</sup> avec la prime CEE<br><span class="total-aides">Le total des primes est de ${totalAides}€/m<sup>2</sup></span>`;
      }

    //document.querySelector('#scroll-to').scrollIntoView({
    //  behavior: 'smooth'
    //});
    return color;
    }
  );

  let buttonFinal = document.querySelector.(".button.final")element.addEventListener("change", (event) =>{
    window.dataLayer = window.dataLayer || [];
      //window.dataLayer.push('simulator': {});
        dataLayer.push({
        'event': 'push-simulator',
        'simulator': {
          'cp': localite,
          'color': color,
          'travaux': travauxSelect
        } // mise en place de mon événement
      });
  });



}

let radioButtons = Array.from(document.getElementById("stepByStepForm").querySelectorAll(".radio"));
radioButtons.forEach(element=>{
  element.addEventListener("change", (event) =>{
    radioButtons.forEach(element=>{
      element.classList.remove("checked");
    });
    event.currentTarget.classList.add("checked");
  });
})

