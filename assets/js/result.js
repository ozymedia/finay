let resultat  = JSON.parse(sessionStorage.resultSimulation);

if (residence === 'no') {
    //debugger;
    let totalAides = resultatsceeAides + 0;
    document.querySelector("").querySelector("").querySelector("").innerHTML = "Vous n'êtes pas éligible à MaPrimeRénov'";
    document.querySelector("").querySelector("").querySelector("").innerText = "";
    if (travauxSelect.includes('isolation')) {
      document.querySelector("").querySelector("").querySelector("").innerHTML = `Mais vous bénéficiez de ${ceeAides}€/m<sup>2</sup> avec la prime CEE<br><span class="total-aides">Le total des primes est de ${totalAides}€/m<sup>2</sup></span>`;
    }
    else {
      document.querySelector("").querySelector("").querySelector("").innerHTML = `Mais vous bénéficiez de ${ceeAides}€ avec la prime CEE<br><span class="total-aides">Le total des primes est de ${totalAides}€</span>`;
    }

    pictoPrime.src = `${window.location.origin}/assets/images/icones/pictos-entreprise/prime-neutre.png`;

  }
  else {
    pictoPrime.src = `${window.location.origin}/assets/images/icones/pictos-entreprise/prime-${color}.png`;
    color = color.replace(/^\w/, (c) => c.toUpperCase());
    //alert(`Vous êtes éligible à <span class=${color}>MaPrimeRénov ${color}</span>`);
    //alert(`Vous avez droit à ${aides}€/m<sup>2</sup> avec MaPrimeRénov'<br> XX€/m<sup>2</sup> avec la prime CEE<br>Le total des primes est de XX€/m<sup>2</sup>`);
    document.querySelector("").querySelector("").querySelector("").innerHTML = `Vous êtes éligible à <span class=${color}>MaPrimeRénov ${color}</span>`;
    if (travauxSelect.includes('isolation')) {
      document.querySelector("").querySelector("").querySelector("").innerHTML = `<span style="text-decoration:underline;">Vous avez droit à</span> :<br>- ${aides}€/m<sup>2</sup> avec MaPrimeRénov'<br>- ${ceeAides}€/m<sup>2</sup> avec la prime CEE<br><span class="total-aides">Le total des primes est de ${totalAides}€/m<sup>2</sup></span>`;
    }
    else {
      document.querySelector("").querySelector("").querySelector("").innerHTML = `<span style="text-decoration:underline;">Vous avez droit à</span> :<br>- ${aides}€ pour vos travaux<br>- ${ceeAides}€ supplémentaires avec la prime CEE<br><span class="total-aides">Le total des primes est de ${totalAides}€ </span>`;
    }
  }