var gulp = require("gulp"),
modernizr = require("gulp-modernizr");

gulp.task("modernizr", function(){
	return gulp.src(["./user/themes/john/assets/styles/**/*.css", "./user/themes/john/assets/scripts/**/*.js"])
		.pipe(modernizr({
			"options": [
				"setClasses"
			]
		}))
		.pipe(gulp.dest("./user/themes/john/assets/temp/scripts/"));
});