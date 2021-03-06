const del = require("del");
const gulp = require("gulp");
const config = require("../paths");
require("./translations");

gulp.task(
  "clean",
  gulp.parallel("clean-translations", function cleanOutputAndBuildDir() {
    return del([config.root, config.build_dir]);
  })
);
gulp.task(
  "clean-demo",
  gulp.parallel("clean-translations", function cleanOutputAndBuildDir() {
    return del([config.demo_root, config.build_dir]);
  })
);
