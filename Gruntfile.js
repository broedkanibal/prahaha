// Gruntfile.js
module.exports = function (grunt) {
    grunt.initConfig({
            // Watch task config
            watch: {
                sass: {
                    files: "scss/**/*.scss",
                    tasks: ['sass']
                }
            },
            // SASS task config
            sass: {
                dev: {
                    files: {
                        // destination         // source file

                        "css/style.css": "scss/style.scss"
                    }
                }
            },
            // Browser Sync
            browserSync: {
                default_options: {
                    bsFiles: {
                        src: [
                            "css/*.css",
                            "//*.js",
                            "*.html"
                        ]
                    }
                    ,
                    options: {
                        watchTask: true,
                        server: {
                            baseDir: "./"
                        }
                    }
                }
            }
        }
    )
    ;

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');

// register a default task.
    grunt.registerTask('default', ['browserSync', 'watch']);
}
;