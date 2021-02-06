var { spawnSync } = require('child_process')
module.exports = (cmd,opt) => {
var args = cmd.split(' ').filter(item => !''.includes(item));
return spawnSync(args.shift(),args,opt)
}