/*!
 * Instalar las dependencias gulp o ejecutar el comando "npm install" el cual
 * instalara las dependencias dentro del archivo package.json
 * Se usa el comando --save-dev para instalar las dependencias en modo desarrollador
 * npm install --save-dev gulp / gulp-sketch / gulp-ruby-sass / gulp-sass /
 * gulp-minify-css / gulp-uglify / gulp-imagemin / gulp-notify / gulp-rename /
 * browser-sync / gulp-cache / gulp-iconfont / gulp-consolidate /
 */

// -----------------------------------------------------------------------------
// Plugins
// -----------------------------------------------------------------------------
var gulp         = require('gulp'),
    browserSync  = require('browser-sync'),
    sass         = require('gulp-sass'),
    watch        = require('gulp-watch'),
    rename       = require('gulp-rename'),
    concat       = require('gulp-concat'),
    uglify       = require('gulp-uglify'),
    minifyCSS    = require('gulp-minify-css'),
    uncss        = require('gulp-uncss'),
    ngAnnotate   = require('gulp-ng-annotate'),
    notify       = require('gulp-notify'),
    sketch       = require('gulp-sketch'),
    iconfont     = require('gulp-iconfont'),
    consolidate  = require('gulp-consolidate'),
    ngmin        = require('gulp-ngmin'),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps   = require('gulp-sourcemaps'),
    del          = require('del');

// -----------------------------------------------------------------------------
// Task: Concatenar y minificar todos los archivos sass .scss a .min.css
// -----------------------------------------------------------------------------
gulp.task('sass-a-css', function(){
    return gulp.src('./public/stylesheets/sass/main.scss')
        .pipe(sass())
        //.pipe(gulp.dest('./public/stylesheets'))
        .pipe(rename({suffix: '.min'}))
        .pipe(minifyCSS())
        .pipe(gulp.dest('./public/stylesheets/'))
        .pipe(notify({message: 'Compilacion COMPLETA de los archivos SASS'}));
});

gulp.task('clean', function(cb){
    del(['public/stylesheets/main.min.css'], cb);
    console.log('Se hizo un CLEANUP CORRECTO de los archivos minificados [CSS,JS]');
});

// -----------------------------------------------------------------------------
// Task: Tarea por default en Desarrollo (minificado de archivos css y js y observar cambios en los archivos)
// -----------------------------------------------------------------------------
gulp.task('default', ['clean'], function(){
    gulp.start('sass-a-css');
});


// -----------------------------------------------------------------------------
// Task: Compilar y minificar todos los archivos css y js en Produccion
// -----------------------------------------------------------------------------
gulp.task('production', ['clean'], function(){
    gulp.start('sass-a-css');
});



