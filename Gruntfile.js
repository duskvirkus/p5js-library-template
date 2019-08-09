module.exports = grunt => {

  const gruntConfig = {

    eslint: {

      build: {
        options: {
          configFile: 'lint/eslint.build.js',
        },
        src: [
          'Gruntfile.js',
          'lint/**/*.js',
        ],
      },

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
    'eslint:build',
    'eslint:src',
  ]);

  grunt.registerTask('test', [
    'lint',
  ]);

  grunt.registerTask('default', ['test']);

}