const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const paths = {
  BUILD: path.resolve(__dirname, 'build'),
  SRC: path.resolve(__dirname, 'app'),
}

module.exports = {
  devtool: 'inline-cheap-module-source-map',
  entry: path.join(paths.SRC, 'index.jsx'),
  output: {
    path: paths.BUILD,
    filename: 'app.bundle.js',
  },
  devServer: {
    contentBase: paths.SRC,
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(paths.SRC, 'index.html'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: true,
              localIdentName: '[name]__[local]--[hash:base64:5]',
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [path.resolve(__dirname, 'app'), 'node_modules'],
  }
}
