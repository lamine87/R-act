/*
 * Exo 4 : Create store
 *
 * Bon, là on peut pas faire mieux. Passons à la suite.
 * Rappelons que je veux me créer un système pour mes ampoules !
 * C'est bien beau de copier des objets, mais ça éclaire que dalle.
 *
 * J'aimerais une fonction qui peut me créer un store,
 * une espèce d'objet qui me permettrait d'aller récupérer
 * mon state, mais sans y avoir accès directement.
 *
 * Vous savez en PHP, ils utilisent la POO, avec leur private
 * ou protected. En JS aussi il y a de la POO, mais avec de la
 * bonne vieille PF (Prog. Fonctionnelle), on peut s'en sortir aussi.
 * Les closures, vous vous rappelez ?
 *
 * Créez une fonction `createStore`, qui renvoie un objet dans
 * lequel on trouve la fonction getState, permettant de récupérer
 * une copie du state. On doit initialiser ce state à un objet vide.
 *
 * Attention, il faut renvoyer une copie. Il ne faut pas pouvoir modifier
 * le state interne. Par exemple :
 *
 *   const store = createStore();
 *   const state = store.getState(); // state = {}
 *   state.coucou = 'hello'; // state = { coucou: 'hello' }
 *   store.getState() // Ne contient pas { coucou: 'hello' } mais bien {}
 */

/*
 * Import
 */
import test from './test';


/*
 * Code
 */
const createStore = () => {

};


/*
 * Tests
 */
test(createStore);
