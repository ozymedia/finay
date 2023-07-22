let resultat  = JSON.parse(sessionStorage.resultSimulation);

if (resultat.residence === 'no') {
    //debugger;
    let totalAides = resultat.ceeAides + 0;
    document.querySelector("#resultat").querySelector(".primaire").innerHTML = "Vous n'êtes pas éligible à MaPrimeRénov'";
    //document.querySelector("#resultat").innerText = "";
    if (resultat.travaux.includes('isolation')) {
      document.querySelector("#resultat").querySelector(".secondaire").innerHTML = `Mais vous bénéficiez de ${resultat.ceeAides}€/m<sup>2</sup> avec la prime CEE<br><span class="total-aides">Le total des primes est de ${totalAides}€/m<sup>2</sup></span>`;
    }
    else {
      document.querySelector("#resultat").querySelector(".secondaire").innerHTML = `Mais vous bénéficiez de ${resultat.ceeAides}€ avec la prime CEE<br><span class="total-aides">Le total des primes est de ${totalAides}€</span>`;
    }

    //pictoPrime.src = `${window.location.origin}/assets/images/icones/pictos-entreprise/prime-neutre.png`;

  }
  else {
    let totalAides = resultat.totalAides;
   // pictoPrime.src = `${window.location.origin}/assets/images/icones/pictos-entreprise/prime-${color}.png`;
    //color = color.replace(/^\w/, (c) => c.toUpperCase());
    //alert(`Vous êtes éligible à <span class=${color}>MaPrimeRénov ${color}</span>`);
    //alert(`Vous avez droit à ${aides}€/m<sup>2</sup> avec MaPrimeRénov'<br> XX€/m<sup>2</sup> avec la prime CEE<br>Le total des primes est de XX€/m<sup>2</sup>`);
    document.querySelector("#resultat").querySelector(".primaire").innerHTML = `Vous êtes éligible à <span class="">MaPrimeRénov</span>`;
    if (resultat.travaux.includes('isolation')) {
      document.querySelector("#resultat").querySelector(".secondaire").innerHTML = `<span style="text-decoration:underline;">Vous avez droit à</span> :<br>- ${resultat.aides}€/m<sup>2</sup> avec MaPrimeRénov'<br>- ${resultat.ceeAides}€/m<sup>2</sup> avec la prime CEE<br><span class="total-aides">Le total des primes est de ${totalAides}€/m<sup>2</sup></span>`;
    }
    else {
      document.querySelector("#resultat").querySelector(".secondaire").innerHTML = `<span style="text-decoration:underline;">Vous avez droit à</span> :<br>- ${resultat.aides}€ pour vos travaux<br>- ${resultat.ceeAides}€ supplémentaires avec la prime CEE<br><span class="total-aides">Le total des primes est de ${totalAides}€ </span>`;
    }
  }