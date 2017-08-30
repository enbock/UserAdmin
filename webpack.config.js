const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js'
  },
  module: {
    rules: [
      {
        test: /\.js/,
        use: [
          {loader: 'babel-loader'},
          {loader: 'eslint-loader'}
        ]
      },
      {
        test: /\.less$/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'},
          {loader: 'less-loader'}
        ]
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      config: path.resolve(__dirname, 'config/dev')
    }
  },
  plugins: [
    new CopyWebpackPlugin([
        // {output}/file.txt
        {from: __dirname + '/src/*.html', to: '[name].[ext]'},
      ]
    )
  ],
  output: {
    filename: '[name].js',
    path: __dirname + '/build'
  },
  devServer: {
    contentBase: path.join(__dirname, "/build"),
    compress: true,
    port: 8080,
    host: "0.0.0.0"
  }
};
