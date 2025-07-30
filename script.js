const trashtalks = [
  "T’es pas moche, t’es une épreuve de patience pour les yeux.",
  "Même Google ne veut pas te trouver.",
  "T'as pas de flow, t’as un bug vestimentaire.",
  "T'es le genre de déception qu'on garde en mode avion.",
  "T’es la raison pour laquelle certaines personnes détestent l’humanité.",
  "Même l'ombre de ton ex t'évite.",
  "T’as tellement peu d’importance que même ta montre t’ignore.",
  "Si le ridicule tuait, t'aurais pas tenu la semaine.",
  "T’es la preuve vivante que la wifi du cerveau peut bugger.",
  "Quand t’ouvres la bouche, les neurones fuient.",
  "On dirait que t’as été générée par une IA défectueuse.",
  "Même ta voix a envie de se taire.",
  "T’es pas toxique, t’es radioactif.",
  "T’as pas été ghostée, t’as été supprimée.",
  "T’as tellement besoin d’attention que même ta solitude en a marre de toi.",
  "Ton visage c’est comme une mise à jour : ça aggrave tout à chaque fois.",
  "Même les filtres Snapchat ont abandonné avec toi.",
  "T’as l’élégance d’un Wi-Fi public : accessible à tous, mais jamais sécurisé.",
  "T’es pas une queen, t’es une erreur de fabrication avec une couronne en plastique.",
  "Quand tu parles, même le silence se suicide.",
  "Ton feed Insta devrait être classé comme crime esthétique.",
  "T’as tellement de couches de make-up que même Photoshop démissionne.",
  "T’es pas ignorée, t’es supprimée.",
  "T’as la personnalité d’un panneau ‘travaux en cours’ sans fin.",
  "Quand tu ris, c’est comme une alarme d’incendie… sauf qu’on veut pas te sauver.",
  "T’es pas une influenceuse, t’es un virus social.",
  "Même la malchance a honte de toi.",
  "T’es comme une story ratée : on te skip en moins d'une seconde.",
  "T’as le QI d’une frite froide.",
  "T’es tellement fade que même l’eau plate te juge.",
  "T’as un style… de bug visuel.",
  "T’es pas bête, t’es limitée par ta version démo.",
  "T’as pas de haters, t’as des victimes.",
  "Même l’ennui s’endort quand tu parles.",
  "T’es un effet secondaire non désiré de la société.",
  "T’es la seule à pouvoir te perdre dans un miroir.",
  "T’as autant de charisme qu’un ongle cassé.",
  "T’es une erreur 404 dans la vie réelle.",
  "T’as pas de glow up, t’as juste changé de filtre.",
  "T’es pas dans un triangle amoureux, t’es dans un rond de solitude.",
  "T’es la version beta de la stupidité.",
  "Quand t’essaies d’être sexy, même la lumière fuit.",
  "T’as un futur… en mode avion.",
  "T’es le genre de meuf que même le karma veut éviter.",
  "T’es pas une bad girl, t’es juste mauvaise dans tout.",
  "T’es la raison pour laquelle les gens activent le mode silencieux.",
  "T’as pas de concurrence parce que personne veut ton niveau.",
  "T’es une instabilité émotionnelle déguisée en selfie.",
  "Même les démons te laissent en vue.",
  "Ton attitude toxique pollue l’air ambiant.",
  "Ton cerveau, c’est un abonnement gratuit : aucun contenu premium.",
  "T’es l’erreur de calcul dans un monde de logique.",
  "Même ton reflet veut changer de propriétaire.",
  "Ton flow est comme ta crédibilité : inexistant.",
  "Ton existence, c’est un bug dans la matrice.",
  "Ton cerveau lag autant que ton style.",
  "T’as une énergie de message 'vu' jamais répondu.",
  "Même les miroirs se retournent quand tu passes.",
  "Ton humour est un appel au silence.",
  "T’as pas une sale attitude, t’as un sale logiciel."
];

const punchline = document.querySelector('.punchline');
const button = document.getElementById('generate');

button.addEventListener('click', () => {
  const random = Math.floor(Math.random() * trashtalks.length);
  punchline.textContent = trashtalks[random];
  punchline.classList.remove('animate-pulse');
  void punchline.offsetWidth; // force le redémarrage de l’animation
  punchline.classList.add('animate-pulse');
});
