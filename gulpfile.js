'use strict';

var gulp = require('gulp');
var babel = require('gulp-babel');

function build(){
  return gulp.src('src/*.js')
    .pipe(babel())
    .pipe(gulp.dest('./'));
}

gulp.task('default', build);
