/*
 * Exo 7 : Better actions
 *
 * Popopoooooo, stylé !
 *
 * Bon, si on veut cherche la petite bête, nos actions sont un peu limitées
 * pour l'instant. Allumer, éteindre… Mais si je veux renommer une ampoule,
 * comment je fais ? Bah oui, il y a pas mal d'ampoules chez moi, j'ai besoin
 * de les reconnaître…
 *
 * Plutôt qu'utiliser des strings, on va faire des objets pour décrire nos
 * actions. On va utiliser la propriété `type` pour stocker les strings qu'on
 * utilisait jusqu'ici, et on pourra rajouter d'autres propriétés pour ajouter
 * de l'information.
 *
 * 1. Modifier la fonction `reducer` pour accepter des actions en objets.
 *    L'action par défaut devient un objet vide.
 *
 * 2. Modifier la fonction `reducer` pour définir state initial comme suivant :
 *      { light: false, name: 'Light' }
 *
 * 3. Ajouter une action pour changer le nom de l'ampoule. A utiliser
 *    de cette façon :
 *      store.dispatch({ type: 'CHANGE_NAME', name: 'Cuisine' });
 *
 * 4. Ajouter une action pour réinitialiser l'ampoule, et donc revenir
 *    au state initial. A utiliser de cette façon :
 *      store.dispatch({ type: 'RESET' });
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
