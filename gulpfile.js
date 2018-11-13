var gulp = require("gulp");
var sass = require("gulp-sass");
var plumber = require("gulp-plumber");
var browserSync = require("browser-sync");
var notify = require("gulp-notify");
var pug = require("gulp-pug");

gulp.task('default', ['sass', 'browser-sync', 'pug', 'watch']);

//sassとpugの監視をして変換処理させる
gulp.task('watch', () => {
  gulp.watch(['./dev/sass/**'], () => {
    gulp.start(['sass']);
  });
  gulp.watch(['./dev/pug/**'], () => {
    gulp.start(['pug']);
  });
});

//ブラウザ表示
gulp.task('browser-sync', () => {
  browserSync({
    server: {
      baseDir: "./master"   //サーバとなるrootディレクトリ
    }
  });
  //ファイルの監視
  //以下のファイルが変わったらリロードする
  gulp.watch("./master/js/**/*.js",     ['reload']);
  gulp.watch("./master/*.html",         ['reload']);
});

//sassをcssに変換
gulp.task("sass", () => {
  gulp.src("./dev/sass/**/*scss")
    .pipe(plumber({
      errorHandler: notify.onError("Error: <%= error.message %>")
    }))
    .pipe(sass())
    .pipe(gulp.dest("./master/css"))
  //reloadせずにinjectする
    .pipe(browserSync.stream())
});

//pugをhtmlに変換
gulp.task("pug", () => {
  var option = {
    pretty: true
  }
  gulp.src("./dev/pug/**/*.pug")
    .pipe(plumber({
      errorHandler: notify.onError("Error: <%= error.message %>")
    }))
    .pipe(pug(option))
    .pipe(gulp.dest("./master/"))
});

//ブラウザリロード処理
gulp.task('reload', () => {
  browserSync.reload();
});
