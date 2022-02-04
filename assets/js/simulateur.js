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

document.getElementById("simulateur-prime-renov").addEventListener('submit', (event) => {
  event.preventDefault();
  // do something on submit of a form
  let travaux = Array.from(document.querySelectorAll(".type-travaux input")).filter(item => item.checked === true)[0].value;
  let residence = Array.from(document.querySelectorAll(".residence input")).filter(item => item.checked === true)[0].value;
  //let anciennete = parseFloat(document.getElementById("simulateur-prime-renov").querySelector("label#anciennete").querySelector("input").value);
  let people = parseFloat(document.getElementById("simulateur-prime-renov").querySelector("label#people").querySelector("input").value);
  let revenus = parseFloat(document.getElementById("simulateur-prime-renov").querySelector("label#revenus").querySelector("input").value);
  //let surface = parseFloat(document.getElementById("simulateur-prime-renov").querySelector("label#surface").querySelector("input").value);
  //let occupation = parseFloat(document.getElementById("simulateur-prime-renov").querySelector("label#duree").querySelector("input").value);
  let zipcode = document.getElementById("simulateur-prime-renov").querySelector("label#zipcode").querySelector("input").value;
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
    if (travaux === 'no' || residence === 'no') {
      document.getElementById("results").querySelector("#color").innerHTML = "";
      document.getElementById("results").querySelector("#aides").innerText = "";
      document.getElementById("results").querySelector("#aides").innerText = "Vous n'êtes pas éligible à MaPrimeRénov'";
      pictoPrime.src = `${window.location.origin}/assets/images/icones/pictos-entreprise/prime-neutre.png`;
    }
    else {
      pictoPrime.src = `${window.location.origin}/assets/images/icones/pictos-entreprise/prime-${color}.png`;
      color = color.replace(/^\w/, (c) => c.toUpperCase());
      document.getElementById("results").querySelector("#color").innerHTML = `Vous êtes éligible à <span class=${color}>MaPrimeRénov ${color}</span>`;
      document.getElementById("results").querySelector("#aides").innerHTML = `Vous avez droit à ${aides}€/m<sup>2</sup> avec MaPrimeRénov'<br> XX€/m<sup>2</sup> avec la prime CEE<br>Le total des primes est de XX€/m<sup>2</sup>`;
    }

    document.querySelector('#scroll-to').scrollIntoView({
      behavior: 'smooth'
    });

    return color;
  }
);

Array.from(document.querySelectorAll('input[type=radio]')).forEach((element) => {
})
