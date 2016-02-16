var gulp = require('gulp');
var stylus = require('gulp-stylus');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');

var src = {
  styl: './src/stylus/index.styl'
};

var dist = {
  css: './public/css'
};

function buildCSS() {
  return gulp.src('./src/stylus/index.styl')
             .pipe(stylus())
             .pipe(autoprefixer())
             .pipe(gulp.dest('./public/css'));
}

gulp.task('css', buildCSS);
