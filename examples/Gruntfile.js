module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    connect: {
      server: {
        options: {
          port: 9000,
          // Change this to '0.0.0.0' to access the server from outside.
          hostname: 'localhost',
          keepalive: true
        }
      }
    },

    watch: {
      js: {
        files: ["**/*.html", "**/*.js", "**/*.css"],
        options: {
          livereload: true
        }
      }
    }
  })

  grunt.loadNpmTasks("grunt-contrib-connect")
  grunt.loadNpmTasks("grunt-contrib-watch")

  // Default task(s).
  grunt.registerTask("default", ["connect"]);

}