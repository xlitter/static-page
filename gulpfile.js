var gulp = require('gulp'),
	browserSync = require('browser-sync').create();


gulp.task('watch', function(){
	browserSync.init({
		server: './static'
	});
	
	gulp.watch('static/**/*.html').on('change', browserSync.reload);
	
});
