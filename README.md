eureka-build
============

An easy to install, base build project utlising NPM and Grunt, Sass, Compass, Image spriting<br />
JS hint, Uglify and concat.

Getting started!
================

1. Make sure you have latest version of Compass installed. If its not installed, visit the website<br />
for more details: http://compass-style.org/install/

2. Install node dependencies using the following command:<br /><br />
<code>npm install</code>

3. The <code>src</code> folder is where all working styles/scripts/png images will be placed. The <code>assets</code> folder is where all compiled code will be dropped. This is the only
folder you will need when deploying a site using <strong>eureka-build</strong>.

4. To compile your code, run one of the following commands:<br /><br />
<code>grunt development</code><br />
<code>grunt build</code><br />

5. The watch command will look for changes made to your styles, scripts or pngs placed in the sprite folder:<br /><br />
<code>grunt watch</code><br /><br />
Use <code>ctrl+c</code> to cancel this command
<br /><br />
6. To add more js libraries, drop them into the <code>libs</code> folder and then add them to the grunt file in the <code>jsFileList</code> array. They will be compiled into a js file called <code>build.js</code>.
<br />
<br />
7. All pngs that you want to be sprited, need to be dropped into the sprites folder located <code>src/images/sprites/</code>. They will then be combined into a sprite png located in the <code>assets</code> folder along with the relevant Sass code<br />
located in the sprite style sheet <code>_sprite.scss</code>.

=================
Thats it! Have fun and feel free to suggest more useful web development libraries.

Credit:
- Sass http://sass-lang.com/
- Grunt http://gruntjs.com/
- Compass http://compass-style.org
- Sprite smith https://github.com/Ensighten/grunt-spritesmith
- Uglify https://www.npmjs.org/package/grunt-contrib-uglify
- Watch https://github.com/gruntjs/grunt-contrib-watch
- Concatenate https://github.com/gruntjs/grunt-contrib-concat
- JSHint https://github.com/gruntjs/grunt-contrib-jshint
- CSSLint https://github.com/gruntjs/grunt-contrib-csslint

More info can be found here: www.andrew-cocker.co.uk



