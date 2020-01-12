/*
 * Exo 4 : React !
 *
 * OK, on gère. Maintenant, faisons-le avec React :D !!!
 *
 * 1) Installer les packages react et react-dom
 *
 * 2) Créer un composant <HelloWorld />, en créant une fonction HelloWorld()
 *    qui renvoie le JSX suivant :
 *      <div id="hello-world">
 *        <h1>Ce HTML a été généré par React</h1>
 *        <h2>Et affiché avec ReactDOM</h2>
 *      </div>
 *
 * 3) Importer la fonction render du module 'react-dom'
 *
 * 4) Exécuter au chargement du DOM la fonction render()
 *    pour afficher <HelloWorld /> dans la div #root
 */

/*
 * Npm import
 */

/*
 * Local import
 */

/* equivalent à : import ReactDOM from 'react-dom'; */




import test from './test';
// import des lib react
import React from 'react';
import ReactDOM from 'react-dom';
import {render} from 'react-dom';

///Version Classique
// function HelloWorld() {
//     return (<div id="hello-world">
//         <h1>Ce HTML a été généré par JS</h1>
//         <h2>Et affiché avec innerHTML</h2>
//     </div>)
// }
// var root = document.getElementById('root');
// render(HelloWorld(),root)



//Version avec les notations reacts
const HelloWorld= () => (<div id="hello-world">
        <h1>Ce HTML a été généré par React</h1>
        <h2>Et affiché avec ReactDOM</h2>
    </div>)
var root = document.getElementById('root');


// Cas en important uniquement la méthode render
render(<HelloWorld/>,root)


 // Cas en important l'ensemble de la librairie ReactDOM
ReactDOM.render(<HelloWorld/>,root)



/*
 * Tests
 */
test();
