/// <binding ProjectOpened='default' />
var gulp = require('gulp');
var tslint = require("gulp-tslint");
var tsd = require('gulp-tsd');
var ts = require('gulp-typescript');
var ngmin = require('gulp-ngmin');
var concat = require('gulp-concat');
var runSequence = require('run-sequence');

//gulp.task('default', ['tslint', 'ts', 'concat'], function () {
//});

gulp.task('ts', function () {
    return gulp.src('App/**/*.ts')
		.pipe(ts({
                noImplicitAny: false,
                out: 'output.js'
		}))
        //.pipe(ngmin({ dynamic: true }))
		.pipe(gulp.dest('dist'));
});

gulp.task('concat', function () {
    return gulp.src([
            'wwwroot/lib/angular/angular.min.js',
            'wwwroot/lib/angular-route/angular-route.min.js',
            'wwwroot/lib/angular-messages/angular-messages.min.js',
            'wwwroot/lib/angular-ui-bootstrap-bower/ui-bootstrap-tpls.min.js',
            'wwwroot/lib/jsonix/dist/Jsonix-min.js',
            'wwwroot/lib/vkbeautify/vkbeautify.js',
            'Schema/*.js', 'dist/*.js'])
      .pipe(concat('app.js'))
      .pipe(gulp.dest('wwwroot/'));
});

gulp.task("tslint", () =>
    gulp.src("App/**/*.ts")
        .pipe(tslint())
        .pipe(tslint.report({
        summarizeFailureOutput: true
    }))
);

gulp.task('tsd', function (callback) {
    tsd({
        command: 'reinstall',
        config: './tsd.json'
    }, callback);
});

gulp.task('default', [],
    function(cb) {
        runSequence(['ts', 'concat'], cb);
    });