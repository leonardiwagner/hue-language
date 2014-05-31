module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            hue_language: [
                            './src/hue-language/statement.js',
                            './src/hue-language/class.js',
                            './src/hue-language/compilator.js',
                        ]
        },
        concat: {
            hue_language: {
                src: ['./src/hue-language/*.js'],
                dest: './src/hue-language/hue-language.js'
            }
        },
        watch: {
            hue_language: {
                files: ['./src/hue-language/*.js','./test/*/*.js'],
                tasks: ['jshint']
            }
        }
    });

    // Load the plugin that provides the "watch" & "stylus" tasks.
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-contrib-csshint');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');

    // Default task(s).
    grunt.registerTask('default', ['jshint']);
}