const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const postcssImport = require('postcss-import')
const cssnext = require('postcss-cssnext')

module.exports = {
  entry: path.join(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
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
    port: 1337
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      template: require('html-webpack-template'),
      appMountId: 'app'
    })
  ]
}
