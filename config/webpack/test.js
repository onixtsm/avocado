process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const TerserPlugin = require('terser-webpack-plugin')

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
