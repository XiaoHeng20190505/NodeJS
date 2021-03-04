const fs = require('fs');

/**
 * 异步检测文件类型
 * 语法: fs.stat(path[,options], callback)
 * 不建议在调用 fs.open(), fs.readFile(), fs.writeFile() 之前使用 fs.stat() 检查文件的存在性。而是应该直接的打开文件，读取或写入文件，如果文件不可用则处理引发的错误。
 * 若只要检查文件的存在性，但没有更多的操作，则建议使用 fs.access()。
 *  
 * */ 

fs.stat('./stat.js', false, (err, stats) => {
  if(err) {
    // throw err; 抛出异常，终止整个文件的执行
    console.log(err);
    return; //  打印错误信息，终止当前回调函数的执行
  }
  console.log('成功信息： ', stats);
  console.log('检测的是否为文件：', stats.isFile());
  console.log('检测的是否为目录：', stats.isDirectory());
})

console.log('结束语句');