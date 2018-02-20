var gulp = require("gulp"),
postcss = require("gulp-postcss"),
autoprefixer = require("autoprefixer"),
hexrgba = require("postcss-hexrgba"),
cssnano = require("cssnano"),
config = require("../config.json"),
sass = require('gulp-sass');


gulp.task("styles", ["sass"], function(){
	var plugins = [
		hexrgba(),
        autoprefixer({grid: true}),
		cssnano()
    ];
	return gulp.src("./user/themes/" + config.theme + "/assets/compiled/styles/main.css")
		.pipe(postcss(plugins))
		.on("error", function(errorInfo){
			console.log(errorInfo.toString());
			this.emit("end");
		})
		.pipe(gulp.dest("./user/themes/" + config.theme + "/assets/compiled/styles"));
});

gulp.task("sass", function(){
	return gulp.src("./user/themes/" + config.theme + "/assets/styles/main.scss")
		.pipe(sass({
			includePaths: ['node_modules/slick-carousel/slick/', 'node_modules/normalize.css/']
		}))
		.on("error", function(errorInfo){
			console.log(errorInfo.toString());
			this.emit("end");
		})
		.pipe(gulp.dest("./user/themes/" + config.theme + "/assets/compiled/styles"));
});
