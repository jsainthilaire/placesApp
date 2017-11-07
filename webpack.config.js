const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const paths = {
  BUILD: path.resolve(__dirname, 'build'),
  SRC: path.resolve(__dirname, 'app'),
}

module.exports = {
  entry: path.join(paths.SRC, 'index.jsx'),
  output: {
    path: paths.BUILD,
    filename: 'app.bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(path.SRC, 'index.html'),
    }),
  ],
}
