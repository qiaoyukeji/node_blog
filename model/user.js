/*
 * @Descripttion:
 * @version:
 * @Author: qiaoyurensheng@163.com
 * @Date: 2020-06-14 20:07:59
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-06-14 21:04:17
 */
const mongoose = require('mongoose')

// 设定用户集合规则
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 20
    },
    email: {
        type: String,
        required: true,
        unique: true,//设置唯一 不重复
    },
    password: {
        type: String,
        required: true,
    },
    // admin 超级管理员
    // normal 普通用户
    role: {
        type: String,
        required: true
    },
    state: {
        type: Number,
        default: 0   //0表示启用状态，1表示禁用状态
    }
})
// 创建集合
const User = mongoose.model("User", userSchema)

// // 创建一个测试用户
// User.create({
//     username: 'qiaoyu',
//     email: 'qiaoyu@qiaoyu.cn',
//     password: '123456',
//     role: 'admin',
//     state: '0'
// }).then(() => {
//     console.log("用户创建成功");
// }).catch(() => {
//     console.log('用户创建失败');
// })

// 将用户集合导出
module.exports = {
    User
}