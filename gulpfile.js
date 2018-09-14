// import gulp from 'gulp'
// import sftp from 'gulp-sftp'

const gulp = require('gulp');
const sftp = require('gulp-sftp');

const host = '47.75.157.180'
const port = 22
const user = 'root'
const pass = 'Pj-199511'

// 个人主页
gulp.task('me', function () {
  return gulp.src('public/**')
    .pipe(sftp({
      host,
      port,
      user,
      pass,
      remotePath: '/var/www/html/www.pengjiandry.com'
    }))
})

gulp.task('all', ['me'])
