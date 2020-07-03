//导入插件
let gulp = require('gulp');
let cssnano = require('gulp-cssnano');
let rename = require('gulp-rename');
let uglify = require('gulp-uglify');
let imagemin = require('gulp-imagemin');
//创建任务
function fnJS(){
    return gulp.src('./src/js/*.js')
        .pipe(uglify())
        .pipe(rename({suffix : '.min'}))
        .pipe(gulp.dest('dist/js'))
}
function fnimg(){
    return gulp.src('src/img/*')
    .pipe(imagemin())
    .pipe(rename({suffix : '.min'}))
    .pipe(gulp.dest('dist/img'))

}
exports.fnImg = fnimg;
function fnWatch(){
    gulp.watch('./src/js/*.js',fnJS);
    gulp.watch('./src/img/*',fnimg)
}
//导出任务

exports.all = gulp.series(fnWatch,fnJS,fnimg)
