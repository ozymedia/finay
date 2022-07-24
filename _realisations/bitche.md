---
layout: post
title:  Travaux de rénovation énergétique à Bitche et aux alentours
titre: Mentions légales
permalink: /travaux-sur-bitche
---
Notre entreprise intervient sur une partie de la Moselle, incluant la communauté des communes du Pays de Bitche. 
Notre entreprise propose d'intervenir sur divers travaux de rénovation énergétique avec l'isolation extérieure de vos murs, des travaux de chauffage avec le changement de votre système actuel pour un système de chauffage plus performant, moins coûteux et plus respectueux de l'environnement.
## Les villes du Pays de Bitche où nous intervenons
- Bitche
- Baerenthal
- Schorbach
- Philippsbourg
- Reyersviller
- Eguelshardt
- Haspelscheidt
- Sturzelbronn
- Hanviller
- Bousseviller
- Roppeviller
- Liederschiedt

### Nos derniers travaux d'isolation par l'extérieur
<section class="inside">
  <ul class="grid four">
  	{% assign reals = site.data.gallerie | where:"CP","57230" %}
    {% assign display_reals = reals | where: 'display', true %}
    {% assign filtered_reals = display_reals | where: 'isolation', true %}
    {% for real in filtered_reals | limit: 8 %}
      <li class="item-grid realisation" onclick="closebox()" style="background-image: linear-gradient(0deg, rgba(2,0,36,0.3197872899159664) 0%, rgba(255,255,255,0) 100%),url(../assets/images/realisations/{{real.img}});" data-image="{{real.img}}" data-ville="{{real.ville}}" data-cp="{{real.CP}}">
        <img src="../assets/images/realisations/{{real.img}}" alt="travaux de rénovation de façade à {{real.ville}}" style="display: none;">
        <p><img src="../assets/images/icones/map-marker.png" width="10">{{real.ville}}, {{real.CP}}</p>
      </li>
    {% endfor %}
  </ul>
</section>
### Nos derniers travaux de rénovation de façade
<section class="inside">
  <ul class="grid four">
  	{% assign reals = site.data.gallerie | where:"CP","57230" %}
    {% assign display_reals = reals | where: 'display', true %}
    {% assign filtered_reals = display_reals | where: 'ravalement', true %}
    {% for real in filtered_reals | limit: 8 %}
      <li class="item-grid realisation" onclick="closebox()" style="background-image: linear-gradient(0deg, rgba(2,0,36,0.3197872899159664) 0%, rgba(255,255,255,0) 100%),url(../assets/images/realisations/{{real.img}});" data-image="{{real.img}}" data-ville="{{real.ville}}" data-cp="{{real.CP}}">
        <img src="../assets/images/realisations/{{real.img}}" alt="travaux de rénovation de façade à {{real.ville}}" style="display: none;">
        <p><img src="../assets/images/icones/map-marker.png" width="10">{{real.ville}}, {{real.CP}}</p>
      </li>
    {% endfor %}
  </ul>
</section>