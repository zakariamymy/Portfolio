//main.js
// Initialisation de AOS (Animate On Scroll)
AOS.init();

AOS.init({

  
  offset: 120, // décalage (en pixels) par rapport au point de déclenchement d'origine
  delay: 0, // valeurs de 0 à 3000, par incréments de 50ms
  duration: 700, // valeurs de 0 à 3000, par incréments de 50ms
  easing: 'ease', // lissage par défaut pour les animations AOS
  once: false, // si l'animation ne doit se produire qu'une seule fois - lors du défilement vers le bas
  mirror: false, // si les éléments doivent également être animés lorsqu'ils défilent à l'extérieur de la vue
  anchorPlacement: 'top-bottom', // définit quelle position de l'élément par rapport à la fenêtre doit déclencher l'animation

});
