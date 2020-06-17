/*
 * @Descripttion:
 * @version:
 * @Author: qiaoyurensheng@163.com
 * @Date: 2020-06-13 15:44:42
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-06-14 22:22:36
 */
// 引入express框架
const express = require('express')

//导入express-session
const session = require('express-session')


// 处理路径
const path = require('path')
// 创建网站服务器
const app = express();

// 引入bodyparser第三方库
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
// 配置session secret项可自定义，用以加密
app.use(session({ secret: "secret key" }))

// 引入数据库连接
require('./model/connect')

// require('./model/user')


// 告诉express模板所在的位置
app.set('views', path.join(__dirname, 'views'))

// 告知express框架模板的默认后缀
app.set('view engine', 'art')

// 配置模板引擎
app.engine('art', require('express-art-template'))

// 开放静态资源文件
app.use(express.static(path.join(__dirname, "public")))

// 引入路由对象模块
const home = require('./route/home')
const admin = require('./route/admin');
const artTemplate = require('art-template');

// 为路由匹配请求路径
app.use('/home', home);
app.use('/admin', admin);


// 监听端口
app.listen(80);
console.log('服务器启动成功...');

