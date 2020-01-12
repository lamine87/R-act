# Challenge *Do-It-Yourself* : créons notre propre Redux !

[Redux](https://redux.js.org/) est une super librairie, installable avec `npm`/`yarn`, mais rien de mieux pour commencer que d'implémenter notre propre Redux !

L'air de rien, on a en fait posé les bases pendant le cours, avec les fonctions `createStore` et `reducer`. Il faut maintenant raccorder ces concepts de *state management* et de *store* avec l'univers React.

## Création du projet

Partir de React-modele.

### Le *store*

Point de départ, la brique de *state management*.

=> Créer un dossier `src/store` comprenant :
- `createStore.js` : reprendre la fonction du parcours
- `reducer.js` : reprendre la fonction du parcours
- `index.js` : ici, créer un store pour l'application, puis l'exporter :

```js
import createStore from './createStore';
import reducer from './reducer';

const store = createStore(reducer);

export default store;
```

### Souscription unique

L'objectif est que n'importe quel composant React puisse s'inscrire auprès du `store` et être averti lorsque le `state` contenu à l'intérieur évolue. Un peu comme une *newsletter* !

=> Ajouter une méthode `subscribe()` à l'API publique de `createStore`. Cette méthode prend en paramètre une fonction, autrement dit un callback, qui devra être exécuté chaque fois que le `state` changera.

> On pourrait donc peut-être venir stocker ce callback dans une variable du `store`… :thinking: Puis au `dispatch`, juste après avoir modifié le `state`, on exécuterait le callback en question.

Exemple d'utilisation :

``` js
// Quelque part dans l'application React, dans un composant :
import store from 'src/store';

store.subscribe(() => {
  console.log('Le state a été modifié, je réagis !');
});
```

``` js
// Quelque part ailleurs dans l'application React :
import store from 'src/store';

store.dispatch({ type: 'SWITCH_ON' });
// En console :
// "Le state a été modifié, je réagis !"
```

### Souscriptions multiples

Ce serait chouette de pouvoir appeler la fonction `subscribe()` plusieurs fois, pour enregistrer plusieurs callbacks, fournis par un ou plusieurs composants React.

> La variable qui stocke actuellement *le* callback pourrait devenir un tableau… :thinking: On aurait un tableau vide au départ, et on `push`erait chaque nouveau callback dans la liste lors d'un `store.subscribe(callback)`. Enfin, au `dispatch`, on pourrait exécuter tous les callbacks mémorisés, grâce à une boucle.

```js
// Quelque part dans l'application React, dans un composant :
import store from 'src/store';

store.subscribe(() => {
  console.log('State has been updated');
});
```

``` js
// Quelque part dans l'application React, dans un autre composant :
import store from 'src/store';

store.subscribe(() => {
  console.log('I am interested in changes too!');
});
```

``` js
// Quelque part ailleurs dans l'application React :
store.dispatch({ type: 'SWITCH_ON' });
// En console (manifestement les composants React se sont mis à l'anglais) :
// "State has been updated"
// "I am interested in changes too!"
```

## Une application Reduxifiée : *Sondage*

L'architecture qu'on vient de poser est, fondamentalement, celle de Redux. Créons une application React bien réelle utilisant cette architecture de *state management*.

### Travail en statique

Créez l'UI suivante :

```
         5 votes

___________    ___________
| oui (3) |    | non (2) |
-----------    -----------
```

> Le composant `<App />` doit contenir un composant `<Counter />` et deux composants `<Button />`. On pourra rajouter une prop au composant Bouton pour déterminer le vote : `<Button name="oui" />`

On peut pour l'instant utiliser des **fausses données** pour réaliser le découpage en composant. Et ajouter un peu de styles si on le souhaite…

### Version dynamique

#### Récupération des données

Dans nos composants React, on peut désormais importer le `store`, et utiliser `.subscribe()` pour s'abonner aux changements du `state` :

```js
import store from '~/store';

class Button extends React.Component {
  componentDidMount() {
    store.subscribe(this.updateState);
  }

  // ... more code ...
}
```

À chaque évolution du state du store (!), dont on est désormais notifié, on peut synchroniser un état *local* du composant avec l'état *global* de l'application, dans le but de mettre jour le-dit composant. Pour ça, `setState` est très pratique, car ça déclenche automatiquement un refresh :

```js
import store from '~/store';

class Button extends React.Component {
  componentDidMount() {
    store.subscribe(this.updateState);
  }

  updateState = () => {
    const state = store.getState();
    // On se synchronise avec la sous-partie du state global qui nous intéresse :
    this.setState({ count: state.oui });
  }
}
```

> Une fois qu'on a fait la classe `Button`, on peut faire pareil pour `Counter` :smiley: Cette fois-ci, on va vouloir afficher le nombre *total* de votes, c'est-à-dire `state.oui + state.non`.

Pour tester l'ensemble sans encore se prendre la tête avec des interactions utilisateurs (clics sur les boutons), on pourra simplement venir changer l'`initialState` de notre reducer, pour voir si les quantités de votes sont bien répercutées par chacun de nos composants.

#### Modifier les données

Dans l'esprit Redux, quand un clic survient sur un bouton de vote, on doit déclencher une action avec `store.dispatch`, pour venir incrémenter le compteur correspondant au bouton. On peut utiliser une action de la sorte :

```js
// On définit une action :
const action = {
  type: 'VOTE',
  name: 'oui', // ou 'non', selon le bouton cliqué
};

// On la dispatche, à destination du store, qui délèguera au reducer :
store.dispatch(action);
```

Par exemple, si on veut dispatcher au clic :

```js
import store from 'src/store';

class Button extends React.Component {
  handleClick = () => {
    const action = {
      type: 'VOTE',
      name: 'oui',
    };
    store.dispatch(action);
  }

  render() {
    const { count } = this.state;
    return (
      <button className="button" onClick={this.handleClick}>
        oui ({count})
      </button>
    );
  }
}
```

Histoire de faire dans le générique, on pourrait remplacer `'oui'` par notre prop `name`… 
Si tout va bien, au clic, les compteurs s'incrémentent. Magique (ou pas) ! :dizzy:

### Bonus

* Créez des *action creators* (cf. l'exo 8 du parcours, et son test.js en particulier).
* Créez un bouton *Reset* dans le composant `<Counter />`, pour remettre tout à 0.
