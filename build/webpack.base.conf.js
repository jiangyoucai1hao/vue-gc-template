'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}



module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {
    app: './src/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  externals: {
    'vue': 'Vue',
    'vue-router': 'VueRouter',
    'mint-ui': 'MINT',
    'jquery': 'jQuery',
    'element-ui': 'ELEMENT',
  },

  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),

      // 模块路径配置
      '@common': resolve('src/module/common'),
      '@common_c': resolve('src/module/common/components'),
      '@common_cj': resolve('src/module/common/components_js'),
      '@common_cs': resolve('src/module/common/components_style'),
      '@common_p': resolve('src/module/common/pages'),
      '@common_pj': resolve('src/module/common/pages_js'),
      '@common_ps': resolve('src/module/common/pages_style'),

      '@home': resolve('src/module/home'),
      '@home_c': resolve('src/module/home/components'),
      '@home_cj': resolve('src/module/home/components_js'),
      '@home_cs': resolve('src/module/home/components_style'),
      '@home_p': resolve('src/module/home/pages'),
      '@home_pj': resolve('src/module/home/pages_js'),
      '@home_ps': resolve('src/module/home/pages_style'),

      '@main_p': resolve('src/module/main/pages'),
      '@main_pj': resolve('src/module/main/pages_js'),
      '@main_ps': resolve('src/module/main/pages_style'),


    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
}
