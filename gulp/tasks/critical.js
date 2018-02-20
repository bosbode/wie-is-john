var gulp = require("gulp"),
critical = require('critical'),
config = require("../config.json");


gulp.task('critical', function () {
    return critical.generate({
        src: config.criticalCSS,
        dest: 'user/themes/' + config.theme + '/assets/compiled/styles/main.critical.css'
    });
});
