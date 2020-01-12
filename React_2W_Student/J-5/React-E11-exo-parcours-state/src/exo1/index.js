/*
 * Exo1 - setState : version impure
 *
 * Hello, et bienvenue sur le projet O'house, un projet de domotique !
 * J'ai envie de créer une interface en React pour gérer l'allumage
 * de mes ampoules électriques.
 *
 * Mon souci : je ne m'en sors pas avec les setState de React.
 * Chaque fois que j'ai une info, il faut que je la file de composant
 * en composant, en passant de props en props. Saoûlant.
 *
 * Du coup, j'ai l'ambition de créer un système à part, un système
 * qui pourrait décrire l'état de mon ampoule, et faire évoluer ce state
 * lorsqu'on éxécute des actions (allumer, éteindre, renommer…).
 *
 * Vous me donnez un coup de main ? Ah cool, merci.
 * Bon, je vous ai pas dit, mais il y a 7 étapes.
 * 8 en fait, avec le bonus. Trop tard, vous avez dit oui :)
 *
 * Première étape : répliquer la méthode setState de React.
 * J'aimerais une fonction setState qui prenne en premier paramètre mon state
 * et la modification à faire en deuxième paramètre.
 *
 * Si on a :
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
 *
 *
 * Alors :
 *
 *   const newState = setState(state, payload);
 *
 *
 * Doit renvoyer :
 *
 *   {
 *     firstname: 'Lisa',
 *     lastname: 'Simpson',
 *     color: 'yellow',
 *     object: 'Saxophone',
 *   }
 *
 * On pourrait se servir de ça :
 * https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object/keys
 *
 * On récupère les propriétés qui doivent être modifiées (2e paremetre),
 * pour pouvoir modifier notre objet initial (1er paremetre), et il ne
 * suffira plus qu'à retourner l'objet modifié.
 */

/*
 * Import
 */
import test from './test';


/*
 * Code
 */
const setState = (state, payload) => {
  // On boucle sur payload


  // Pour chaque propriété de payload, on met la valeur dans state


  // Retourner le state modifié
};


/*
 * Tests
 */
test(setState);
