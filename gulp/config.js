var config = require('../config.json');

config.paths.absolute = {};

//generate absolute paths from relative ones
for(key in config.paths.relative){
    config.paths.absolute[key] = __dirname + '/../' + config.paths.relative[key];console.log(config.paths)
}

//prepend path to browserSync files filter
for(key in config.server.browserSync.files){
    config.server.browserSync.files[key] = config.paths.relative.build + '/' + config.server.browserSync.files[key];
  console.log(config.server.browserSync.files)

}

module.exports = config;
