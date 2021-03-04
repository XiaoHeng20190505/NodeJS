const fs = require('fs');
/**
 * 异步地创建目录
 * 语法:  fs.mkdir(path[, options], callback)。options 不需要管
 * 回调会传入可能的一场、一级创建的
 */
fs.mkdir('./fs-class', (err) => {
  if(err) {
    console.log(err);
    return; //  打印错误信息，终止当前回调函数的执行
  }
  console.log('create success');
})



console.log('结束语句');