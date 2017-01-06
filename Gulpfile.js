'use strict';

var childProcess = require('child_process');
var electron = require('electron');
var gulp = require('gulp');
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");
var jetpack = require('fs-jetpack');
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');
var minify = require('gulp-minify');
var os = require('os');

var projectDir = jetpack;
var srcDir = projectDir.cwd('./app');
var destDir = projectDir.cwd('./build');

// -------------------------------------
// Tasks
// -------------------------------------

gulp.task('clean', function (callback) {
  return destDir.dirAsync('.', {
    empty: true
  });
});

gulp.task('copy', ['clean'], function () {
  return projectDir.copyAsync('app', destDir.path(), {
    overwrite: true,
    matching: [
      './node_modules/**/*',
      '*.html',
      '*.css',
      '*.gif',
      '*.png',
      '*.jpg',
      '*.jpeg',
      '*.js',
      '*.ico',
      '*.json',
      'main.js',
      'package.json'
    ]
  });
});

gulp.task('build', ['copy'], function () {
  return tsProject.src('./app/index.html')
    .pipe(tsProject())
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('build/'));
});

gulp.task('run', function () {
  childProcess.spawn(electron, ['./app'], {
    stdio: 'inherit'
  });
});
