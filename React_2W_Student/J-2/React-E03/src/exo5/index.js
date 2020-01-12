/* eslint-disable react/prop-types */
/*
 * Exo 5 : Props corn time!
 *
 * Wouhouh! C'est la folie aujourd'hui :)
 * On ne va pas s'arrêter en si bon chemin, découvrons les props.
 *
 * 1) Créer un composant <HelloWorld />, qui renvoie le JSX suivant :
 *      <div id="hello-world">
 *        <h1>Ce HTML a été généré par *lang*</h1>
 *        <h2>Et affiché avec *method*</h2>
 *      </div>
 *
 *      *lang* et *method* étant les deux propriétés d'un objet passé en argument.
 *
 *    Par exemple : <HelloWorld lang="Titi" method="Gros minet" /> doit renvoyer :
 *      <div id="hello-world">
 *        <h1>Ce HTML a été généré par Titi</h1>
 *        <h2>Et affiché avec Gros minet</h2>
 *      </div>
 *
 * 2) Exécuter au chargement du DOM la fonction render() de ReactDOM
 *    pour afficher <HelloWorld lang="React" method="ReactDOM" /> dans la div #root
 */

/*
 * Import
 */
import test from './test';

// import des lib react
import React from 'react';
import ReactDOM from 'react-dom';
import {render} from 'react-dom';
// var Props;
const HelloWorld = (props) => (<div id="hello-world">
        <h1>Ce HTML a été généré par {props.lang}</h1>
        <h2>Et affiché avec {props.method}</h2>
    </div>)

var root = document.getElementById('root');

// Cas en important uniquement la méthode render
render(<HelloWorld lang="React" method="ReactDOM"/>,root)

// render(HelloWorld({lang:"React", method:"ReactDOM"}) ,root)

 // Cas en important l'ensemble de la librairie ReactDOM
// ReactDOM.render(<HelloWorld lang="React" method="ReactDOM"/>,root)


/*
 * Code
 */


/*
 * Tests
 */
test();
