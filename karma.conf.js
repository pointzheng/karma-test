// Karma configuration
// Generated on Mon Oct 26 2020 10:52:06 GMT+0800 (China Standard Time)

const path = require("path");

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    plugins: [
      /*'karma-requirejs', */
      'karma-babel-preprocessor', 
      /*'karma-react-preprocessor', */
      'karma-coverage',
      'karma-chrome-launcher', 
      'karma-phantomjs-launcher', 
      'karma-jasmine', 
      'karma-enzyme-react-16', 
      'karma-webpack'
    ],


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', /*'requirejs', */'enzyme-react-16'],


    // list of files / patterns to load in the browser
    files: [
      // 'test/*.js',
      'test/*.js',
      // 'src/util.js'
    ],


    // list of files / patterns to exclude
    exclude: [
      path.resolve(__dirname, 'node_modules')
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      // 'src/*.js': ['coverage'],
      // 'test/*.js': ['babel', 'react', 'coverage'],
      'test/*.js': ['webpack', 'coverage'/*'babel', 'react'*/]
    },

    // babelPreprocessor: {
    //   options: {
    //     presets: ['@babel/preset-env', '@babel/preset-react'],
    //     sourceMap: 'inline'
    //   },
    //   // filename: function (file) {
    //   //   return file.originalPath.replace(/\.js$/, '.es5.js');
    //   // },
    //   // sourceFileName: function (file) {
    //   //   return file.originalPath;
    //   // }
    // },


    coverageReporter: {
      type: 'html',
      dir: 'coverage/',

      // type: 'cobertura',
      // dir: 'unit-coverage/',
      // file: 'unit-test-result.xml'
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: [/*'PhantomJS'*/ /*, 'Chrome',*/ "ChromeHeadless"],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,


    webpack: { 
      devtool: 'inline-source-map', //just do inline source maps instead of the default
      module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            use: [{
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env', '@babel/preset-react'],
                plugins: ['istanbul'] 
              }
            }],
            exclude: path.resolve(__dirname, 'node_modules')
          }
        ],
      },
      mode: "development"
    },
  })
}
