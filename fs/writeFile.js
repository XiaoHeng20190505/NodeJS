const fs = require('fs');
/**
 * 异步
 * 语法:  fs.writeFile(file，data[, options], callback)。options 不需要管
 * options = { encoding: 'utf-8', mode: 0o666, flag: 'w'}
 * 当 file 是文件名时，则异步地写入数据到文件（如果文件已存在，则覆盖文件）。data 可以是字符串或 buffer
 * 当 file 是文件描述符时，其行为类似于直接调用 fs.write()（建议使用）。
 * 
 * 如果 data 是buffer，则 encoding 选项会被忽略，如果 data 是普通的对象，则它必须具有自身的 toString 函数属性。
 * 如果 options 是字符串，则它指定字符编码。
 */
fs.writeFile('./write-file-test.js', 'hello fs.writeFile', (err) => {
  if(err) {
    console.log(err);
    return; //  打印错误信息，终止当前回调函数的执行
  }
  console.log('write success');
})



console.log('结束语句');