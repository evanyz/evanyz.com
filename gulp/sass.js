var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var autoprefixer = require('autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
//var rename = require("gulp-rename");
var sass = require('gulp-sass');
//var csslint = require('gulp-csslint');
//require('es6-promise');
var myPath = require('./path.js');
var postcss = require('gulp-postcss');

// == Compile main.scss ==
gulp.task('sass',function(){
	return gulp.src(myPath.src.sassMain)
		.pipe(sass().on('error',sass.logError))
		.pipe(sourcemaps.init())
  		.pipe(postcss([ autoprefixer()]))
		//.pipe(cleanCSS({compatibility: 'ie8'})) //minify css
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(myPath.dst.cssMain));
});

//css lint
	//gulp csslint | tee csslint.txt
// gulp.task('csslint', function() {
//   //gulp.src(path.allcss.src)
//   gulp.src('./skin/frontend/royal/default/css/*.css')
//     .pipe(csslint())
//     .pipe(csslint.formatter())
//     //.pipe(csslint.formatter('fail'))
//     .pipe(gulp.dest('./skin/frontend/royal/default/css/report.txt'));
// });

