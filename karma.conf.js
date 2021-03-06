module.exports = function(config) {
  config.set({

    frameworks: ['qunit'],

    files: [
      'bower_components/jquery/dist/jquery.js',
      'bower_components/handlebars/handlebars.js',
      'bower_components/ember/ember.js',
      'bower_components/route-recognizer/dist/route-recognizer.js',
      'bower_components/sinon/index.js',
      'dist/qd-ajax.js',
      // when running broccoli serve, we use this instead
      'http://localhost:4200/qd-ajax.js',
      'test/**/*.spec.js'
    ],

    basePath: '',

    reporters: ['progress'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: ['Chrome'],

    captureTimeout: 60000,

    singleRun: false

  });
};

