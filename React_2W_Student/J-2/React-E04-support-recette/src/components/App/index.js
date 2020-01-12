// Importer les librairies externes
import React from 'react';
// Importer les composants
import Header from '../Header/index';
import Ingredients from '../Ingredients/index';
import Steps from '../Steps/index';
import './app.css'

//// Créer mon composant

// const App = function(){
//     return (<div>
//         <p>Hello Word</p>
//     </div>)
// }



// Version avec fonction fléchée
  var App = () => 
   (<div>
        <Header/>
        <Ingredients/>
        <Steps/>
    </div>)

export default App;