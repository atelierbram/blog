module.exports = function(grunt) {

  require('time-grunt')(grunt);

  var devmode = grunt.option('dev');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'output_prod/assets/css/critical.css': 'source/assets/sass/critical.scss',
          'output_prod/assets/css/style.css': 'source/assets/sass/style.scss',
          'output_prod/assets/css/home.css': 'source/assets/sass/home.scss'
        }
      }
    },

    postcss: {
      options: {
        map: {
          inline: false, // save all sourcemaps as separate files...
          // annotation: 'output_prod/assets/css/prefixed/' // ...to the specified directory
        },
        processors: [
          require('autoprefixer')({browsers: 'last 2 versions'}),
        ]
      },

      dist: {
        expand: true,
        flatten: true,
        files: {
          'output_prod/assets/css/prefixed/critical.css': 'output_prod/assets/css/critical.css',
          'output_prod/assets/css/prefixed/style.css': 'output_prod/assets/css/style.css',
          'output_prod/assets/css/prefixed/home.css': 'output_prod/assets/css/home.css'
        }
      }
    },

    cssmin: {
      dist: {
        files: {
          'output_prod/assets/css/prefixed/critical.min.css': 'output_prod/assets/css/prefixed/critical.css',
          'output_prod/assets/css/prefixed/style.min.css': 'output_prod/assets/css/prefixed/style.css',
          'output_prod/assets/css/prefixed/home.min.css': 'output_prod/assets/css/prefixed/home.css'
        }
      }
    },

    copy: {
      main: {
        files: {
          'source/_includes/critical-css.inc'    : 'output_prod/assets/css/prefixed/critical.min.css',
          'source/_includes/homeheadstyles.inc'  : 'output_prod/assets/css/prefixed/home.min.css',
          'source/_includes/head-detect-js.inc'  : 'output_prod/assets/js/head-detect.min.js',
          'source/_includes/insert-svg-js.inc'   : 'output_prod/assets/js/insert-svg.min.js',
          'source/_includes/script-id_01-js.inc' : 'output_prod/assets/js/script-id_01.min.js',
          'source/_includes/script-id_02-js.inc' : 'output_prod/assets/js/script-id_02.min.js',
          'source/_includes/script-id_03-js.inc' : 'output_prod/assets/js/script-id_03.min.js',
          'source/_includes/script-id_04-js.inc' : 'output_prod/assets/js/script-id_04.min.js',
          'source/_includes/script-id_05-js.inc' : 'output_prod/assets/js/script-id_05.min.js',
          'source/_includes/script-id_06-js.inc' : 'output_prod/assets/js/script-id_06.min.js',
          'source/_includes/script-id_07-js.inc' : 'output_prod/assets/js/script-id_07.min.js',
          'source/_includes/script-id_08-js.inc' : 'output_prod/assets/js/script-id_08.min.js',
          'source/_includes/script-id_09-js.inc' : 'output_prod/assets/js/script-id_09.min.js',
          'source/_includes/script-id_10-js.inc' : 'output_prod/assets/js/script-id_10.min.js',
          'source/_includes/script-id_11-js.inc' : 'output_prod/assets/js/script-id_11.min.js',
          'source/_includes/fontfaceobserver-js.inc' : 'output_prod/assets/js/fontfaceobserver.js',

          // for local development
          'assets/js/prism-custom.min.js' :       'output_prod/assets/js/prism-custom.js',
          'assets/css/prefixed/style.min.css':    'output_prod/assets/css/prefixed/style.css',
          'assets/css/prefixed/home.min.css':     'output_prod/assets/css/prefixed/home.css'
        },
        flatten: true,
        filter: 'isFile',
      },
    },

    concat: {
      dist: {
        files: {
          'output_prod/assets/js/insert-svg.js' :  ['source/assets/js/svg-test.js'],
          'output_prod/assets/js/prism-custom.js' :  ['source/assets/js/prism-custom.js'],
          'output_prod/assets/js/dropcap.min.js' :  ['source/assets/js/dropcap.js'],
        }
      }
    },

    uglify: {
      options: {
        // preserveComments: 'false'
        preserveComments: /^!/
          // only preserve comments that start with a bang
          // https://github.com/gruntjs/grunt-contrib-uglify/issues/366
      },
      dist: {
        files: {
          'output_prod/assets/js/prism-custom.min.js' : 'output_prod/assets/js/prism-custom.js',
          'output_prod/assets/js/insert-svg.min.js'   : 'output_prod/assets/js/insert-svg.js',
          'output_prod/assets/js/head-detect.min.js'  : 'source/assets/js/head-detect.js',
          'output_prod/assets/js/script-id_01.min.js' : 'source/assets/js/script-id_01.js',
          'output_prod/assets/js/script-id_02.min.js' : 'source/assets/js/script-id_02.js',
          'output_prod/assets/js/script-id_03.min.js' : 'source/assets/js/script-id_03.js',
          'output_prod/assets/js/script-id_04.min.js' : 'source/assets/js/script-id_04.js',
          'output_prod/assets/js/script-id_05.min.js' : 'source/assets/js/script-id_05.js',
          'output_prod/assets/js/script-id_06.min.js' : 'source/assets/js/script-id_06.js',
          'output_prod/assets/js/script-id_07.min.js' : 'source/assets/js/script-id_07.js',
          'output_prod/assets/js/script-id_08.min.js' : 'source/assets/js/script-id_08.js',
          'output_prod/assets/js/script-id_09.min.js' : 'source/assets/js/script-id_09.js',
          'output_prod/assets/js/script-id_10.min.js' : 'source/assets/js/script-id_10.js',
          'output_prod/assets/js/script-id_11.min.js' : 'source/assets/js/script-id_11.js'

        }
      }
    },

    watch: {
      options: {
        livereload: true,
      },

      scss: {
        files: ['source/assets/sass/**/*.scss'],
          tasks: ['scss','postcss','cssmin','copy'],
          options: {
        // spawn: false
        }
        },

        js: {
          files: ['source/assets/js/**/*.js'],
            tasks: ['concat','uglify'],
            options: {
          // spawn: false
          }
        },

      },

      // from the commandline run: grunt gh-pages to build the remote gh-pages branch:
      // https://github.com/tschaub/grunt-gh-pages
      'gh-pages': {
        options: {
          // push: false
          base: 'output_prod/_posts/'
        },
        src: '**/*'
      }


  });

  grunt.registerTask('build', ['concat', 'uglify', 'sass', 'postcss:dist', 'cssmin', 'copy']);
  grunt.registerTask('scss', ['sass', 'postcss:dist', 'cssmin']);
  grunt.registerTask('js', ['uglify', 'concat']);
  grunt.registerTask('default', ['build', 'watch']);
  grunt.registerTask('dev', ['watch']);

  grunt.loadNpmTasks('grunt-sass','grunt-contrib-cssmin','grunt-contrib-concat','grunt-contrib-uglify','grunt-contrib-watch','matchdep','grunt-postcss','grunt-contrib-copy','grunt-gh-pages');
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
};
