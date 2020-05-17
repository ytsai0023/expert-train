const gulp = require('gulp');
const sass = require('gulp-sass');
const watch = require('gulp-watch');
const browserSync = require('browser-sync');
const template = require('gulp-template');
const data = require('gulp-data');
var nunjucksRender = require('gulp-nunjucks-render');
const {header,footer,links}= require("./source/template/component/components");
const reload = browserSync.reload;
const app_data = require('./source/data/data.json');



gulp.task('sass',function(){
    return watch('./source/scss/**/*.scss',function(){
        gulp.src(['./source/scss/**/*.scss','./src/scss/**/_*.scss'])
        .pipe(sass().on('error',sass.logError))
        .pipe(gulp.dest('./public/css'))
        .pipe(browserSync.stream())
    })
})


gulp.task('template',function(){
    return watch(['./source/template/**/*.html'],function(){
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

gulp.task('nunjucks',function(){
   
   return  watch(['./source/template/**/*.html'],function(){
    gulp.src('./source/template/**/*.html')
    .pipe(data(function(){
        return app_data
    }))
    .pipe(nunjucksRender({
        path: [
            './source/template/weekThree/'
            ,'./source/template/weekFour/'
            ,'./source/templates/_layout-w4.html'],
        watch: true
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

gulp.task('default',gulp.parallel('sass','nunjucks','browser-sync'))





