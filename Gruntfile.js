
module.exports = grunt => {

  const gruntConfig = {

    eslint: {
      source: {
        options: {
          configFile: 'lint/eslint-build.js',
        },
        src: ['src/**/*.js'],
      },
    },

  };

  grunt.initConfig(gruntConfig);

  grunt.loadNpmTasks('grunt-eslint');

  grunt.registerTask('lint', [
    'eslint:build',
  ]);

}