// Name: Yifan Zhou , Email: yifan@evanyz.com

// ==== Require Statement ====
var gulp = require('gulp');
var requireDir = require('require-dir');
var myPath = require('./gulp/path');

// Command line option:
//  --fatal=[warning|error|off]
//var fatalLevel = require('yargs').argv.fatal;

// ==== Paths Array ====
requireDir('./gulp');


//watch
gulp.task('watch',function () {
	gulp.watch(myPath.src.sassAll,['sass']);

});

// === release Sass on server ===
gulp.task('release', ['sass']);
