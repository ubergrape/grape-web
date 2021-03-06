const webpackConfig = require('./webpack.config')

module.exports = config => {
  config.set({
    browsers: ['Chrome'],
    singleRun: process.env.NODE_ENV !== 'test',
    files: ['tests.webpack.js'],
    frameworks: ['mocha'],
    preprocessors: {
      'tests.webpack.js': ['webpack', 'sourcemap'],
    },
    reporters: ['mocha'],
    webpack: Object.assign(webpackConfig, {
      devtool: 'inline-source-map',
    }),
    webpackServer: {
      noInfo: true,
    },
    webpackMiddleware: {
      noInfo: true,
    },
  })
}
