const gulp = require('gulp');
const sass = require('gulp-sass');
const watch = require('gulp-watch');
const browserSync = require('browser-sync');
const reload = browserSync.reload;


// gulp.task('sass',function(){
//     return gulp.src('./src/scss/**/*.scss')
//         .pipe(sass().on('error',sass.logError))
//         .pipe(gulp.dest('./public/css'))
   
// })

gulp.task('sass',function(){
    return watch('./source/scss/**/*.scss',function(){
        gulp.src(['./source/scss/**/*.scss','./src/scss/**/_*.scss'])
        .pipe(sass().on('error',sass.logError))
        .pipe(gulp.dest('./public/css'))
        .pipe(browserSync.stream())
    })
})

gulp.task('browser-sync',function (){
    browserSync.init({
        server:'./public',
        notify:false,
        open:true
    })
})

gulp.task('default',gulp.parallel('sass','browser-sync'))




