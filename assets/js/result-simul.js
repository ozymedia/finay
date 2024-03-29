console.log("result");
let resultat  = JSON.parse(sessionStorage.resultSimulation);
//document.querySelector("#color").innerHTML = `<p>${resultat.color}</p>`;
//document.querySelector("#elligibilite").querySelector(".primaire").innerHTML = "Vous n'êtes pas éligible à MaPrimeRénov'";
let pictoPrime = document.querySelector("#prime-color").querySelector("img");
let color = resultat.color;

if (resultat.residence === 'no') {
    //debugger;
    let totalAides = resultat.ceeAides + 0;
    document.querySelector("#color").querySelector(".primaire").innerHTML = "Vous n'êtes pas éligible à MaPrimeRénov'";
    //document.querySelector("#resultat").innerText = "";
    if (resultat.travaux.includes('isolation')) {
      document.querySelector("#elligibilite").querySelector(".secondaire").innerHTML = `Mais vous bénéficiez de ${resultat.ceeAides}€/m<sup>2</sup> avec la prime CEE<br><span class="total-aides">Le total de vos primes s'élève à ${totalAides}€/m<sup>2</sup></span>`;
    }
    else {
      document.querySelector("#elligibilite").querySelector(".secondaire").innerHTML = `Mais vous bénéficiez de ${resultat.ceeAides}€ avec la prime CEE<br><span class="total-aides">Le total de vos primes s'élève à ${totalAides}€</span>`;
    }

    pictoPrime.src = `${window.location.origin}/assets/images/icones/pictos-entreprise/prime-renov-blanc.png`;

  }
  else {
    let totalAides = resultat.totalAides;
    //pictoPrime.src = `${window.location.origin}/assets/images/icones/pictos-entreprise/prime-${color}.png`;
    //color = color.replace(/^\w/, (c) => c.toUpperCase());
    //alert(`Vous êtes éligible à <span class=${color}>MaPrimeRénov ${color}</span>`);
    //alert(`Vous avez droit à ${aides}€/m<sup>2</sup> avec MaPrimeRénov'<br> XX€/m<sup>2</sup> avec la prime CEE<br>Le total des primes est de XX€/m<sup>2</sup>`);
    document.querySelector("#color").querySelector(".primaire").innerHTML = `Vous êtes éligible à <span class="">MaPrimeRénov ${color}</span>`;
    pictoPrime.src = `${window.location.origin}/assets/images/icones/pictos-entreprise/prime-renov-${color}.png`;
    if (resultat.travaux.includes('isolation')) {
      document.querySelector("#elligibilite").querySelector(".secondaire").innerHTML = `<span style="text-decoration:underline;">Vous pouvez bénéficier des aides suivantes</span> :<br><ul><li>${resultat.aides}€/m<sup>2</sup> avec MaPrimeRénov'</li><li>${resultat.ceeAides}€/m<sup>2</sup> avec la prime CEE</li></ul><br><br><span class="total-aides">Le total de vos primes s'élève pour le moment à ${totalAides}€/m<sup>2</sup></span>`;
    }
    else {
      document.querySelector("#elligibilite").querySelector(".secondaire").innerHTML = `<span style="text-decoration:underline;">Vous pouvez bénéficier des aides suivantes</span> :<br><ul><li>${resultat.aides}€ pour vos travaux</li><li>${resultat.ceeAides}€ supplémentaires avec la prime CEE</li></ul><br><br><span class="total-aides">Le total de vos primes s'élève pour le moment à ${totalAides}€ </span>`;
    }
  }