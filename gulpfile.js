
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var autoprefixer= require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var concatCss = require('gulp-concat-css');


gulp.task('html', function() {
  return gulp.src('./app/index.html')
      .pipe(gulp.dest('./public'))
      .pipe(browserSync.stream());
})
gulp.task('css',
  function() {
    return gulp.src('./app/bundle.css')
        .pipe(cleanCSS())
        .pipe(autoprefixer())
        .pipe(gulp.dest('./public'))
        .pipe(browserSync.stream());
  });
gulp.task('concat', function () {
  return gulp.src('./app/styles/*.css')
    .pipe(concatCss('bundle.css'))
    .pipe(gulp.dest('./app'));
});
gulp.task('serve', function() {
  browserSync.init({
      server: './public',
      notify: false,
      tunnel: true
  });
  gulp.watch('./app/styles/*.css', gulp.series('concat', 'css'));
  gulp.watch('./app/*.html', gulp.series('html'));
});

gulp.task('default', gulp.series('html', 'concat', 'css', 'serve'));
