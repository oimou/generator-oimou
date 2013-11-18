
module.exports = function(grunt) {
  grunt.initConfig({
    jade: {
      compile: {
        files: [
          {
            expand: true,
            cwd: "<%= view_dir %>",
            src: ["index.jade"],
            dest: "<%= dest_dir %>",
            ext: ".html"
          }
        ]
      }
    },

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
      jade: {
        files: ["<%= view_dir %>/index.jade"],
        tasks: ["jade:compile"]
      },

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
  grunt.loadNpmTasks("grunt-contrib-jade");

  grunt.registerTask("build", ["jade:compile", "stylus:compile"]);
  grunt.registerTask("livereload", ["connect:server", "watch"]);
  grunt.registerTask("default", ["build"]);
};
