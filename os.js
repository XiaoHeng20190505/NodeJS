var os = require('os');

let pcName = os.hostname();
console.log(pcName);

let pcPath = os.homedir();
console.log(pcPath);

console.log(process.argv)
console.log(__filename);
console.log(__dirname);