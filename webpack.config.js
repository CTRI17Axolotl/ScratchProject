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
    new webpack.DefinePlugin( {
      "process.env": dotenv.parsed
    })
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
        test: /\.s?css$/, // for style/css loading
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  devServer: {
    host: '127.0.0.1', 
    port: 8080, //Defines the port number on which the development server will run. 
    static: {
      directory: path.resolve(__dirname, '/dist')
    },
    proxy: {
      publicPath: '/build',
      '/users/*': 'http://localhost:3000'
    //   '/': {
    //     target: 'http://localhost:8080',
    //     secure: false,
    //   }
    }
    // static: { //Configures the static file serving behavior of the development server.
    //   directory: //Specifies the directory from which static files will be served.
    //      path.resolve(__dirname, 'dist'),
    //   publicPath: '/', //Sets the public URL path where the bundled files will be served from.
    // },
    // Once we build out file structure, look into proxy server
  },
};
