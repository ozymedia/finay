---
layout: page
titre: Travaux de toiture & Zinguerie
title: Travaux de toiture et zinguerie | Finay
permalink: /toiture-zinguerie/
---
Les toitures subissent eux aussi les effets du temps. Les mousses, algues, lichens fixent l'humidité et rendent poreux les matériaux.

Dans le cadre de ces compétences, la société Finay vous propose également la restauration de vos toitures et zingueries selon différentes méthodes :



Nettoyage des tuiles
Traitement par un produit anti-mousse et  hydrofuge de vos tuiles
Coloration par une peinture hydrofuge de vos tuiles
Remplacement des tuiles
Traitement de la zinguerie
Pour en savoir plus, nous vous invitons à nous contacter afin de vous proposer une étude gratuite.
<h2 class="left">Nos dernières réalisations</h2>
<section class="inside">
  <ul class="grid four">
    {% assign display_reals = site.data.gallerie | where: 'display', true %}
    {% assign filtered_reals = display_reals | where: 'toiture', true %}
    {% for real in filtered_reals | limit: 8 %}
      <li class="item-grid realisation" onclick="closebox()" style="background-image: linear-gradient(0deg, rgba(2,0,36,0.3197872899159664) 0%, rgba(255,255,255,0) 100%),url(../assets/images/realisations/{{real.img}});" data-image="{{real.img}}" data-ville="{{real.ville}}" data-cp="{{real.CP}}">
        <img src="../assets/images/realisations/{{real.img}}" alt="travaux de rénovation de façade à {{real.ville}}" style="display: none;">
        <p><img src="../assets/images/icones/map-marker.png" width="10">{{real.ville}}, {{real.CP}}</p>
      </li>
    {% endfor %}
  </ul>
</section>
<h2 class="left">Nous contacter</h2>
{% include form.html %}
