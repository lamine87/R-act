/**
 * NPM import
 */
import '@babel/polyfill';
import React from 'react';
import { render } from 'react-dom';

/**
 * Local import
 */
import App from 'src/components/App/index';



render(<App />, document.getElementById('root'));
