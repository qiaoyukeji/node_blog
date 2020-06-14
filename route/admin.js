/*
 * @Descripttion:
 * @version:
 * @Author: qiaoyurensheng@163.com
 * @Date: 2020-06-13 15:51:26
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-06-14 22:52:03
 */
// 引入express框架
const express = require('express')
// 创建博客展示页面路由
const admin = express.Router();

admin.get('/login', (req, res) => {
    res.render('admin/login')
})

// 实现登陆功能
admin.post('/login', (req, res) => {
    // 接收请求参数
    const { email, password } = req.body;
    if (email.trim().length == 0 || password.trim().length == 0) {
        res.status(400).render('admin/error', { msg: '邮件地址或密码错误' });
        return;
    }
    res.send(req.body)

})
// 创建用户列表路由
admin.get("/user", (req, res) => {
    res.render("admin/user")
})

// 将路由对象作为模块成员进行导出
module.exports = admin;