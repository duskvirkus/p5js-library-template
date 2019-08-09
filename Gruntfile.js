const path = require('path');

module.exports = grunt => {

  const gruntConfig = {

    eslint: {
      src: {
        options: {
          configFile: 'lint/eslint.src.js',
        },
        src: ['src/**/*.js'],
      },
    },

  };

  grunt.initConfig(gruntConfig);

  grunt.loadNpmTasks('grunt-eslint');

  grunt.registerTask('lint', [
    'eslint:src',
  ]);

}