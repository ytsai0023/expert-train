var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass',function(){
    return gulp.src('./src/scss/**/*.scss')
        .pipe(sass().on('error',sass.logError))
        .pipe(gulp.dest('./public/css'))
})







/***Sampel***/

// gulp.task("printName",function(){
//     console.log("My name is Jeo");
// })

// gulp.task("printAge",function(){
//     console.log("My Age is 20");
// })

// gulp 3
//gulp.task('default',['printName','printAge']);

//gulp 4
// gulp.task('default',gulp.parallel('printName','printAge'));
// gulp.task('default',gulp.series(gulp.parallel('printName','printAge')));

