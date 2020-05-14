const gulp = require('gulp');
const sass = require('gulp-sass');
const watch = require('gulp-watch');
const browserSync = require('browser-sync');
const template = require('gulp-template');
const data = require('gulp-data');
var ejs = require('gulp-ejs')
var log = require('fancy-log')
const {header,footer,links}= require("./source/template/component/components");
const reload = browserSync.reload;



gulp.task('sass',function(){
    return watch('./source/scss/**/*.scss',function(){
        gulp.src(['./source/scss/**/*.scss','./src/scss/**/_*.scss'])
        .pipe(sass().on('error',sass.logError))
        .pipe(gulp.dest('./public/css'))
        .pipe(browserSync.stream())
    })
})


gulp.task('template',function(){
    return watch('./source/template/**/*.html',function(){
        gulp.src(['./source/template/**/*.html','./source/template/**/*.js'])
        .pipe(template({
            header
           ,footer
           ,links
        }))
        .pipe(gulp.dest('./public'))
        .pipe(browserSync.stream())
    })

})

gulp.task('browser-sync',function (){
    browserSync.init({
        server:'./public',
        notify:true,
        open:true
    })
})

gulp.task('default',gulp.parallel('sass','template','browser-sync'))





