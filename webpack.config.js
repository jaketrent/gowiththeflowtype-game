const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const postcssImport = require('postcss-import')
const cssnext = require('postcss-cssnext')

module.exports = {
  devtool: 'cheap-eval-source-map',
  entry: path.join(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    publicPath: '/static/'
  },
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader', include: /src/ },
      {
        test: /\.css$/,
        include: /src/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[local]---[hash:base64:5]'
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [postcssImport, cssnext]
            }
          }
        ]
      }
    ]
  },
  devServer: {
    port: 1337,
    historyApiFallback: true
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: path.join(__dirname, 'static'),
        to: path.join(__dirname, 'dist', 'static')
      }
    ]),
    new HtmlWebpackPlugin({
      inject: false,
      template: require('html-webpack-template'),
      appMountId: 'app',
      title: 'Go with the Flow Game'
    })
  ]
}
