module.exports = function (config) {
  config.set({
    basePath: '',
    client: {
      clearContext: false,
    },
    frameworks: ['jasmine'],
    files: [
      'packages/**/tests/*.js',
    ],
    exclude: [],
    preprocessors: {
      'packages/**/tests/*.js': ['webpack'],
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity,
    webpack: {
      devtool: 'inline-source-map',
      mode: 'development',
    },
  });
};
