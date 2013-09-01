module.exports = function(grunt) {
  grunt.initConfig({
    browserify: {
      development: {
        files: {
          './build/quorra.js': ['./index.js']
        },
        options: {
          debug: true,
          alias: ['./index.js:quorra']
        }
      }
    },

    uglify: {
      production: {
        files: {
          './build/quorra.min.js': ['./build/quorra.js']
        }
      }
    },

    watch: {
      scripts: {
        files: './src/**/*.js',
        tasks: ['browserify', 'uglify'],
        options: {
          interrupt: true
        }
      }
    },

    nodemon: {
      development: {
        options: {
          file: 'server.js',
          cwd: __dirname
        }
      }
    },

    concurrent: {
      development: {
        tasks: ['nodemon', 'watch'],
        options: {
          logConcurrentOutput: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['browserify', 'uglify']);
  grunt.registerTask('watch-build', ['concurrent:development']);
};

