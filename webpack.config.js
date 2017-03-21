const webpack           = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

var config = {
  context: __dirname + '/src',

  entry: {
    app: './app.js'
  },

  output: {
    path: __dirname + '/dist',
    filename: '[name].bundle.js',
  },

  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env']
        }
      }
    },
    {
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'sass-loader'],
        publicPath: '.'
      })
    },
    {
      test: /\.(jpg|gif|png|svg)$/,
      use: {
        loader: "file-loader",
        query: {
          name: "/images/[name].[ext]",
          publicPath: '.'
        }
      }
    }]
  },

  plugins: [
    new ExtractTextPlugin("styles.css")
  ]

};

module.exports = config;
