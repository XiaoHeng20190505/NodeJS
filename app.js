const md5 = require('md5');
const sha1 = require('sha1');

let str = 'nelson20210303'
let md5Str = md5(str)
let sha1Str = sha1(str)
console.log(md5Str);
console.log(sha1Str);