const gulp = require('gulp');
const concat = require('gulp-concat');
const sass = require('gulp-sass');

gulp.task('scss', () => {
	gulp.src(cssFilePaths)
		.pipe(sass({ outputStyle: 'compressed' }))
		.pipe(concat('index.css'))
		.pipe(gulp.dest('dist'));
});

gulp.task('build', () => {
	gulp.series(
		gulp.task('scss')
	)();
});

gulp.task('watch', () => {
	gulp.watch(cssFilePaths, gulp.series('build'));
});

const cssFilePaths = [];
