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
          'docs/assets/css/critical.css' : 'source/assets/sass/critical.scss',
          'docs/assets/css/style.css'    : 'source/assets/sass/style.scss',
          'docs/assets/css/home.css'     : 'source/assets/sass/home.scss'
        }
      }
    },

    postcss: {
      options: {
        map: {
          inline: false, // save all sourcemaps as separate files...
          // annotation: 'docs/assets/css/prefixed/' // ...to the specified directory
        },
        processors: [
          require('autoprefixer')({browsers: 'last 2 versions'}),
        ]
      },

      dist: {
        expand: true,
        flatten: true,
        files: {
          'docs/assets/css/prefixed/critical.css' : 'docs/assets/css/critical.css',
          'docs/assets/css/prefixed/style.css'    : 'docs/assets/css/style.css',
          'docs/assets/css/prefixed/home.css'     : 'docs/assets/css/home.css'
        }
      }
    },

    cssmin: {
      dist: {
        files: {
          'docs/assets/css/prefixed/critical.min.css': 'docs/assets/css/prefixed/critical.css',
          'docs/assets/css/prefixed/style.min.css'   : 'docs/assets/css/prefixed/style.css',
          'docs/assets/css/prefixed/home.min.css'    : 'docs/assets/css/prefixed/home.css'
        }
      }
    },

    copy: {
      main: {
        files: {
          'source/_includes/critical-css.inc'        : 'docs/assets/css/prefixed/critical.min.css',
          'source/_includes/homeheadstyles-css.inc'  : 'docs/assets/css/prefixed/home.min.css',
          'source/_includes/head-detect-js.inc'      : 'docs/assets/js/head-detect.min.js',
          'source/_includes/insert-svg-js.inc'       : 'docs/assets/js/insert-svg.min.js',
          'source/_includes/script-id_01-js.inc'     : 'docs/assets/js/script-id_01.min.js',
          'source/_includes/script-id_02-js.inc'     : 'docs/assets/js/script-id_02.min.js',
          'source/_includes/script-id_03-js.inc'     : 'docs/assets/js/script-id_03.min.js',
          'source/_includes/script-id_04-js.inc'     : 'docs/assets/js/script-id_04.min.js',
          'source/_includes/script-id_05-js.inc'     : 'docs/assets/js/script-id_05.min.js',
          'source/_includes/script-id_06-js.inc'     : 'docs/assets/js/script-id_06.min.js',
          'source/_includes/script-id_07-js.inc'     : 'docs/assets/js/script-id_07.min.js',
          'source/_includes/script-id_08-js.inc'     : 'docs/assets/js/script-id_08.min.js',
          'source/_includes/script-id_09-js.inc'     : 'docs/assets/js/script-id_09.min.js',
          'source/_includes/script-id_10-js.inc'     : 'docs/assets/js/script-id_10.min.js',
          'source/_includes/script-id_11-js.inc'     : 'docs/assets/js/script-id_11.min.js',
          'source/_includes/script-id_12-js.inc'     : 'docs/assets/js/script-id_12.min.js',
          'source/_includes/fontfaceobserver-js.inc' : 'docs/assets/js/fontfaceobserver.js',

          // for local development and also for source maps
          'assets/js/prism-custom.min.js'       : 'docs/assets/js/prism-custom.js',
          'assets/css/prefixed/style.min.css'   : 'docs/assets/css/prefixed/style.css',
          'assets/css/prefixed/style.css.map'   : 'docs/assets/css/prefixed/style.css.map',
          'assets/css/prefixed/home.min.css'    : 'docs/assets/css/prefixed/home.css',
          'assets/css/prefixed/home.css.map'    : 'docs/assets/css/prefixed/home.css.map',
          'assets/css/prefixed/critical.css.map': 'docs/assets/css/prefixed/critical.css.map'
        },
        flatten: true,
        filter: 'isFile',
      },
    },

    concat: {
      dist: {
        files: {
          'docs/assets/js/insert-svg.js'   :  ['source/assets/js/svg-test.js'],
          'docs/assets/js/prism-custom.js' :  ['source/assets/js/prism-custom.js'],
          'docs/assets/js/dropcap.min.js'  :  ['source/assets/js/dropcap.js'],
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
          'docs/assets/js/prism-custom.min.js' : 'docs/assets/js/prism-custom.js',
          'docs/assets/js/insert-svg.min.js'   : 'docs/assets/js/insert-svg.js',
          'docs/assets/js/head-detect.min.js'  : 'source/assets/js/head-detect.js',
          'docs/assets/js/script-id_01.min.js' : 'source/assets/js/script-id_01.js',
          'docs/assets/js/script-id_02.min.js' : 'source/assets/js/script-id_02.js',
          'docs/assets/js/script-id_03.min.js' : 'source/assets/js/script-id_03.js',
          'docs/assets/js/script-id_04.min.js' : 'source/assets/js/script-id_04.js',
          'docs/assets/js/script-id_05.min.js' : 'source/assets/js/script-id_05.js',
          'docs/assets/js/script-id_06.min.js' : 'source/assets/js/script-id_06.js',
          'docs/assets/js/script-id_07.min.js' : 'source/assets/js/script-id_07.js',
          'docs/assets/js/script-id_08.min.js' : 'source/assets/js/script-id_08.js',
          'docs/assets/js/script-id_09.min.js' : 'source/assets/js/script-id_09.js',
          'docs/assets/js/script-id_10.min.js' : 'source/assets/js/script-id_10.js',
          'docs/assets/js/script-id_11.min.js' : 'source/assets/js/script-id_11.js',
          'docs/assets/js/script-id_12.min.js' : 'source/assets/js/script-id_12.js'

        }
      }
    },

    htmlmin: { // Task
       dist: { // Target
         options: { // Target options
           removeComments: true,
           collapseWhitespace: true
         },
         files: { // Dictionary of files
           'docs/index.html': 'docs/index.html', // 'destination': 'source'
           'docs/airfan/index.html': 'docs/airfan/index.html',
           'docs/assembling/index.html': 'docs/assembling/index.html',
           'docs/colorschemes-sublime/index.html': 'docs/colorschemes-sublime/index.html',
           'docs/colorscheming/index.html': 'docs/colorscheming/index.html',
           'docs/css-shapes-in-multi-column-layout/index.html': 'docs/css-shapes-in-multi-column-layout/index.html',
           'docs/differentiate/index.html': 'docs/differentiate/index.html',
           'docs/interplay-css-javascript/index.html': 'docs/interplay-css-javascript/index.html',
           'docs/select-menu-hashchange/index.html': 'docs/select-menu-hashchange/index.html',
           'docs/switching-color-modes/index.html': 'docs/switching-color-modes/index.html',
           'docs/alpha-transparency-in-hex/index.html': 'docs/alpha-transparency-in-hex/index.html',
           'docs/lazy-loading/index.html': 'docs/lazy-loading/index.html',
           'docs/create-custom-unicase-webfont/index.html': 'docs/create-custom-unicase-webfont/index.html'
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

  });

  grunt.registerTask('build', ['concat', 'uglify', 'sass', 'postcss:dist', 'cssmin', 'copy', 'htmlmin']);
  grunt.registerTask('copy', ['copy']);
  grunt.registerTask('scss', ['sass', 'postcss:dist', 'cssmin']);
  grunt.registerTask('js', ['uglify', 'concat']);
  grunt.registerTask('default', ['build', 'watch']);
  grunt.registerTask('dev', ['watch']);

  grunt.loadNpmTasks('grunt-sass','grunt-contrib-cssmin','grunt-contrib-concat','grunt-contrib-uglify','grunt-contrib-watch','matchdep','grunt-postcss','grunt-contrib-copy','grunt-contrib-htmlmin');
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
};
