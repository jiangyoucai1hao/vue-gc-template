'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',

  // GATEWAY_ROOT:'"http://192.168.0.95:9090"', //通用网关地址
  BASE_ROOT_URL: '"http://localhost:8180"', // 后台项目地址
  BASE_GROUP:'""', //应用group
  BASE_VERSION:'""', //应用的version
  APP_ID:'"demo01"',//本系统标识ID
})
