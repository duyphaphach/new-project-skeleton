'use strict';

var gulp = require('../gulp.js'),
    gutil = require('gulp-util'),
    mainBowerFiles = require('main-bower-files'),
    notifier = require('node-notifier'),
    concat = require('gulp-concat'),
    removeComma = require('gulp-trailing-comma'),
    size = require('gulp-size'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename')
;

var sizeOptions = {
    showFiles: true
};

gulp.task('scripts:vendors:compile', function(){
    return gulp
        .src(mainBowerFiles({
            filter: ['**/*.js']
        }))
        .pipe(concat('vendors.js'))
        .pipe(removeComma())
        .pipe(size(sizeOptions))
        .pipe(gulp.dest(config.paths.relative.sourceScripts))
        .on('end', function(){
            notifier.notify({message: 'Compile vendors packages successfully'});
            gutil.log(gutil.colors.green('Compile vendors packages successfully'));
        })
});

gulp.task('scripts:legacy:vendors:compile', function () {
  return gulp
    .src(config.scripts.legacyVendors)
    .pipe(concat('legacy-vendors.js'))
    .pipe(removeComma())
    .pipe(size(sizeOptions))
    .pipe(gulp.dest(config.paths.relative.sourceScripts))
    .on('end', function () {
      notifier.notify({ message: 'Compile vendors packages successfully' });
      gutil.log(gutil.colors.green('Compile vendors packages successfully'));
    })
});

gulp.task('production:scripts:vendors:compile', function () {
    return gulp
        .src(mainBowerFiles({
            filter: ["**/*.js"]
        }))
        .pipe(size(sizeOptions))
        .pipe(concat('vendors.js'))
        //remove commas
        .pipe(removeComma())
        .pipe(uglify())
        .pipe(gulp.dest(config.paths.relative.sourceScripts))
        .pipe(size(sizeOptions))
        ;
});

gulp.task('production:scripts:legacy:vendors:compile', function () {
  return gulp
    .src(config.scripts.legacyVendors)
    .pipe(concat('legacy-vendors.js'))
    .pipe(removeComma())
    .pipe(size(sizeOptions))
    .pipe(uglify())
    .pipe(size(sizeOptions))
    .pipe(gulp.dest(config.paths.relative.sourceScripts))
    .on('end', function () {
      notifier.notify({ message: 'Compile vendors packages successfully' });
      gutil.log(gutil.colors.green('Compile vendors packages successfully'));
    })
});

gulp.task('vendors:compile', function() {
  gulp.start('scripts:legacy:vendors:compile');
  gulp.start('scripts:vendors:compile');
});

gulp.task('production:vendors:compile', function() {
  gulp.start('production:scripts:legacy:vendors:compile');
  gulp.start('production:scripts:vendors:compile');
});
