/*
 * Exo 5 : Reducers
 *
 * Génial, on peut créer nos stores, et le state est en lecture seule !
 * Bon évidemment, il faut se rajouter un moyen pour le modifier.
 *
 * Plutôt que modifier le state en y accédant directement, on aimerait
 * utiliser une fonction `reducer` permettant d'éxecuter une `action`,
 * et qui va renvoyer un `state` modifié.
 *
 * Pourquoi ? De la même manière que notre `state` décrit l'état de
 * notre application, on va essayer de rester proche de la réalité
 * non pas en modifiant directement notre state, mais en lui passant
 * des actions qui correspondent à la réalité. Pour nos ampoules,
 * allumer ou éteindre par exemple.
 *
 * On se définit deux actions, représentées par des String :
 *   'SWITCH_ON' pour allumer la lumière
 *   'SWITCH_OFF' pour éteindre la lumière
 *
 * Concrètement, ces actions doivent avoir des conséquences sur le `state`.
 *   --> La lumière doit être représentée par une propriété `light`,
 *       un booléen qui est à `true` quand la lumière est allumée.
 *
 * Notre fonction `reducer` prend en paramètres le state et l'action.
 * Si ces paramètres ne sont pas définis, on peut leur donner comme valeur
 * par défault un objet vide pour le state, et une string vide pour l'action
 *
 * Si l'action ne correspond pas aux actions définies plus haut, alors l'état
 * de mon application ne doit pas changer. La fonction `reducer` doit donc
 * dans ce cas retourner le state non modifié.
 *
 * Exemples :
 *   reducer({}, 'SWITCH_ON')                   // Renvoie { light: true }
 *   reducer({ light: false }, 'SWITCH_ON')     // Renvoie { light: true }
 *   reducer({}, 'SWITCH_OFF')                  // Renvoie { light: false }
 *   reducer({}, 'DRINK_COKE')                  // Renvoie {}
 *   reducer({ otherProp: 12 }, '')             // Renvoie { otherProp: 12 }
 *   reducer({ otherProp: 12 }, 'SWITCH_ON')    // Renvoie { otherProp: 12, light: true }
 *   reducer({ otherProp: 12 }, 'SWITCH_OFF')   // Renvoie { otherProp: 12, light: false }
 *   reducer()                                  // Renvoie {}
 *
 *
 *
 * One more thing!™
 * Ah, j'ai toujours rêvé de dire ça… Mais en fait j'ai deux things à dire :
 *   --> Pour faire nos tests, on peut utiliser un `switch` plutôt que des `if` successifs.
 *       https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/switch
 *
 *   --> Notre fonction `reducer` doit être pure :)
 *       Elle ne doit pas modifier les paramètres qu'on lui passe.
 */

/*
 * Import
 */
import test from './test';


/*
 * Code
 */
const reducer = (state, action) => {

};


/*
 * Tests
 */
test(reducer);
