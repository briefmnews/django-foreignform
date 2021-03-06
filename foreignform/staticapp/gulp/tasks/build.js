const gulp = require('gulp');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const prodConfig = require('../../webpack-prod.config.js');


module.exports = () =>
  gulp.src('src/js/main-change.js')
    .pipe(webpackStream(prodConfig, webpack))
    .pipe(gulp.dest('./../static/foreignform/'))
    .on('end', () => {
      process.exit();
    });
