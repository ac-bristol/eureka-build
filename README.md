eureka-build
============

An easy to install, base build project utlising NPM and Grunt, Sass, Compass, Image spriting<br />
JS hint, Uglify and concat.

Getting started!
================

1. Make sure you have latest version of Compass installed. If its not installed, visit the website<br />
for more details: http://compass-style.org/install/

2. Install node dependencies using the following command:<br />
<code>npm install</code>

3. The <code>src</code> folder is where all working styles/scripts/png images will be placed.<br /> 
The <code>assets<code> folder is where all compiled code will be dropped. This is the only<br />
folder you will need when deploying a site using <strong>eureka-build</strong>.

4. To compile your code, run one of the following commands:<br />

<code>grunt development</code><br />
<code>grunt build</code><br />

5. The watch command will look for changes made to your styles, scripts or pngs placed <br />
in the sprite folder:

<code>grunt watch</code><br /><br />
Use <code>ctrl+c</code> to cancel this command<br /><br />

6. To add more js libraries, drop them into the <code>libs</code> folder and then add them to the<br />
grunt file in the <code>jsFileList</code>  array.


=================
Thats it! Have fun and feel free to suggest more useful web development libraries


