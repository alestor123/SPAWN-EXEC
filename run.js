var spawn = require('./App');
console.log(spawn('curl -h').stdout.toString())