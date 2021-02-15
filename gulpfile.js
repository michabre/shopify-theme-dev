"use strict";

const { src, dest, parallel, watch } = require("gulp");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const sass = require("gulp-sass");
sass.compiler = require("node-sass");
const plumber = require("gulp-plumber");
const postcss = require("gulp-postcss");
const rename = require("gulp-rename");
const concat = require("gulp-concat");
const minify = require("gulp-minify");
const uglify = require("gulp-uglify");

// directories
const dir = {
  scss: [
    "node_modules/bulma/bulma.sass",
    "node_modules/swiper/swiper-bundle.css",
    "src/scss/*.scss",
  ],
  js: [
    "node_modules/swiper/swiper-bundle.min.js",
    "src/js/dependencies/*.js",
    "src/js/*.js",
  ],
  styles: "assets/",
  scripts: "assets/",
};

// CSS task
function styles() {
  return src(dir.scss)
    .pipe(plumber())
    .pipe(sass({ outputStyle: "expanded" }))
    .pipe(concat("main.css.liquid"))
    .on("error", sass.logError)
    .pipe(dest(dir.styles))
    .pipe(rename({ suffix: ".min" }))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(dest(dir.styles));
}

// JS task
function scripts() {
  return src(dir.js)
    .pipe(concat("main.js"))
    .pipe(
      minify({
        ext: {
          min: ".js",
        },
      })
    )
    .pipe(uglify())
    .pipe(dest(dir.scripts));
}

// exports
exports.styles = styles;
exports.scripts = scripts;
exports.default = parallel(styles, scripts);
