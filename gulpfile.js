var gulp = require('gulp');
var sass = require('gulp-sass');

// Compile SCSS to css and minify
gulp.task('sass', function () {
    return gulp.src('./public/content/**/**/**/*.scss')
      .pipe(sass.sync().on('error', sass.logError))
      .pipe(gulp.dest('./public/css'));
});

gulp.task('copyfonts', function () {
    gulp.src('./public/content/font-awesome/fonts/**/*.{ttf,woff,eof,svg,eot,otf,woff2}')
    .pipe(gulp.dest('./public/css/fonts'));
});