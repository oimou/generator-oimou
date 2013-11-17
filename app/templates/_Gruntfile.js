
module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      dist: {
        files: [
          {
            expand: true,
            cwd: "<%= src_dir %>/css",
            src: ["*.scss"],
            dest: "<%= dest_dir %>/css",
            ext: ".css"
          }
        ]
      }
    },

    connect: {
      server: {
        options: {
          port: <%= port %>,
          hostname: "*",
          base: "<%= dest_dir %>"
        }
      }
    },

    watch: {
      sass: {
        files: ["<%= src_dir %>/css/*.scss"],
        tasks: ["sass:dist"]
      },

      livereload: {
        files: ["<%= dest_dir %>/css/*.css", "<%= dest_dir %>/css/**/*.css"],
        options: {
          livereload: true
        }
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-connect");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-sass");

  grunt.registerTask("livereload", ["connect:server", "watch"]);
  grunt.registerTask("default", []);
};
