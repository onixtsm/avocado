const { webpackConfig } = require('@rails/webpacker')
// const { merge } = require('webpack-merge')
const fs = require('fs')

fs.writeFile('webpack.js.json', JSON.stringify(webpackConfig, undefined, 2), (err) => {console.log(err)})

module.exports = webpackConfig
