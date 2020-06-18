/*
 * @Descripttion:
 * @version:
 * @Author: qiaoyurensheng@163.com
 * @Date: 2020-06-13 15:51:26
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-06-18 13:16:55
 */
// 引入express框架
const express = require('express')

// 引入用户集合构造函数
const { User } = require('../model/user')

// 创建博客展示页面路由
const admin = express.Router();

admin.get('/login', require('./admin/loginPage'))

// 实现登陆功能
admin.post('/login', require('./admin/login'))
// 创建用户列表路由
admin.get("/user", require('./admin/userPage'))




// 实现退出功能
admin.get("/logout", require('./admin/logout'))
// 将路由对象作为模块成员进行导出
module.exports = admin;