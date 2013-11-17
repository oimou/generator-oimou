
module.exports = function(grunt) {
  grunt.initConfig({
    connect: {
      server: {
        options: {
          port: <%= port %>,
          hostname: "*",
          base: "public"
        }
      }
    },

    watch: {
      livereload: {
        files: ["public/css/*.css", "public/css/**/*.css"],
        options: {
          livereload: true
        }
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-connect");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.registerTask("livereload", ["connect:server", "watch"]);
  grunt.registerTask("default", []);
};
