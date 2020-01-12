/*
 * Exo 6 : Dispatch action
 *
 * Wouaaaaah, ça pète cette histoire de reducer !
 * Reste plus qu'à incorporer ce machin dans notre store :)
 *
 * 1. Reprendre la fonction `createStore` de l'exo4
 *
 * 2. Reprendre la fonction `reducer` de l'exo5
 *
 * 3. Modifier la fonction `createStore` pour qu'elle prenne en paramètre
 *    un reducer
 *
 * 4. Modifier la fonction `createStore` pour initialiser le state à la
 *    valeur par défaut du reducer. C'est-à-dire, la fonction reducer
 *    appelée sans argument.
 *
 * 5. Modifier la fonction `createStore` pour rajouter dans l'objet retourné
 *    une fonction `dispatch`, qui prend en paramètre une `action`, et
 *    modifie le state de notre store en utilisant son reducer.
 *
 *
 * Ex:
 *   const store = createStore(reducer);
 *   store.getState(); // Renvoie {}
 *   store.dispatch('SWITCH_ON');
 *   store.getState(); // Renvoie { light: true }
 */

/*
 * Import
 */
import test from './test';


/*
 * Code
 */
const createStore = (reducer) => {

};

const reducer = (state, action) => {

};


/*
 * Tests
 */
test(createStore, reducer);
