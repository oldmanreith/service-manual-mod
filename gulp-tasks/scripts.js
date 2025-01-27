if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const { dest, src } = require('gulp');

const gulpif = require('gulp-if');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');


// Flags whether we compress the output etc
const isProduction = process.env.NODE_ENV === 'production';


// Source script files
const sourceFiles = [
  'src/scripts/util.js',
  'src/scripts/**/*.js'
];


// Combine all script files, process them and output into a single script file
const scripts = (cb) => {

  return src(sourceFiles, {allowEmpty: true})
    
    .pipe(concat('scripts.js'))

    .pipe(gulpif(isProduction, uglify()))

    .pipe(dest('public/assets/scripts'))
    
    .on('done', cb);

};


module.exports = scripts;