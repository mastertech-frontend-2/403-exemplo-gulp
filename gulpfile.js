const gulp = require('gulp');
const concat = require('gulp-concat');

gulp.task('ola', () => {
    console.log('Olá mundão!');
});

gulp.task('concatenar-js', () => {
    return gulp.src([
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/popper.js/dist/umd/popper.min.js', 
        'node_modules/bootstrap/dist/js/bootstrap.min.js',
        'scripts.js'
    ])
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('dist'));
});

gulp.task('observar', () => {
    //executa a tarefa concatenar.js quando ocorrem modificações no arquivo scripts.js
    gulp.watch(['scripts.js'], ['concatenar-js']);
});
