---
layout: post
title:  Travaux de rénovation énergétique à Bitche et aux alentours
titre: Mentions légales
permalink: /travaux-sur-bitche
---
## La collectivité du Pays de Bitche
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
    {% assign display_reals = site.data.gallerie | where: 'display', true %}
    {% assign filtered_reals = display_reals | where: 'isolation', true %}
    {% for real in filtered_reals | limit: 8 %}
      <li class="item-grid realisation" onclick="closebox()" style="background-image: linear-gradient(0deg, rgba(2,0,36,0.3197872899159664) 0%, rgba(255,255,255,0) 100%),url(../assets/images/realisations/{{real.img}});" data-image="{{real.img}}" data-ville="{{real.ville}}" data-cp="{{real.CP}}">
        <img src="../assets/images/realisations/{{real.img}}" alt="travaux de rénovation de façade à {{real.ville}}" style="display: none;">
        <p><img src="../assets/images/icones/map-marker.png" width="10">{{real.ville}}, {{real.CP}}</p>
      </li>
    {% endfor %}
  </ul>
</section>