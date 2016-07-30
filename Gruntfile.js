'use strict';

module.exports = function gruntConfig(grunt) {
  var jsFiles = [
    'index.js',
    'gruntfile.js',
    'lib/**/*.js',
    'test/**/*.js',
    'examples/**/*.js'
  ];

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // Configure a mochaTest task
    eslint: {
      options: {
      },
      standard: {
        src: jsFiles
      },
      html: {
        options: {
          format: 'html',
          configFile: '.eslintrc.json',
          outputFile: 'coverage/report.html',
          fix: true
        },
        src: jsFiles
      },
      markdown: {
        options: {
          format: require('eslint-formatter-markdown'),
          configFile: '.eslintrc.json',
          outputFile: 'coverage/report.md'
        },
        src: jsFiles
      }
    }
  });

  grunt.loadNpmTasks('grunt-eslint');

  // Default task(s).
  grunt.registerTask('default', ['eslint:standard']);
  grunt.registerTask('lint', ['eslint']);
};
