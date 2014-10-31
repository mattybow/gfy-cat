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
                '!bower_components/core*/**/*',
                '!bower_components/paper*/**/*',
                '!bower_components/gfy-cat/**/*',
                'images/*',
                'css/*','src/**/*', 'gfy-cat-demo.vulcanized.html','index.html','favicon.ico'
            ]
        },
        vulcanize: {
            default: {
                options: {
                    strip: true
                },
                files: {
                    'gfy-cat-demo.vulcanized.html':'src/demo.html'
                }
            }
        },
        replace: {
          dist: {
            options: {
              patterns: [
                {
                  match: /\.\.\/\.\.\/src\/playpause-svg\//g,
                  replacement: ''
                },
                {
                  match: /\/bower_components/g,
                  replacement: ''
                }
              ]
            },
            files: [
              {expand:true, flatten: true, src:['src/gfy-cat/**','src/playpause-svg/**','!src/**/*.scss'], dest:'dist/', filter:'isFile'}
            ]
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
                "index.html"
            ],
            tasks:[
                "exec:sass"
            ]
        }
    });

    grunt.registerTask('build',  ['sass','vulcanize','replace']);
    grunt.registerTask('deploy', ['gh-pages']);
    grunt.registerTask('serve', ['build','connect','watch']);

};
