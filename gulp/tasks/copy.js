export const copy = () => {
  return app.gulp.src(app.path.src.src)
  .pipe(app.gulp.dest(app.path.dev.dist))
}