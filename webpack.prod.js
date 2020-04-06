const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  //entry
  // tells webpack which module use to start building DEPENDENCY GRAPH
  // webpack will figure out on which other modules entry module depends
  entry: "./src/client/index.js",

  // output 
  // default is ./dist/main.js
  // other assets (output) also in ./dist directory - 
  // probably it can bundle css same as css and put to ./dist


  // loaders
  // out of box webpck works with js and json
  // for other file types (css, scss, images etc) it needs loaders 
  // loader have 2 parts: 1 test (to match files usualy by extension with regex)
  //  2. use - which loader should be applied when file will be matched
  // loader takes file, processess and return on output
  module: {
    rules: [
      { test: "/.js$/", exclude: /node_modules/, loader: "babel-loader" },
    ],
  },
  plugins: [new HtmlWebpackPlugin({
    template: "./src/client/views/index.html",
    filename:"./index.html"
  })]

  // plugin
  // other operations like adding assets references to html document
  
  // loader vs plugin
  // scss => css LOADER
  // inject env variables to some files PLUGIN
};


// module.exports = {
//   entry: './path/to/my/entry/file.js',
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'my-first-webpack.bundle.js'
//   }
// };
