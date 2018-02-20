var gulp = require("gulp"),
modernizr = require("gulp-modernizr"),
config = require("../config.json");

gulp.task("modernizr", function(){
	return gulp.src(["./user/themes/" + config.theme + "/assets/styles/**/*.scss", "./user/themes/" + config.theme + "/assets/scripts/**/*.js"])
		.pipe(modernizr({
			"options": [
				"setClasses"
			]
		}))
		.pipe(gulp.dest("./user/themes/" + config.theme + "/assets/compiled/scripts/"));
});