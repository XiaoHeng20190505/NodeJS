var http = require('http'); // 引入http模块，使用http
http.createServer((request, response) => {
    // request  请求头
    console.log(request.url);
    // response 响应头
    // 设置响应头的参数
    response.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
    // 设置响应信息
    response.write('你好 Hello World')
    response.end();
}).listen(3000); // 监听端口号

console.log('Server running at http://127.0.0.1:3000/');