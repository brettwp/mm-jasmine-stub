var gulp = require('gulp');
var concat = require('gulp-concat');

var root = './source/javascripts/'

var build = function(source, destination) {
  console.log(root + source + '/*.js');
  gulp.src(root + source + '/*.js')
    .pipe(concat(destination))
    .pipe(gulp.dest(root));
}

gulp.task('build', function() {
  build('src', 'all.js');
  build('spec', 'spec.js');
});

gulp.task('watch', ['build'], function() {
  gulp.watch(root + '**/*.js', ['build']);
});
