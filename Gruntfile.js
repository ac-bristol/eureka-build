module.exports = function(grunt) {
  var jsFileList = [
    '<%= meta.srcPath %>javascript/libs/jquery.1.11.1.js',
    '<%= meta.srcPath %>javascript/libs/respond.min.js'
  ];
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    meta: {
      srcPath: 'src/',
      buildPath: 'assets/',
      projectName: '',
      projectNameSpace: '',
    },
    concat: {
      options: {
        stripBanners: false,
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
          '<%= grunt.template.today("yyyy-mm-dd") %> */',
      },
      dist: {
        src: [jsFileList],
        dest: '<%= meta.buildPath %>javascript/build.js',
      },
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: '<%= meta.srcPath %>javascript/main.js',
        dest: '<%= meta.buildPath %>javascript/main.min.js'
      }
    },
    sprite:{
      all: {
        src: 'src/images/sprites/*.png',
        destImg: 'assets/images/sprite.png',
        destCSS: 'src/scss/_sprites.scss',
        'cssFormat': 'scss',
      }
    },
    compass: {
      dev: {
          options: {              
            sassDir: '<%= meta.srcPath %>scss',
            cssDir: '<%= meta.buildPath %>styles',
            imagesDir: '<%= meta.buildPath %>images',
            javascriptsDir: '<%= meta.buildPath %>scripts',    
            fontsDir: '<%= meta.buildPath %>fonts',
            outputStyle: 'expanded',
            sourcemap: true
          }
      },
      build: {
        options: {              
          sassDir: '<%= meta.srcPath %>scss',
          cssDir: '<%= meta.buildPath %>styles',
          imagesDir: '<%= meta.buildPath %>images',
          javascriptsDir: '<%= meta.buildPath %>scripts',    
          fontsDir: '<%= meta.buildPath %>fonts',
          outputStyle: 'compressed',
          environment: 'production'
        }
      },
    },
    watch: {
      uglify: {
        files: ['<%= meta.srcPath %>javascript/main.js'],
        tasks: ['uglify'],
      },
      sass: {
        files: ['<%= meta.srcPath %>scss/*.scss'],
        tasks: ['compass:dev'],
      },
      sprite: {
      	files: ['<%= meta.srcPath %>images/sprites/*.png'],
      	tasks: ['sprite']
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-spritesmith');

  // Default task.
  grunt.registerTask('default', ['compass:dev','concat', 'sprite']);

  // Build Task
  grunt.registerTask('build', ['compass:build','uglify', 'concat', 'sprite']);

};