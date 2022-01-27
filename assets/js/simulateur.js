console.log("simulateur");
const bareme = {
  1 :{
    15262 : "bleu",
    19565 : "jaune",
    29148 : "violet",
    //29149 : "rose" // >29149
  },
  2 :{
    22320 : "bleu",
    28614 : "jaune",
    42848 : "violet",
    //42848 : "rose" // >42848
  },
  3 :{
    26844 : "bleu",
    34411 : "jaune",
    51592 : "violet",
    //51592 : "rose" // >51592
  },
  4 :{
    31359 : "bleu",
    40201 : "jaune",
    60336 : "violet",
    //60336 : "rose" // >60336
  },
  5 :{
    35894 : "bleu",
    46015 : "jaune",
    69081 : "violet",
    //69081 : "rose" // >69081
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
  "plafon" : 150
}
const paris = ["75","77","78","91","92","93","94","95"]

document.getElementById("simulateur-prime-renov").addEventListener('submit', (event) => {
  event.preventDefault();
  // do something on submit of a form
  let travaux = Array.from(document.querySelectorAll(".type-travaux input")).filter(item => item.checked === true)[0].value;
  let residence = Array.from(document.querySelectorAll(".residence input")).filter(item => item.checked === true)[0].value;
  let anciennete = parseFloat(document.getElementById("simulateur-prime-renov").querySelector("label#anciennete").querySelector("input").value);
  let people = parseFloat(document.getElementById("simulateur-prime-renov").querySelector("label#people").querySelector("input").value);
  let revenus = parseFloat(document.getElementById("simulateur-prime-renov").querySelector("label#revenus").querySelector("input").value);
  let surface = parseFloat(document.getElementById("simulateur-prime-renov").querySelector("label#surface").querySelector("input").value);
  let occupation = parseFloat(document.getElementById("simulateur-prime-renov").querySelector("label#duree").querySelector("input").value);
  let zipcode = document.getElementById("simulateur-prime-renov").querySelector("label#zipcode").querySelector("input").value;
  let localite = "";

  if (people < 5) {
    bareme[people];
    let entries = Object.keys(bareme[people]);
    let result = entries.filter(key => revenus <= key)[0];
    let color = bareme[people][result] || "rose";
    let aides = isolationExt[color] * surface;
    if (paris.includes(zipcode.substring(0,2))) {
      localite = "paris";
    }
    else {
      localite = zipcode;
    }
    console.log(color);
    if (travaux === 'no' || residence === 'no' || anciennete < 15 || occupation < 8 || localite === "paris") {
      document.getElementById("results").querySelector("#aides").innerText = "Vous n'êtes pas exigible à MaPrimeRénov'";
    }
    else {
      document.getElementById("results").querySelector("#color").innerText = color;
      document.getElementById("results").querySelector("#aides").innerText = `Vous avez droit à ${aides} € d'aide de MaPrimeRénov'`;
    }

    return color;
  }
  else if (people > 5) {}
  else {}
});

