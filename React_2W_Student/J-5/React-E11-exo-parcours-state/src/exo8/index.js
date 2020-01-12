/*
 * Exo Bonus : Action creator
 *
 * C'est beau.
 * Mais ça peut toujours être encore plus beau :)
 *
 * Avec notre joli petit système, c'est cool, on peut modifier notre state
 * en dispatchant des actions plutôt qu'en modifiant directement des objets.
 * Mais chaque fois que je vais vouloir dispatcher une action, je vais
 * devoir me rappeler du type et du nom de la propriété à utiliser…
 *
 * Un bon développeur est un développeur fainéant :)
 * On va donc se développer des `action creator`, des fonctions qui génèrent
 * des actions. De cette façon, on aura plus rien à se souvenir, il nous
 * suffira d'importer un action creator et de l'utiliser !
 *
 * Créer une fonction `changeName` qui permet de modifier le nom d'une ampoule.
 * A utiliser de la façon suivante :
 *   store.dispatch(changeName('Cuisine'));
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

const changeName = (name) => {

};


/*
 * Tests
 */
test(createStore, reducer, changeName);
