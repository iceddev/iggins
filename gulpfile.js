'use strict';

var gulp = require('gulp');
var babel = require('gulp-babel');
var rename = require('gulp-rename');
var gulpDocDown = require('gulp-docdown');

function build(){
  return gulp.src('src/*.js')
    .pipe(babel())
    .pipe(gulp.dest('./'));
}

function docs(){
  var outputType = 'md';
  var username = 'iceddev';
  var project = 'iggins';
  return gulp.src('./src/*.js')
    .pipe(gulpDocDown({
        title: 'API documentation / {fileName}',
        url: 'https://github.com/' + username + '/' + project + '/blob/master/{filePath}',
        toc: 'properties',
        outputType : outputType,
    }))
    .pipe(rename({
        extname: '.' + outputType
    }))
    .pipe(gulp.dest('./docs/'));
}

gulp.task('docs', docs);
gulp.task('default', build);
