/* eslint-disable import/prefer-default-export */
/*
 * Exo 2 : Un peu de templating
 *
 * Yeah, ça importe ! C'est pas beau ça ?
 * Personnellement, je trouve ça ouf, mais pensez ce que vous voulez :)
 *
 * Bref, maintenant qu'on sait compartimenter notre code, il est temps
 * de se mettre à construire des vues avec JS, n'est-ce pas ?
 *
 * Pour l'instant, on va faire ça en vanilla JS !
 *
 * 1) Créer une fonction helloWorld() qui renvoie la chaîne de caractère :
 *      <div id="hello-world">
 *        <h1>Ce HTML a été généré par JS</h1>
 *        <h2>Et affiché avec innerHTML</h2>
 *      </div>
 *
 * 2) Créer une fonction render() qui prend un argument une string HTML,
 *    et qui l'ajoute avec innerHTML à la div #root présent dans le document.
 *
 * 3) Executer au chargement du DOM la fonction render()
 *    avec en argument la fonction helloWorld()
 *
 * 4) Rajouter un fichier .css pour venir centrer le texte de #hello-world
 */

/*
 * Import
 */
import test from './test';


// fonction helloWorld qui renvoi le texte à afficher
function helloWorld() {
    return `<div id="hello-world">
              <h1>Ce HTML a été généré par JS</h1>
              <h2>Et affiché avec innerHTML</h2>
            </div>`
}
// recuperation de l'élément html qui a l'ID root
const root = document.getElementById("root");
// création de la fonction render qui va permettre d'inserer du texte dans la page HTML
function render(content) {
      root.innerHTML = content;
    }
// ecouteur sur le chargement du DOM qui va lancer la fonction render une fois que la page est bien chargé
document.addEventListener('DOMContentLoaded', render(helloWorld()));



export {render};

/*
 * Code
 */



// Ok mais si on avait accès jsx est traité comme une chaine de caractère non ?

/*
 * Code
 */


/*
 * Tests
 */
test();
