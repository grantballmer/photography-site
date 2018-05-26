let gulp = require('gulp');
let sass = require('gulp-sass');
let postcss = require('gulp-postcss')
let autoprefixer = require('gulp-autoprefixer');

let input = "./scss/*.scss";
let output = "./css";

gulp.task('sass', function () {
  gulp.src(input)
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest(output));
});