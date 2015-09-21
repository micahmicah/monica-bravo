'use strict';
module.exports = function(grunt) {

  // ----------------------------------------------------------
  // WARNING, BRAVE DEVELOPER
  // ----------------------------------------------------------
  // Webhook allows you to use local grunt tasks and files.
  // However, these tasks are ONLY RUN LOCALLY and not when
  // your live site needs to be rebuilt. This means you should
  // only use grunt for pre-processing tasks like building
  // Sass, less or coffescript files, not for reading things
  // from your templates and making dynamic changes during
  // the build process. Doing so will cause your live site
  // not to regenerate.
  //
  // You have been warned!
  grunt.initConfig({

    watch: {
            sass: {
                files: ['static/scss/**/*.scss'],
                tasks: ['sass',
                'build-static']
            },
            browserify: {
                files: ['script/src/**/*.js'],
                tasks: [
                'browserify:client',
                'build-static']
            }
        },


        // Build scss to css
        sass: {
            dev: {
                options: {
                    // WebHook will minifiy, so we don't have to here
                    style: 'expanded'
                },
                files: [{
                    expand: 'true',
                    cwd: 'scss',
                    src: ['site.scss'],
                    dest: 'static/css',
                    ext: '.css'
                }]
            }
        },

        browserify: {
            client: {
                src: ['script/src/index.js'],
                dest: 'static/javascript/site.js'
            }
        }

  });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-browserify');

    // NEVER REMOVE THESE LINES, OR ELSE YOUR PROJECT MAY NOT WORK
    require('./options/generatorOptions.js')(grunt);
    grunt.loadTasks('tasks');
};
