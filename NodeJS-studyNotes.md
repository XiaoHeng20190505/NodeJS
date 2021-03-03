# NodeJS
    NodeJS学习笔记--B站上的视频教程，路径：https://www.bilibili.com/video/BV11t411k79h?p=5&spm_id_from=pageDriver

# 启动node环境
    命令： node 入口JS文件

# supervisor 工具
    可以使node自动重启，不在需要我们Control + C 断开node运行再手动重启，但还是要重新刷新要页面才会重新触发请求。

    安装supervisor工具：npm install -g supervisor 或者使用淘宝镜像：cnpm install -g supervisor
    此时启动node环境的命令可以使用：supervisor 入口JS文件

# JS模块化
    模块化：将每一个文件都当做一个模块，通过文件中导出，引入的操作，将各个模块关联起来。
    CommonJS
        导出：
            exports  通过在特殊的 exports 对象上指定额外的属性，可以将（函数和对象）添加到模块的根部。
            module.exports  为 module.exports 属性分配新的值（函数或者对象）
        引入：
            require
            特性：从 node_modules 目录加载
            如果传递给 require() 的模块标识符不是一个核心模块，也没有以 '/' 、 '../' 或 './' 开头，则 Node.js 会从当前模块的父目录开始，尝试当前文件父目录下的 /node_modules 目录里加载模块。 Node.js 不会附加 node_modules 到一个已经以 node_modules 结尾的路径上。如果还是没有找到，则移动到再上一层父目录，直到文件系统的根目录。

            例子，如果在 '/home/ry/projects/foo.js' 文件里调用了 require('bar.js')，则 Node.js 会按以下顺序查找：
            /home/ry/projects/node_modules/bar.js
            /home/ry/node_modules/bar.js
            /home/node_modules/bar.js
            /node_modules/bar.js
            这使得程序本地化它们的依赖，避免它们产生冲突。
# package.json 的生成命令
    npm init --yes 或者 cnpm init --yes
# 代码转移
    安装插件的时候，命令：npm i 插件名称 / cnpm i 插件名称 --save
    会将依赖的插件信息写入 package.json 的 dependencies 里边。

    将本机代码转交给别人的时候，可以把node_module文件夹删掉，对方拿到代码的时候在项目文件夹下使用命令:npm i / cnpm i 就可以根据 package.json 中的 dependcies 中的依赖信息，将相关插件安装进来，生成 node_module 文件夹。










# npm 插件
    silly-datetime  日期格式化
    md5             MD5加密
    sha1            sha1加密

