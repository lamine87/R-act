/*
 * Exo1 : For Hitch
 *
 * Hitch a besoin de ses outils pour séduire, même en HTML.
 * Il vous donne un array et il aimerait qu'avec cela, vous construisiez une
 * liste de <li>, puis que vous l'ajoutiez dans #result.
 *
 * Notions :
 * - DOM : document.getElementById / document.createElement / appendChild
 * - JS : forEach (ES5)
 * - paradigmes : programmation impérative & fonctionnelle
 */

var items = ['Sunglasses', 'Suit', 'Business card', 'Jet ski'];
   // version fonction fléchée
// items.forEach((textPourLi)=>{
//     var li = document.createElement('li');
//     li.textContent = textPourLi;
//     target.appendChild(li);
//   });
  
  // equivalent avec le for 

  for (var i = 0; i < items.length; i++) {
    var li = document.createElement('li');
    li.textContent = items[i];
    target.appendChild(li);
  }