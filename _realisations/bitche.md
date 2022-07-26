---
layout: post
title: Travaux d'isolation par l'extérieur & rénovation à Bitche et aux alentours
titre: Travaux d'isolation par l'extérieur & rénovation à Bitche et aux alentours
permalink: /travaux-energetique-sur-bitche
---
Notre entreprise spécialisée dans l'[isolation extérieure intervient en Moselle](/isolation-extérieure/), incluant la communauté des communes du <strong>Pays de Bitche (57230)</strong>. 
Nos artisans proposent comme services divers travaux de rénovation énergétique avec l'<strong>isolation extérieure de vos murs</strong>, des travaux de chauffage avec le changement de votre système actuel pour un système de chauffage plus performant, moins coûteux et plus respectueux de l'environnement. Nous intervenons également dans les travaux de rénovation au niveau esthétique avec le ravalement de façade qui vient compléter des <strong>travaux d'isolation par l'extérieur.</strong>
## Les villes du Pays de Bitche où nous intervenons

{:.list-columns}
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
### Nos derniers travaux de ravalement de façade
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
## Nos réalisations dans le reste de la Lorraine
[Nos travaux dans le canton de Sarreguemines](/travaux-energetique-sur-sarreguemines)
## Nous contacter
{:.left}
{% include form.html %}