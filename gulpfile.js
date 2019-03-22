var gulp = require('gulp');

//css压缩
var minify = require('gulp-minify-css');

//js压缩
var uglify = require("gulp-uglify");

//图片压缩
var imageMin = require('gulp-imagemin');
var pngcrush = require('imagemin-pngcrush');

//js 代码检验工具jshint stylish
var hint = require("gulp-jshint");
var stylish = require("jshint-stylish");

//监听工具
var browserSycn = require("browser-sync");
var reload = browserSycn.reload;

gulp.task('default',["script","style","image"], function () {
    // 将你的默认的任务代码放在这
    browserSycn.init({
        server: {
            base: "/",
            index: "index.html"
        },
        open: true
    });
    //通过watch方法监控文件变化
    gulp.watch("./src/script/**/*.js",["script"]);
    gulp.watch("./src/css/**/*.css",["style"]);
    gulp.watch("./src/img/*.{jpg,png,gif}",["image"]);

    //监听页面修改
    gulp.watch("*.html").on("change", reload);
    
});

//构建js文件
gulp.task("script",function(){
    gulp.src("./src/script/**/*.js")
        // .pipe(hint())
        // .pipe(hint.reporter(stylish))
        // .pipe(hint.reporter('fail'))
        .pipe(uglify())
        .pipe(gulp.dest("./dest/script"))
        .pipe(browserSycn.stream())
})

//构建style文件
gulp.task("style",function(){
    gulp.src("./src/css/**/*.css")
        .pipe(minify())
        .pipe(gulp.dest("./dest/css"))
        .pipe(browserSycn.stream())
})

//构建图片文件
gulp.task("image",function(){
    gulp.src("./src/img/*.{jpg,png,gif}")
        .pipe(imageMin({
            optimizationLevel: 7,
            progressive: true,
            interlaced: true,
            multipass: true,
            use: [pngcrush()]
        }))
        .pipe(gulp.dest("./dest/img"))
        .pipe(browserSycn.stream())
})
