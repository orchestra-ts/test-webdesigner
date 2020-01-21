module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-less');

    var excludes = [
        '!**/node_modules/**'
    ];

    grunt.initConfig({
        excludes: excludes,

        connect: {
            server: {
                options: {
                    port: 9001,
                    // open a browser
                    open: true,
                    // inject livereload.js into the pages
                    livereload: true
                }
            }
        },

        sass: {
            compile: {
                options: {
                    sourcemap: false
                },
                files: {
                    'css/style_sass.css': 'scss/style.scss'
                }
            }
        },

        less: {
            compile: {
                options: {
                    sourceMap: false
                },
                files: {
                    'css/style_less.css': 'less/style.less',
                }
            }
        },

        watch: {
            options: {
                livereload: true
            },
            // make a subtask for each filetype to selectively run tasks and livereload
            html: {
                files: [
                    '**/*.html',
                    '<%= excludes %>'
                ],
            },
            js: {
                files: [
                    '**/*.js',
                    '<%= excludes %>'
                ],
                tasks: [],
            },
            // don't livereload sass because we livereload the css
            sass: {
                options: {
                    livereload: false
                },
                files: [
                    '**/*.scss',
                    '<%= excludes %>'
                ],
                // compile on save
                tasks: ['sass'],
            },
            less: {
                options: {
                    livereload: false
                },
                files: [
                    '**/*.less',
                    '<%= excludes %>'
                ],
                // compile on save
                tasks: ['less'],
            },
            css: {
                files: [
                    '**/*.css',
                    '<%= excludes %>'
                ],
                tasks: []
            }
        }
    });

    // Default task(s).
    grunt.registerTask('default', [
        'sass',
        'less',
        'connect',
        'watch'
    ]);
};
