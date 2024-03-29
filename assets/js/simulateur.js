
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
    //14879 : "bleu",
    //15262 : "bleu",
    17009:"bleu",
    //19074 : "jaune",
    //19565 : "jaune",
    21805:"jaune",
    30549:"violet",
    //29149 : "rose" // >29149
  },
  2 :{
    //21760 : "bleu",
    //22320 : "bleu",
    24875:"bleu",
    //27896 : "jaune",
    //28614 : "jaune",
    31889:"jaune",
    44907:"violet",
    //42848 : "rose" // >42848
  },
  3 :{
    //26170 : "bleu",
    //26844 : "bleu",
    29917:"bleu",
    //33547 : "jaune",
    //34411 : "jaune",
    38349:"jaune",
    54071: "violet",
    //51592 : "rose" // >51592
  },
  4 :{
    //30572 : "bleu",
    //31359 : "bleu",
    34948:"bleu",
    //39192 : "jaune",
    //40201 : "jaune",
    44802:"jaune",
    63235:"violet",
    //60336 : "rose" // >60336
  },
  5 :{
    //35894 : "bleu",
    //44860 : "jaune",
    //34894 : "bleu",
    40002:"bleu",
    //46015 : "jaune",
    51281:"jaune",
    72400:"violet",
    //69081 : "rose" // >69081
  },
  6 :{
    //40420 : "bleu",
    42981:"bleu",
    55095:"jaune",
    //51812 : "jaune",
    //39405 : "bleu",
    //50511 : "jaune",
    77825 : "violet",
    //:"rose"
  },
  7 :{
    //44946 : "bleu",
    47794:"bleu",
    61260:"jaune",
    //57609 : "jaune",
    //43817 : "bleu",
    //56162 : "jaune",
    86569 : "violet",
    //:"rose"
  },
  8 :{
    //49472 : "bleu",
    52607:"bleu",
    67425:"jaune",
    //63406 : "jaune",
    //48229 : "bleu",
    //61813 : "jaune",
    95313 : "violet",
    //:"rose"
  },
  9 :{
    //53998 : "bleu",
    //69203 : "jaune",
    57420:"bleu",
    73590:"jaune",
    //52641 : "bleu",
    //67464 : "jaune",
    104057 : "violet",
    //:"rose"
  },
  10 :{
    //58524 : "bleu",
    //75000 : "jaune",
    62233:"bleu",
    79755:"jaune",
    //57053 : "bleu",
    //73115 : "jaune",
    112801 : "violet",
    //:"rose"
  },
  11 :{
    //63050 : "bleu",
    //80797 : "jaune",
    67046:"bleu",
    85920:"jaune",
    //61465 : "bleu",
    //78766 : "jaune",
    121545 : "violet",
    //:"rose"
  },
  12 :{
    //67576 : "bleu",
    //86594 : "jaune",
    71859:"bleu",
    92085:"jaune",
    //65877 : "bleu",
    //84417 : "jaune",
    130289 : "violet",
    //:"rose"
  },
  13 :{
    //72102 : "bleu",
    //92391 : "jaune",
    76672:"bleu",
    98250:"jaune",
    //70289 : "bleu",
    //90068 : "jaune",
    139033 : "violet",
    //:"rose"
  },
  14 :{
    //76628 : "bleu",
    //98188 : "jaune",
    81485:"bleu",
    104415:"jaune",
    //74701 : "bleu",
    //95719 : "jaune",
    147777 : "violet",
    //:"rose"
  },
  15 :{
    //81154 : "bleu",
    //103985 : "jaune",
    86298:"bleu",
    110580:"jaune",
    //79113 : "bleu",
    //101370 : "jaune",
    156521 : "violet",
    //:"rose"
  }

}
const baremeParis = {
  1 :{
    23541:"bleu",
    28657:"jaune",
    //20593 : "bleu",
    //25068 : "jaune",
    40018: "violet",
    //38184 : "rose" // >29149
  },
  2 :{
    34551: "bleu",
    42058: "jaune",
    //30225 : "bleu",
    //36792 : "jaune",
    58827: "violet",
    //56130 : "rose" // >42848
  },
  3 :{
    41493: "bleu",
    50513: "jaune",
    //36297 : "bleu",
    //44188 : "jaune",
    70382: "violet",
    //67585 : "rose" // >51592
  },
  4 :{
    48447: "bleu",
    58981: "jaune",
    //42381 : "bleu",
    //51597 : "jaune",
    82839: "violet",
    //79041 : "rose" // >60336
  },
  5 :{
    55427: "bleu",
    67473: "jaune",
    //48488 : "bleu",
    //51597 : "jaune",
    94844: "violet",
    //90496 : "rose" // >69081
  },
  6 :{
    59536 : "bleu",
    72477 : "jaune",
    101951 : "violet",
    //:"rose"
  },
  7 :{
    66186 : "bleu",
    80574 : "jaune",
    113406 : "violet",
    //:"rose"
  },
  8 :{
    72836 : "bleu",
    88671 : "jaune",
    124861 : "violet",
    //:"rose"
  },
  9 :{
    79486 : "bleu",
    96768 : "jaune",
    136316 : "violet",
    //:"rose"
  },
  10 :{
    86136 : "bleu",
    104865 : "jaune",
    147771 : "violet",
    //:"rose"
  },
  11 :{
    92786 : "bleu",
    112962 : "jaune",
    159226 : "violet",
    //:"rose"
  },
  12 :{
    99436 : "bleu",
    121059 : "jaune",
    170681 : "violet",
    //:"rose"
  },
  13 :{
    106086 : "bleu",
    129156 : "jaune",
    182136 : "violet",
    //:"rose"
  },
  14 :{
    112736 : "bleu",
    137253 : "jaune",
    193591 : "violet",
    //:"rose"
  },
  15 :{
    119386 : "bleu",
    145350 : "jaune",
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
  },
  "pompe a chaleur air/eau": {
    "bleu":5000,
    "jaune":4000,
    "violet":3000,
    "rose":0
  },
  "pompe a chaleur air/air": {
    "bleu":0,
    "jaune":0,
    "violet":0,
    "rose":0
  },
  "ballon thermodynamique":{
    //chauffe-eau thermodynamique
    "bleu":1200,
    "jaune":800,
    "violet":400,
    "rose":0
  },
  "poele a bois":{
    "bleu":2500,
    "jaune":2000,
    "violet":1000,
    "rose":0
  },
  "poele a granules":{
    //ok
    "bleu":3000,
    "jaune":2500,
    "violet":1500,
    "rose":0
  },
  "chaudiere a granules":{
    //OK
    "bleu":11000,
    "jaune":9000,
    "violet":5000,
    "rose":0
  },
  "systeme solaire combine":{
    //système solaire combiné OK
    "bleu":11000,
    "jaune":9000,
    "violet":5000,
    "rose":0
  },
  "chauffe eau solaire":{
    "bleu":4000,
    "jaune":3000,
    "violet":2000,
    "rose":0
  }
}

