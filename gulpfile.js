var gulp = require("gulp");
var browsersync = require("browser-sync").create();
var sass = require("gulp-sass")(require("sass"));

//Compilar o Sass
gulp.task(
  "sass",
  gulp.series(function () {
    return (
      gulp
        .src([
          // "node_modules/bootstrap/scss/bootstrap.scss"
          "scss/*.scss",
        ])
        // .pipe(sass())
        .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
        .pipe(gulp.dest("css"))
        .pipe(browsersync.stream())
    );
  }),
);

//mover js para src.js
gulp.task(
  "js",
  gulp.series(function () {
    return gulp
      .src([
        "node_modules/bootstrap/dist/js/bootstrap.js",
        "node_modules/jquery/dist/jquery.js",
        "node_modules/popper.js/dist/umd/popper.js",
        "jsx/*.js",
      ])
      .pipe(gulp.dest("js"))
      .pipe(browsersync.stream());
  }),
);

//servidor para olhar os Html /scss
gulp.task(
  "server",
  gulp.series(["sass"], function () {
    browsersync.init({
      server: "./",
    });

    gulp.watch(
      ["node_modules/bootstrap/scss/*.scss", "scss/*.scss", "jsx/*.js"],
      gulp.parallel(["sass"]),
    );
    gulp
      .watch(["*.html", "css/style.css", "jsx/*.js"])
      .on("change", gulp.parallel(browsersync.reload));
  }),
);

gulp.task("default", gulp.series(["js", "server"]));
