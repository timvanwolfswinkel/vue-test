'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')
const apiEnv = require('./api.env')

module.exports = merge(prodEnv, apiEnv, {
  NODE_ENV: '"development"'
})
