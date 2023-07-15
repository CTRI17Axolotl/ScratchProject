// require in needed methods
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// build module exports

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: '/index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif)$/i, //for picture loading
        loader: 'file-loader',
      },
      {
        test: /\.css$/, // for style/css loading
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devServer: {
    host: '127.0.0.1', 
    port: 8080, //Defines the port number on which the development server will run. 
    // static: { //Configures the static file serving behavior of the development server.
    //   directory: //Specifies the directory from which static files will be served.
    //      path.resolve(__dirname, 'dist'),
    //   publicPath: '/', //Sets the public URL path where the bundled files will be served from. 
    // },
    // Once we build out file structure, look into proxy server
  },
};