const cee = {
  "isolation des murs par l'extérieur":{
    "bleu":8,
    "jaune":8,
    "violet":8,
    "rose":8
  },
  "isolation des murs par l'intérieur":{
    "bleu":8,
    "jaune":8,
    "violet":8,
    "rose":8
  },
  "isolation des combles perdues par le sol":{
    "bleu":8,
    "jaune":8,
    "violet":8,
    "rose":8
  },
  "isolation des rampants de toiture":{
    "bleu":8,
    "jaune":8,
    "violet":8,
    "rose":8
  },
  "pompe a chaleur air/eau":{
    "bleu":4000,
    "jaune":4000,
    "violet":2500,
    "rose":2500
  },
  "pompe a chaleur air/air":{
    "bleu":100,
    "jaune":100,
    "violet":100,
    "rose":100
  },
  "ballon thermodynamique":{
    "bleu":80,
    "jaune":80,
    "violet":80,
    "rose":80
  },
  "poele a bois":{
    "bleu":800,
    "jaune":800,
    "violet":500,
    "rose":500
  },
  "poele a granules":{
    "bleu":800,
    "jaune":800,
    "violet":500,
    "rose":500
  },
  "chaudiere a granules":{
    "bleu":4000,
    "jaune":4000,
    "violet":2500,
    "rose":2500
  },
  "systeme solaire combine":{
    "bleu":3000,
    "jaune":3000,
    "violet":2000,
    "rose":2000
  },
  "chauffe eau solaire": {
    "bleu":100,
    "jaune":100,
    "violet":100,
    "rose":100
  }
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
    let ceeAides = cee[travauxSelect][color];
    let totalAides = aides + ceeAides;
    console.log(localite);
    console.log(color);

    if(sessionStorage.resultSimulation !== ""){
      sessionStorage.resultSimulation = "";
      delete sessionStorage.resultSimulation;
      /*
      let dataToDelete  = JSON.parse(sessionStorage.resultSimulation);
      delete dataToDelete.travaux;
      delete dataToDelete.aides;
      delete dataToDelete.ceeAides;
      delete dataToDelete.totalAides;
      delete dataToDelete.zipcode;
      delete dataToDelete.residence;
      delete dataToDelete.color;
      */
    }
    else {
      //
    }
    debugger;
    let resultSimulation = {
      'travaux':travauxSelect,
      'aides': aides,
      'ceeAides':ceeAides,
      'totalAides':totalAides,
      'zipcode':zipcode,
      'residence':residence,
      'color': color
    };
    sessionStorage.setItem('resultSimulation', JSON.stringify(resultSimulation));
    /*
      if (residence === 'no') {
        //debugger;
        totalAides = ceeAides + 0;
        document.querySelector(".step.step3").querySelector("#results").querySelector("#color").innerHTML = "Vous n'êtes pas éligible à MaPrimeRénov'";
        document.querySelector(".step.step3").querySelector("#results").querySelector("#aides").innerText = "";
        if (travauxSelect.includes('isolation')) {
          document.querySelector(".step.step3").querySelector("#results").querySelector("#aides").innerHTML = `Mais vous bénéficiez de ${ceeAides}€/m<sup>2</sup> avec la prime CEE<br><span class="total-aides">Le total des primes est de ${totalAides}€/m<sup>2</sup></span>`;
        }
        else {
          document.querySelector(".step.step3").querySelector("#results").querySelector("#aides").innerHTML = `Mais vous bénéficiez de ${ceeAides}€ avec la prime CEE<br><span class="total-aides">Le total des primes est de ${totalAides}€</span>`;
        }

        pictoPrime.src = `${window.location.origin}/assets/images/icones/pictos-entreprise/prime-neutre.png`;

      }
      else {
        pictoPrime.src = `${window.location.origin}/assets/images/icones/pictos-entreprise/prime-${color}.png`;
        color = color.replace(/^\w/, (c) => c.toUpperCase());
        //alert(`Vous êtes éligible à <span class=${color}>MaPrimeRénov ${color}</span>`);
        //alert(`Vous avez droit à ${aides}€/m<sup>2</sup> avec MaPrimeRénov'<br> XX€/m<sup>2</sup> avec la prime CEE<br>Le total des primes est de XX€/m<sup>2</sup>`);
        document.querySelector(".step.step3").querySelector("#results").querySelector("#color").innerHTML = `Vous êtes éligible à <span class=${color}>MaPrimeRénov ${color}</span>`;
        if (travauxSelect.includes('isolation')) {
          document.querySelector(".step.step3").querySelector("#results").querySelector("#aides").innerHTML = `<span style="text-decoration:underline;">Vous avez droit à</span> :<br>- ${aides}€/m<sup>2</sup> avec MaPrimeRénov'<br>- ${ceeAides}€/m<sup>2</sup> avec la prime CEE<br><span class="total-aides">Le total des primes est de ${totalAides}€/m<sup>2</sup></span>`;
        }
        else {
          document.querySelector(".step.step3").querySelector("#results").querySelector("#aides").innerHTML = `<span style="text-decoration:underline;">Vous avez droit à</span> :<br>- ${aides}€ pour vos travaux<br>- ${ceeAides}€ supplémentaires avec la prime CEE<br><span class="total-aides">Le total des primes est de ${totalAides}€ </span>`;
        }
      }
    */

    //document.querySelector('#scroll-to').scrollIntoView({
    //  behavior: 'smooth'
    //});
    return color;
    }
  );

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