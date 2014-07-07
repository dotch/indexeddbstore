/* jshint node:true */
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var header = require('gulp-header');
var pkg = require('./package.json');


var paths = {
  'dist': 'dist/',
  'src': 'src/*.js',
  'test': ['test/*.js']
};

var banner = ['/**',
  ' * <%= pkg.name %> - <%= pkg.description %>',
  ' * @version v<%= pkg.version %>',
  ' * @link <%= pkg.homepage %>',
  ' * @license <%= pkg.license %>',
  ' */',
  ''].join('\n');

gulp.task('build', function() {
  return gulp.src(paths.src)
    .pipe(uglify())
    .pipe(concat('indexeddbstore.min.js'))
    .pipe(header(banner, { pkg : pkg } ))
    .pipe(gulp.dest(paths.dist));
});

gulp.task('copy', function() {
  return gulp.src(paths.src)
    .pipe(concat('indexeddbstore.js'))
    .pipe(header(banner, { pkg : pkg } ))
    .pipe(gulp.dest(paths.dist));
});

gulp.task('default', ['build','copy']);