const gulp = require('gulp');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const minify = require('gulp-minify');

gulp.task('ola', () => {
    console.log('Olá mundão!');
});

gulp.task('concatenar-js', ['minificar'], () => {
    return gulp.src([
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/popper.js/dist/umd/popper.min.js', 
        'node_modules/bootstrap/dist/js/bootstrap.min.js',
        'dist/scripts-min.js'
    ])
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('dist'));
});

gulp.task('recarregar', () => {
    browserSync.init({server: './'});
    gulp.watch(['index.html', 'js/scripts.js'], browserSync.reload);
});

gulp.task('observar', () => {
    //executa a tarefa concatenar.js quando ocorrem modificações no arquivo scripts.js
    gulp.watch(['js/scripts.js'], ['concatenar-js']);
});

gulp.task('minificar', () => {
    return gulp.src(['js/scripts.js'])
        .pipe(minify())
        .pipe(gulp.dest('dist'))
});

gulp.task('todas', ['concatenar-js', 'recarregar', 'observar']);
