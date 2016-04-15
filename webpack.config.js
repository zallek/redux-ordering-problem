var path = require('path');
var webpack = require('webpack');

var appPath = path.resolve(__dirname, './src');
var npmPath = path.resolve(__dirname, './node_modules');

var config = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
    'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    './src/views/main.js',
  ],
  output: {
    filename: 'bundle.js'
  },
  devServer: {
    inline: true,
    port: 3000,
    // serve index.html in case of 404, which allows pushState() to work
    // see: http://jaketrent.com/post/pushstate-webpack-dev-server/
    historyApiFallback: {
      rewrites: [
        { from: /.*/, to: '/index.html' }
      ],
    }
  },
  resolve: {
    extensions: ['', '.js'],
    root: [appPath, npmPath],
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loaders: ['eslint-loader'],
        include: [appPath],
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel']
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        API_ROOT: JSON.stringify(process.env.API_ROOT || "")
      }
    })
  ]
}

module.exports = config;
