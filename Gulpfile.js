'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('./application/styleSheets/sass/**/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./styleSheets/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./application/styleSheets/sass/**/*.sass', ['sass']);
});
