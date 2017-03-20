'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('./styleSheets/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./styleSheets/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./styleSheets/sass/**/*.scss', ['sass']);
});