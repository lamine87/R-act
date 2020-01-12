/*
 * Exo2 - setState : version pure
 *
 * Alors, c'est pas mal ce qu'on a fait, mais ça serait encore mieux
 * si la fonction était pure. Car pour l'instant, ça modifie mon objet initial.
 * Si si, regardez :
 *
 *   const state = {
 *     firstname: 'Bart',
 *     lastname: 'Simpson',
 *     color: 'yellow',
 *     object: 'Slingshot',
 *   };
 *   const payload = {
 *     firstname: 'Lisa',
 *     object: 'Saxophone',
 *   };
 *   const newState = setState(state, payload);
 *
 * Si vous faites :
 *   console.log(state);
 *
 * Ça affiche =>
 *   {
 *     firstname: 'Lisa',
 *     lastname: 'Simpson',
 *     color: 'yellow',
 *     object: 'Saxophone',
 *   }
 *
 * Paraitrait qu'on peut utiliser ce machin pour faire une copie :
 * https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object/assign
 *
 * En utilisant ça, vous devriez pouvoir créer un nouvel objet sans modifier
 * l'ancien. Attention, je teste !
 */

/*
 * Import
 */
import test from './test';


/*
 * Code
 */
const setState = (state, payload) => {

};


/*
 * Tests
 */
test(setState);
