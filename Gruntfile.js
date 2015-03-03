module.exports = function(grunt) {

    require('time-grunt')(grunt);

    var devmode = grunt.option('dev');

    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      assemble: {
      // options: grunt.file.readYAML('config.yml'),
          options: {
            data: ['src/data/*.json'],
            assets: 'dist/static',
            layoutdir: 'src/templates/layouts',
            partials: 'src/templates/partials/**/*.hbs',
            layout: 'layout.hbs',
            helpers: ['handlebars-helper-autolink','handlebars-helper-isActive','src/helpers/**.js']
        },

        site: {
          options: {
              // postprocess: devmode ? false : require('pretty')
          },

          files: [{
              expand: true,
              flatten: false,
              // cwd: 'content/**/*.md',
              cwd: 'content/',
              src: ['**/*.{md,hbs,html,xml}'],
              dest: 'dist'
          }]
        }
      },

      clean: {
          static: ['dist/static/**/*.{css,js}'],
          html: ['dist/**/*.html', '!dist/google*.html']
      },

      sass: {
        dist: {
          files: {
                'dist/static/critical.css': 'src/sass/critical.scss',
                'dist/static/style.css': 'src/sass/style.scss',
                'dist/static/home.css': 'src/sass/home.scss'
          }
        }
      },

      autoprefixer: {
        options: {
          browsers: ['last 2 versions', '> 1%']
        },

        dist: {
          expand: true,
          flatten: true,
          files: {
            'dist/static/prefixed/critical.css': 'dist/static/critical.css',
            'dist/static/prefixed/style.css': 'dist/static/style.css',
            'dist/static/prefixed/home.css': 'dist/static/home.css'
          }
        }
      },

      cssmin: {
        dist: {
          files: {
          'dist/static/prefixed/critical.min.css': 'dist/static/prefixed/critical.css',
          'dist/static/prefixed/style.min.css': 'dist/static/prefixed/style.css',
          'dist/static/prefixed/home.min.css': 'dist/static/prefixed/home.css'
          }
        }
      },

      copy: {
        main: {
          // src: 'dist/static/prefixed/home.min.css',
          // dest: 'src/templates/partials/homeheadstyles.hbs',
          files: {
          'src/templates/partials/critical-css.hbs'    : 'dist/static/prefixed/critical.min.css',
          'src/templates/partials/homeheadstyles.hbs'  : 'dist/static/prefixed/home.min.css',
          'src/templates/partials/head-detect-js.hbs'  : 'dist/static/head-detect.min.js',
          'src/templates/partials/insert-svg-js.hbs'   : 'dist/static/insert-svg.min.js',
          'src/templates/partials/script-id-01-js.hbs' : 'dist/static/script-id-01.min.js',
          'src/templates/partials/script-id-02-js.hbs' : 'dist/static/script-id-02.min.js',
          'src/templates/partials/script-id-03-js.hbs' : 'dist/static/script-id-03.min.js',
          'src/templates/partials/script-id-04-js.hbs' : 'dist/static/script-id-04.min.js'
          },
          flatten: true,
          filter: 'isFile',
        },
      },

      htmlmin: {                                     // Task
        dist: {                                      // Target
          options: {                                 // Target options
            removeComments: true,
            collapseWhitespace: true
          },
          files: {                                   // Dictionary of files
            'dist/index.html': 'dist/index.html',    // 'destination': 'source'
            'dist/assembling/index.html': 'dist/assembling/index.html',
            'dist/select-menu-hashchange/index.html': 'dist/select-menu-hashchange/index.html',
            'dist/css-shapes-in-multi-column-layout/index.html': 'dist/css-shapes-in-multi-column-layout/index.html',
            'dist/interplay-css-javascript/index.html': 'dist/interplay-css-javascript/index.html'
          }
        }
      },

      concat: {
         dist: {
           files: {
             'dist/static/insert-svg.min.js' :  ['src/js/svg-test.js'],
             'dist/static/prism-custom.min.js' :  ['src/js/prism-custom.min.js'],
             'dist/static/dropcap.min.js' :  ['src/js/dropcap.min.js'],
           }
         }
       },

      uglify: {
        options: {
          preserveComments: 'some'
        },
        dist: {
          files: {
            'dist/static/prism-custom.min.js' : 'dist/static/prism-custom.min.js',
            'dist/static/insert-svg.min.js'   : 'dist/static/insert-svg.min.js',
            'dist/static/head-detect.min.js'  : 'src/js/head-detect.js',
            'dist/static/script-id-01.min.js' : 'src/js/script-id-01.js',
            'dist/static/script-id-02.min.js' : 'src/js/script-id-02.js',
            'dist/static/script-id-03.min.js' : 'src/js/script-id-03.js',
            'dist/static/script-id-04.min.js' : 'src/js/script-id-04.js'
          }
        }
      },

      hashres: {
         options: {
             fileNameFormat: '${name}.${ext}?${hash}',
             renameFiles: false
         },
         dist: {
             src: ['dist/static/main.min.js','dist/static/prefixed/style.min.css','dist/static/prefixed/home.min.css'],
             dest: 'dist/**/*.html'
        }
     },

      connect: {
        dev: {
          options: {
            hostname: '0.0.0.0',
            // port: 35729,
            base: 'dist',
            livereload: true
          }
        }
      },

      watch: {
        options: {
          livereload: true,
        },

        scss: {
            files: ['src/**/*.scss'],
            tasks: ['scss','autoprefixer','cssmin','copy','hashres'],
            options: {
              spawn: false
            }
        },

        js: {
            files: ['src/js/**/*.js'],
            tasks: ['concat','uglify'],
            options: {
              spawn: false
            }
        },

        html: {
            files: ['content/**/*','src/templates/**/*'],
            tasks: [],
            options: {
              spawn: false
            }
        },
        // https://github.com/gruntjs/grunt-contrib-watch#optionslivereload
        livereload: {
        // Here we watch the files the sass task will compile to
        // These files are sent to the live reload server after sass compiles to them
        options: {
          livereload: true,
          spawn: false,
          },
        files: ['dist/static/**/*.css'],
        },
      },


      // from the commandline run: grunt gh-pages to build the remote gh-pages branch:
      // https://github.com/tschaub/grunt-gh-pages
      'gh-pages': {
        options: {
          // base: 'dist',
          // push: false
          base: 'dist'
        },
        src: '**/*'
      }

  });

    grunt.registerTask('build', ['clean', 'concat', 'uglify', 'sass', 'autoprefixer', 'cssmin', 'copy', 'assemble', 'htmlmin', 'hashres']);
    grunt.registerTask('scss', ['sass', 'autoprefixer', 'cssmin', 'hashres']);
    grunt.registerTask('js', ['uglify', 'concat']);
    grunt.registerTask('html', ['assemble', 'hashres']);
    grunt.registerTask('default', ['build', 'connect', 'watch']);
    grunt.registerTask('dev', ['connect', 'watch']);
    // grunt.registerTask('default', ['build', 'connect', 'watch', 'assemble:component']);
    // grunt.registerTask('default', ['assemble:component']);

    grunt.loadNpmTasks('assemble', 'grunt-verb', 'grunt-hashres', 'grunt-gh-pages', 'grunt-contrib-copy', 'grunt-contrib-htmlmin', 'grunt-contrib-sass','grunt-contrib-watch','matchdep','grunt-contrib-clean','grunt-contrib-connect','grunt-autoprefixer');
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  // Default tasks to be run.
};
//    if (devmode) {
//        grunt.task.registerTask('hashres', function(){ console.log('Skipping hashres task because of --dev flag'); });
//        grunt.task.registerTask('uncss', function(){ console.log('Skipping uncss task because of --dev flag'); });
//    }
// };
