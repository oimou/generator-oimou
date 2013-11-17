
module.exports = function(grunt) {
  grunt.initConfig({
    stylus: {
      compile: {
        files: [
          {
            expand: true,
            cwd: "<%= src_dir %>/css",
            src: ["*.styl", "**/*.styl", "*.stylus", "**/*.stylus"],
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
      stylus: {
        files: ["<%= src_dir %>/css/*.styl", "<%= src_dir %>/css/*.stylus"],
        tasks: ["stylus:compile"]
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
  grunt.loadNpmTasks("grunt-contrib-stylus");

  grunt.registerTask("livereload", ["connect:server", "watch"]);
  grunt.registerTask("default", []);
};
