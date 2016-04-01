module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // DEFAULT TASK
        // ================================================================

        // Watch files and process the above tasks
        watch: {
            options: {
                livereload: false
            },
            grunt: {
                files: [
                    'gruntfile.js'
                ],
                options: {
                    reload: true
                }
            },
            sass: {
                files: [
                    'scss/**/*.scss'
                ],
                tasks: [
                    'sass',
                    'autoprefixer'
                ]
            }
        },

        // BUILD TASKS
        // ================================================================
        // Clear files and folders
        clean: {
            all: ['css']
        },

        // Compile Sass files to CSS
        sass: {
            minify: {
                options: {
                    noCache: true,
                    sourcemap: 'none',
                    style: 'compressed'
                },
                files: {
                    'css/pavilion.min.css': ['scss/*.scss', '!scss/_*.scss']
                }
            },
            default: {
                options: {
                    noCache: true,
                    sourcemap: 'none',
                    style: 'expanded'
                },
                files: {
                    'css/pavilion.css': ['scss/*.scss', '!scss/_*.scss']
                }
            }
        },
        // Parse CSS and add vendor-prefixed CSS properties using the Can I Use database.
        autoprefixer: {
            minify: {
                options: {
                    browsers: [
                        'last 1 versions'
                    ],
                    map: {
                        inline: false
                    }
                },
                files: {
                    'css/pavilion.min.css': 'css/pavilion.min.css'
                }
            },
            default: {
                options: {
                    browsers: [
                        'last 1 versions'
                    ],
                    map: false
                },
                files: {
                    'css/pavilion.css': 'css/pavilion.css'
                }
            }
        }
    });

    // Default task
    grunt.registerTask('default', [
        'build',
        'watch'
    ]);

    // Build task
    grunt.registerTask('build', [
        'clean',
        'sass',
        'autoprefixer'
    ]);


    // ================================================================
    // LOAD TASKS
    // ================================================================

    // Automatically loading Grunt tasks
    require('load-grunt-tasks')(grunt);

    // Display the elapsed execution time of Grunt tasks
    require('time-grunt')(grunt);

};
