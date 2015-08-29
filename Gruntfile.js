module.exports = function (grunt) {
  
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    eslint: {
      options: {
        configFile: '.eslintrc',
        format: (grunt.option('o') === undefined) ? 'stylish' : 'html',
        outputFile: (grunt.option('o') === undefined) ? '' : 'report.html'
      },
      target: ['ParticleNetwork.js', 'Gruntfile.js']
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
