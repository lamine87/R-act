/**
 * Import
 */
import React from 'react';

/**
 * Local import
 */
// Composants
import Header from 'src/components/Header';
import Ingredients from 'src/components/Ingredients';
import Steps from 'src/components/Steps';

// Data
import data from 'src/data/recipe.js';

// Styles et assets
import './app.sass';

/**
 * Code
 */

const App = () => (
  <div id="app">
    <Header
      title={data.name}
      author={data.author}
      difficulty={data.difficulty}
      thumbnail={data.thumbnail}
    />
    <Ingredients ingredients={data.ingredients} />
    <Steps steps={data.instructions} />

  </div>
);

/**
 * Export
 */
export default App;
