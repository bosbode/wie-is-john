var gulp = require("gulp"),
postcss = require("gulp-postcss"),
cssImport = require("postcss-import"),
cssvars = require("postcss-simple-vars"),
nested = require("postcss-nested"),
autoprefixer = require("autoprefixer"),
mixins = require("postcss-mixins"),
hexrgba = require("postcss-hexrgba");


gulp.task("styles", function(){
	return gulp.src("./user/themes/john/assets/styles/styles.css")
		.pipe(postcss([cssImport, mixins, cssvars, nested, hexrgba, autoprefixer]))
		.on("error", function(errorInfo){
			console.log(errorInfo.toString());
			this.emit("end");
		})
		.pipe(gulp.dest("./user/themes/john/assets/temp/styles"));
});