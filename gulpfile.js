var gulp = require('gulp');
var sass = require('gulp-sass');
var babel = require('gulp-babel');
var react = require('gulp-react');
var autoprefixer = require('gulp-autoprefixer');



gulp.task('scss', function () {
    gulp.src('src/scss/*.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['iOS >= 7', 'Android >= 4.0'],
            remove: false
        }))
        .pipe(gulp.dest('dist'))
});



gulp.task('react', function () {
    return gulp.src('src/*.jsx')
        // .pipe(react({harmony: false, es6module: true}))
        .pipe(babel({
            presets: ['es2015', 'react']
        }))
        .pipe(gulp.dest('dist'))
});


gulp.task('default', ['scss', 'react']);