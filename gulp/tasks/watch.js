var gulp = require("gulp"),
php = require('gulp-connect-php'),
watch = require("gulp-watch"),
del = require("del"),
browserSync = require("browser-sync").create();

gulp.task("watch", ['php'], function(){

	browserSync.init({
        proxy: '127.0.0.1:8010',
        port: 8080,
        open: true,
        notify: false
    });

	watch("./user/pages/**/**/*.md", function(){
		browserSync.reload();
	});

	watch("./user/themes/john/assets/styles/**/*.css", function(){
		gulp.start("cssInject");
	});

	watch("./user/themes/john/assets/scripts/**/*.js", function(){
		gulp.start("scriptsRefresh");
	});
	
	watch("./user/themes/john/templates/**/*.twig", function(){
		gulp.start("cacheRefresh");
	});

});

gulp.task("cssInject", ["styles"], function(){
	return gulp.src("./user/themes/john/assets/temp/styles/styles.css")
		.pipe(browserSync.stream());
});

gulp.task("scriptsRefresh", ["scripts"], function(){
	browserSync.reload();
});

gulp.task('php', function() {
    php.server({ base: '.', router: './system/router.php', port: 8010, keepalive: true});
});

gulp.task('clearCache', function(){
	return del(["./cache/"]);
});

gulp.task("cacheRefresh", ["clearCache"], function(){
	browserSync.reload();
});

