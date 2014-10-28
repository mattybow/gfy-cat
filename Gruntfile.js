module.exports = function(grunt) {
    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        connect: {
            server:{
                options:{
                    port:4000,
                    livereload:true
                }
            }
        },
        'gh-pages': {
            options: {
            },
            src: [
                'bower_components/**/*',
                '!bower_components/my-repo/**/*',
                'css/*','src/**/*', 'index.html'
            ]
        },
        vulcanize: {
            default: {
                options: {
                    strip: true
                },
                files: {
                    'dist/gfy-cat.vulcanized.html':'src/elements.html'
                }
            }
        },
        sass: {
          dist: {
            options: {
              style: 'compressed',
              sourceMap: true,
            },
            files: [{
              expand: true,
              cwd:'.',
              src: ['src/{,*/}*.{scss,sass}'],
              dest: '.',
              ext: '.css'
            }]
          }
        },
        exec: {
            sass:{
                cmd: 'grunt sass:dist'
            }
        },
        watch:{
            options:{
                livereload:true
            },
            files:[
                "src/**/*.scss",
                "src/**/*.html",
                "*.html",
                "*.md",
            ],
            tasks:[
                "exec:sass"
            ]
        }
    });

    grunt.registerTask('build',  ['sass','vulcanize']);
    grunt.registerTask('deploy', ['gh-pages']);
    grunt.registerTask('serve', ['build','connect','watch']);

};
