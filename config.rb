activate :external_pipeline,
  name: :gulp,
  command: build? ? "./node_modules/gulp/bin/gulp.js build" : "./node_modules/gulp/bin/gulp.js watch",
  source: "./source",
  latency: 1
activate :livereload
page 'index.html', layout: false
# set :css_dir, 'stylesheets'
# set :js_dir, 'javascripts'
# set :images_dir, 'images'
