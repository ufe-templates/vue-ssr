const { resolve } = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const mode = process.env.NODE_ENV

module.exports = {
  devtool: mode === 'development' ? 'cheap-module-eval-source-map' : 'source-map',
  entry: {
    app: resolve(__dirname, '../src/client-entry.js')
  },
  output: {
    path: resolve(__dirname, '../dist')
  },
  resolve: {
    extensions: ['.js', '.vue', '.json']
  },
  module: {
    rules: [{
      test: /\.(js|vue)$/,
      enforce: 'pre',
      loader: 'eslint-loader',
      exclude: /node_modules/,
      options: {
        formatter: require('eslint-friendly-formatter')
      }
    },{
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        compilerOptions: {
          preserveWhitespace: false
        }
      }
    },{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    },{
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
        name: 'assets/img/[name].[hash:7].[ext]'
      }
    },
    {
      test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
        name: 'assets/media/[name].[hash:7].[ext]'
      }
    },
    {
      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
        name: 'assets/font/[name].[hash:7].[ext]'
      }
    }]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}
