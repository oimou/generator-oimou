
module.exports = function(grunt) {
  grunt.initConfig({
    watch: {
      livereload: {
        files: ["public/css/*.css", "public/css/**/*.css"],
        options: {
          livereload: true
        }
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.registerTask("livereload", ["watch"]);
  grunt.registerTask("default", []);
};
