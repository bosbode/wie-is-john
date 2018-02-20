var gulp = require('gulp'),
php = require('gulp-connect-php'),
watch = require('gulp-watch'),
del = require('del'),
browserSync = require('browser-sync').create(),
config = require('../config.json');

gulp.task('watch', ['clearCompiled', 'php', 'clearCache', 'scripts', 'styles'], function(){

	browserSync.init({
        proxy: '127.0.0.1:8010',
        port: 8080,
        open: true,
        notify: false
    });

	watch('./user/pages/**/**/*.md', function(){
		browserSync.reload();
	});

	watch('./user/themes/' + config.theme + '/assets/styles/**/*.scss', function(){
		gulp.start('cssInject');
	});

	watch('./user/themes/' + config.theme + '/assets/scripts/**/*.js', function(){
		gulp.start('scriptsRefresh');
	});
	
	watch(['./user/themes/' + config.theme + '/templates/**/*.twig', './user/pages/**/*'], function(){
		gulp.start('cacheRefresh');
	});

});

gulp.task('cssInject', ['styles'], function(){
	return gulp.src('./user/themes/' + config.theme + '/assets/compiled/styles/main.css')
		.pipe(browserSync.stream());
});

gulp.task('scriptsRefresh', ['scripts'], function(){
	browserSync.reload();
});

gulp.task('php', function() {
    php.server({ base: '.', router: './system/router.php', port: 8010, keepalive: true});
});

gulp.task('clearCache', function(){
	return del(['./cache/']);
});

gulp.task('clearCompiled', function(){
	return del(['./user/themes/' + config.theme + '/assets/compiled']);
});

gulp.task('cacheRefresh', ['clearCache'], function(){
	browserSync.reload();
});

gulp.task('default', function () {
	gulp.start('watch');
});

