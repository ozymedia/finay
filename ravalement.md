---
layout: page
titre: Ravalement des façades
title: Entreprise de ravalement de façade en Alsace | Finay
description: Notre entreprise en ravalement de façade opère sur tout le territoire du Bas-Rhin et de la Moselle
permalink: /ravalement-de-façade/
---
Dans le domaine du bâtiment, le ravalement est la mise en état des façades d'un bien immobilier. On parle ici d'une opération qui a pour but de remettre les façades dans un état neuf.



Principe du ravalement : Il peut être effectué aussi bien sur les murs extérieurs que sur des dispositifs de fermeture ( portes, volets, fenêtres), ou de protection ( portail, balcons, etc...). Ce type de travail nécessite des étapes indispensables telles que le nettoyage, le décapage, la réparation et enfin l'embellissement. En résumé, le ravalement est une rénovation en profondeur destinée à redonner un aspect neuf, mais sans dénaturer le travail d'origine qui a pu souffrir des affres du temps.



Différentes méthodes : Selon l'état de votre bien immobilier, les matériaux utilisés pour la réalisation d'un ravalement de façade peuvent varier. En effet, les matériaux utilisés dans le neuf ne sont pas forcément les mêmes que ceux utilisés dans la rénovation. Cette règle s'applique également pour les matériaux, les produits utilisés dans le traitement , par exemple, du béton ne sont pas les mêmes que ceux utilisés pour de la brique.

Pour en savoir plus, nous vous invitons à nous contacter afin de vous proposer une étude gratuite.
{% include comparaison.html %}
<section class="inside">
  <ul class="grid four">
    {% assign display_reals = site.data.gallerie | where: 'display', true %}
    {% assign filtered_reals = display_reals | where: 'ravalement', true %}
    {% for real in filtered_reals | limit: 8 %}
      <li class="item-grid realisation" onclick="closebox()" style="background-image: linear-gradient(0deg, rgba(2,0,36,0.3197872899159664) 0%, rgba(255,255,255,0) 100%),url(../assets/images/realisations/{{real.img}});" data-image="{{real.img}}" data-ville="{{real.ville}}" data-cp="{{real.CP}}">
        <img src="../assets/images/realisations/{{real.img}}" alt="travaux de rénovation de façade à {{real.ville}}" style="display: none;">
        <p><img src="../assets/images/icones/map-marker.png" width="10">{{real.ville}}, {{real.CP}}</p>
      </li>
    {% endfor %}
  </ul>
</section>
{% include zones.html %}
<h2 class="left">Nous contacter</h2>
{% include form.html %}
