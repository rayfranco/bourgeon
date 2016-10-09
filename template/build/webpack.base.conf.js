var path = require('path')
var config = require('../config')
var utils = require('./utils')
var projectRoot = path.resolve(__dirname, '../')

module.exports = {
  entry: {
    app: './src/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath,
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.vue'],
    fallback: [path.join(__dirname, '../node_modules')],
    alias: {
      {{#if_eq build "standalone"}}
      'vue': 'vue/dist/vue',
      {{/if_eq}}
      {{#if_eq build "runtime"}}
      'vue': 'vue/dist/vue.common.js',
      {{/if_eq}}
      'bourgeon': path.resolve(__dirname, '../src/bourgeon'),
      {{#if svg}}
      'utils': path.resolve(__dirname, './utils'),
      {{/if}}
      {{#if i18n}}
      'locales': path.resolve(__dirname, '../src/locales'),
      {{/if}}
      'src': path.resolve(__dirname, '../src'),
      'assets': path.resolve(__dirname, '../src/assets'),
      'components': path.resolve(__dirname, '../src/components')
    }
  },
  resolveLoader: {
    fallback: [path.join(__dirname, '../node_modules')]
  },
  module: {
    {{#lint}}
    preLoaders: [
      {
        test: /\.vue$/,
        loader: 'eslint',
        include: projectRoot,
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loader: 'eslint',
        include: projectRoot,
        exclude: /node_modules/
      }
    ],
    {{/lint}}
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        include: projectRoot,
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {{#if i18n}}
      {
        test: /\.yml$/,
        loaders: ['json', 'yaml']
      },
      {{/if}}
      {{#if svg}}
      {
        test: /\.svg$/,
        loader: 'svg-sprite?' + JSON.stringify({
          name: '[name]_[hash]',
          spriteModule: 'utils/sprite',
          prefixize: true
        })
      },
      {{/if}}
      {
        {{#if svg}}
        test: /\.(png|jpe?g|gif)(\?.*)?$/,
        {{else}}
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        {{/if}}
        loader: 'url',
        query: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  {{#lint}}
  eslint: {
    formatter: require('eslint-friendly-formatter')
  },
  {{/lint}}
  vue: {
    loaders: utils.cssLoaders({
      paths: 'node_modules'
    }),
    postcss: [
      require('autoprefixer')({
        browsers: ['last 2 versions']
      })
    ]
  },
  stylus: {
    use: [
      require('jeet')(),
      require('rupture')()
    ],
    import: [
      path.resolve(__dirname, '../src/styles/index.styl')
    ]
  }
}
