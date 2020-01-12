// Node import
const path = require('path');

// Plugins de traitement pour dist/
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

// Config pour le devServer
const host = 'localhost';
const port = 3000;

// Config de Webpack
module.exports = {
  // Passe le build par dèfaut en déeveloppement
  mode: 'development',
  // Expose le dossier src/ pour les imports
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src/'),
    },
  },
  // Points d'entrée pour le travail de Webpack
  entry: {
    app: [
      './src/test/index.js',
      './src/styles/reset.css',
      './src/styles/parcours.css',
      './src/styles/tests.css',
    ],
    exo1: ['./src/exo1/index.js','./src/exo1/test.js'],
    exo2: ['./src/exo2/index.js','./src/exo2/test.js'],
    exo3: ['./src/exo3/index.js','./src/exo3/test.js'],
    exo4: ['./src/exo4/index.js','./src/exo4/test.js'],
    exo5: ['./src/exo5/index.js','./src/exo5/test.js'],
    exo6: ['./src/exo6/index.js','./src/exo6/test.js'],
    exo7: ['./src/exo7/index.js','./src/exo7/test.js'],
    exo8: ['./src/exo8/index.js','./src/exo8/test.js'],
  },
  // Sortie
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'dist/'),
  },
  // Optimisation pour le build
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: false // passer à true pour JS source maps
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  // Modules
  module: {
    rules: [
      // JS
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          // babel avec une option de cache
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          },
        ],
      },
      // CSS
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
    ],
  },
  devServer: {
    overlay: true, // Overlay navigateur si erreurs de build
    stats: 'minimal', // Infos en console limitées
    progress: true, // progression du build en console
    inline: true, // Rechargement du navigateur en cas de changement
    open: true, // on ouvre le navigateur
    host: host,
    port: port,
    contentBase: path.join(__dirname, 'dist'),
  }
};
