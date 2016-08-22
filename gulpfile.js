var gulp = require('gulp');
var sass = require('gulp-sass');
var babel = require('gulp-babel');
var react = require('gulp-react');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('scss', function () {
    var path = './';
    return gulp.src(path + '*.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['iOS >= 7', 'Android >= 4.0'],
            remove: false
        }))
        .pipe(gulp.dest(path + 'dist'))
});

gulp.task('react', function () {
    var path = './';
    return gulp.src(path + '*.jsx')
        .pipe(react({harmony: false, es6module: true}))
        .pipe(babel())
        .pipe(gulp.dest(path + 'dist'))
});

gulp.task('default', function () {
    gulp.run('scss');
    gulp.run('react');
});