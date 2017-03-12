const gulp = require('gulp');
const babel = require('gulp-babel');
const mocha = require('gulp-mocha');
const eslint = require('gulp-eslint');
const uglify = require('gulp-uglify');

const handleError = function () {
  this.emit('end');
};
gulp.task('build', () => {
  return gulp.src('src/**/*.js')
    .pipe(babel({
      presets: ['es2015', 'es2016', 'es2017'],
      plugins: [
        "transform-decorators-legacy",
        "transform-class-properties",
        "transform-object-rest-spread"
      ],
    }))
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

gulp.task('test', () =>
  gulp.src('test/**/*.js', {read: false})
    .pipe(mocha({reporter: 'min'}))
    .on('error', handleError));

gulp.task('lint', () =>
  gulp.src('src/**/*.js')
    .pipe(eslint({
      parser: 'babel-eslint',
      rules: {
        'no-console': 2,
      },
      envs: ['node',],
    }))
    .pipe(eslint.formatEach('unix', console.error)));
