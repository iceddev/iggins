'use strict';

var gulp = require('gulp'),
    babel = require('gulp-babel');

function build(){
  return gulp.src("src/*.js")
    .pipe(babel())
    .pipe(gulp.dest("./"));
}

gulp.task("default", build);