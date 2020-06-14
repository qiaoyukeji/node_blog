/*
 * @Descripttion:
 * @version:
 * @Author: qiaoyurensheng@163.com
 * @Date: 2020-06-13 15:51:17
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-06-13 15:54:09
 */
// 引入express框架
const express = require('express')
// 创建博客展示页面路由
const home = express.Router();

home.get('/', (req, res) => {
    res.send("welcome home")
})

// 将路由对象作为模块成员进行导出
module.exports = home;