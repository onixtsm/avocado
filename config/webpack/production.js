const TerserPlugin = require('terser-webpack-plugin')

process.env.NODE_ENV = process.env.NODE_ENV || 'production'

const webpackConfig = require('./base')

webpackConfig.optimization =
{
    minimize: true,
    minimizer: [
        new TerserPlugin({
            terserOptions: {
                mangle: true,
                compress: true
            }
        })
    ]



}

module.exports = webpackConfig
