var gulp = require('gulp');
var stylus = require('gulp-stylus');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
var watch = require('gulp-watch');
var babel = require('gulp-babel');

var src = {
  styl: './src/stylus/index.styl'
};

var dist = {
  css: './public/css'
};

function buildCSS() {
  return gulp.src('./src/stylus/index.styl')
             //.pipe(watch('./src/stylus/**/*.styl'))
             .pipe(stylus())
             .pipe(autoprefixer())
             .pipe(gulp.dest('./public/css'));
}

function buildJS() {
  return gulp.src('./src/es/*.js')
             .pipe(babel({
               presets: ['es2015']
             }))
             .pipe(gulp.dest('./public/js'));
}

gulp.task('css', buildCSS);
gulp.task('js', buildJS);
