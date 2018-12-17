var gulp = require("gulp");

var server = require("gulp-webserver")

gulp.task("server",function() {
    return gulp.src("src")
    .pipe(server({
        port : 9997,
        proxies : [{
            sources : "/users/api/get/train-ticket" ,
            target : "http://localhost:3000/users/api/get/train-ticket"
        }]
    }))
})