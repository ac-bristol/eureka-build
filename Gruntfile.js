module.exports = function(grunt) {

  var jsFileList = [
    '<%= meta.srcPath %>scripts/libs/jquery.1.11.1.js',
    '<%= meta.srcPath %>scripts/libs/respond.min.js',
    '<%= meta.srcPath %>scripts/application.js'
  ];

  // load all grunt tasks matching the `grunt-*` pattern
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    meta: {
      srcPath: 'src/',
      buildPath: 'assets/'
    },


    sprite:{
      all: {
        src: 'src/sprites/*.png',
        destImg: 'assets/sprites/sprite.png',
        destCSS: 'src/styles/_sprites.scss',
        'cssFormat': 'scss',
      }
    },

    // Sass: dev & build 
    sass: {
      dev: {
        options: {
          style: 'expanded',
          require: 'susy',
          sourcemap: true
        },
        files: {                         
          '<%= meta.buildPath %>styles/style.css': '<%= meta.srcPath %>styles/style.scss'
        }
      },
      build: {
        options: {
          style: 'compressed',
          require: 'susy',
          sourcemap: false
        },
        files: {                         
          '<%= meta.buildPath %>styles/style.css': '<%= meta.srcPath %>styles/style.scss'
        }
      }
    },

    // Concat: concatinates jsList
    concat: {
      options: {
        separator: ' ',
        stripBanners: true,
        banner: '/*! <%= meta.projectName %> - <%= grunt.template.today("yyyy-mm-dd") %> */',
      },
      dev: {
        src: [jsFileList],
        dest: '<%= meta.buildPath %>scripts/application.js',
      },
      build: {
        src: [jsFileList],
        dest: '<%= meta.buildPath %>scripts/application.min.js',
      }
    },

    // Copy: copies imgs,fonts,vids other to assets folder
    copy: {
      images: {
        files: [
          {expand: true, flatten: true, src: ['<%= meta.srcPath %>images/**',  '!<%= meta.srcPath %>images/**/*.psd'], dest: '<%= meta.buildPath %>images/', filter: 'isFile'}
        ]
      },
      fonts: {
        files: [
          {expand: true, flatten: true, src: ['<%= meta.srcPath %>fonts/**'], dest: '<%= meta.buildPath %>fonts/', filter: 'isFile'}
        ]
      },
      videos: {
        files: [
          {expand: true, flatten: true, src: ['<%= meta.srcPath %>videos/**'], dest: '<%= meta.buildPath %>videos/', filter: 'isFile'}
        ]
      },
    },

    // Imagemin: compresses images
    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: '<%= meta.buildPath %>images',
          src: ['**/*.{png,jpg,gif}'],
          dest: '<%= meta.buildPath %>images'
        }]
      }
    },

    // SVG min
    svgmin: { //minimize SVG files
      options: {
        plugins: [
          { removeViewBox: false },
          { removeUselessStrokeAndFill: false }
        ]
      },
      dist: {
        expand: true,
        cwd: '<%= meta.buildPath %>images/',
        src: ['*.svg'],
        dest: '<%= meta.buildPath %>images/'
      }
    },

    // Uglify 
    uglify: {
      options: {
        mangle: false
      },
      my_target: {
        files: {
          '<%= meta.buildPath %>scripts/application.min.js': '<%= meta.buildPath %>scripts/application.min.js',
        }
      }
    },

    // CSS min
    cssmin: {
      minify: {
        options: {
        },
        files: {
          '<%= meta.buildPath %>styles/style.css': '<%= meta.buildPath %>styles/style.css'
          }
      }
    },

    watch: {
      sass: {
        files: ['<%= meta.srcPath %>styles/**/*.scss'],
        tasks: ['sass:dev']
      },
      javascripts: {
        files: ['<%= meta.srcPath %>scripts/**/*.js'],
        tasks: ['concat']
      },
      images: {
        files: ['<%= meta.srcPath %>images/**/*.jpg','<%= meta.srcPath %>/images/**/*.png','<%= meta.srcPath %>/images/**/*.gif','<%= meta.srcPath %>/images/**/*.svg'],
        tasks: ['copy:images']
      },
      fonts: {
        files: ['<%= meta.srcPath %>fonts/**/*.*'],
        tasks: ['copy:fonts']
      },
      videos: {
        files: ['<%= meta.srcPath %>videos/**/*.*'],
        tasks: ['copy:videos']
      },
      sprite: {
      	files: ['<%= meta.srcPath %>images/sprites/*.png'],
      	tasks: ['sprite']
      }
    },

    // Clean
    clean: ["<%= meta.buildPath %>"]

  });

  // Default task.
  grunt.registerTask('default', ['sass:dev', 'concat:dev', 'copy', 'sprite']);

  // Build Task
  grunt.registerTask('build', ['clean', 'sass:build', 'concat:build', 'copy', 'imagemin', 'uglify', 'cssmin', 'svgmin', 'sprite']);

};