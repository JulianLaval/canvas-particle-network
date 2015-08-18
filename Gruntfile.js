module.exports = function(grunt) {
  
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    eslint: {
      options: {
        configFile: '.eslintrc'
      },
      target: ['ParticleNetwork.js']
    },
    uglify: {
      options: {
        mangleProperties: true,
        reserveDOMProperties: true,
        exceptionsFiles: ['mangleExceptions.json']
      },
      dist: {
        files: {
          'ParticleNetwork.min.js': ['ParticleNetwork.js']
        }
      }
    }
  });

};