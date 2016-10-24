var gulp = require('gulp');
var sass = require('gulp-sass');
var ts = require('gulp-typescript');
var del = require('del');
var runSequence = require('run-sequence');
var browserSync = require('browser-sync').create();

gulp.task('build', function() {
	runSequence(
		'clean:dist',
		['sass', 'typescript'],
		'copy',
		() => console.log("Build Complete."));
});

gulp.task('dev', ['browserSync', 'build'], function() {
	gulp.watch('src/app/**/*.scss', ['build']);
	gulp.watch('src/**/*.html', ['build']);
	gulp.watch('src/app/**/*.ts', ['build']);
});

gulp.task('copy', function() {
	gulp.src(['src/**/*.html', 'src/**/*.css', 'src/**/*.js'])
	.pipe(gulp.dest('dist'))
	.pipe(browserSync.reload({
		stream: true
	}));
});

gulp.task("libs", () => {
    return gulp.src([
            'core-js/client/shim.min.js',
            'systemjs/dist/system-polyfills.js',
            'systemjs/dist/system.src.js',
            'reflect-metadata/Reflect.js',
            'rxjs/**',
            'zone.js/dist/**',
            '@angular/**'
        ], {cwd: "node_modules/**"}) /* Glob required here. */
        .pipe(gulp.dest("dist/node_modules"));
});

gulp.task('clean:dist', function() {
  return del.sync(['dist/**', '!dist', '!dist/node_modules/**']);
});

gulp.task('clean:src:css', function() {
	return del.sync('src/**/*.css');
});

gulp.task('clean:src:js', function() {
	return del.sync(['src/**/*.js', '!src/systemjs.config.js']);
});

gulp.task('sass', function() {
	return gulp.src('src/**/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('dist'));
});

gulp.task('typescript', function() {
	return gulp.src('src/**/*.ts')
		.pipe(ts({
			noImplicitAny: true,
			experimentalDecorators: true,
			isolatedModules: true
		}))
		.pipe(gulp.dest('dist'));
});

gulp.task('browserSync', function() {
	browserSync.init({
		server: {
			baseDir: 'dist'
		},
	});
});