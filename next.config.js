const withCss = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')

const config = {
  webpack(config) {
    // Load fonts correctly by outputing to fonts dir and set the public path
    // relative to the static dir.
    config.module.rules.push({
      test: /\.(eot|ttf|woff|woff2)$/,
      use: {
        loader: 'file-loader',
        options: {
          name: '[name]-[hash].[ext]',
          outputPath: './static/fonts',
          publicPath: '../fonts'
        }
      }
    })

    config.module.rules.push({
      test: /\.(png|jpg|gif|svg)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000
        }
      }
    })

    return config
  }
}

module.exports = withCss(withSass(config))
