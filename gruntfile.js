module.exports = function(grunt) {

    'use strict';

    grunt.initConfig({
        // Package.json handling
        pkg: grunt.file.readJSON('package.json'),

        // Clean the build and demo/css folder
        clean: {
            all: ['dist', 'demo/css']
        },

        // Watch tasks: sass for development and gruntfile
        watch: {
            grunt: {
                files: 'gruntfile.js',
                options: { reload: true }
            },
            sass: {
                files: 'scss/**/*.scss',
                tasks: 'dist'
            }
        },

        // SCSS processing
        sass: {
            mincss: {
                options: {
                    noCache: true,
                    sourcemap: 'file',
                    style: 'compressed'
                },
                files: {
                    'dist/pavilion.min.css': 'scss/pavilion.scss'
                }
            },
            normalcss: {
                options: {
                    noCache: true,
                    sourcemap: 'none',
                    style: 'expanded'
                },
                files: {
                    'dist/pavilion.css': 'scss/pavilion.scss'
                }
            },
            demo: {
                options: {
                    noCache: true,
                    sourcemap: 'file',
                    style: 'compressed'
                },
                files: {
                    'demo/css/pavilion.min.css': 'scss/pavilion.scss'
                }
            }
        },

        // Prefix the build and demo folder
        autoprefixer: {
            mincss: {
                options: {
                    browsers: [
                        'last 3 versions'
                    ],
                    map: {
                        inline: false
                    }
                },
                files: {
                    'dist/pavilion.min.css': 'dist/pavilion.min.css'
                }
            },
            normalcss: {
                options: {
                    browsers: [
                        'last 2 versions'
                    ],
                    map: false
                },
                files: {
                    'dist/pavilion.css': 'dist/pavilion.css'
                }
            },
            demo: {
                options: {
                    browsers: [
                        'last 2 versions'
                    ],
                    map: false
                },
                files: {
                    'demo/css/pavilion.min.css': 'demo/css/pavilion.min.css'
                }
            }
        },
        comments: {
            css: {
                // Target-specific file lists and/or options go here.
                options: {
                    singleline: false,
                    multiline: true
                },
                src: ['dist/pavilion.css'] // files to remove comments from
            },
        }

    });

    // Run default task, build everything and watch
    grunt.registerTask('default', [
        'dist',
        'watch'
    ]);

    // Only build
    grunt.registerTask('dist', [
        'clean',
        'sass',
        'autoprefixer',
        'comments'
    ]);

    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);
};
