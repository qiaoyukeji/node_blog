/*
 * @Descripttion:
 * @version:
 * @Author: qiaoyurensheng@163.com
 * @Date: 2020-06-14 20:07:46
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-06-14 20:16:23
 */
const mongoose = require('mongoose')

// 连接数据库
mongoose.connect("mongodb://localhost/blog", {
    useUnifiedTopology: true, useNewUrlParser: true
}).then(() => {
    console.log('数据库连接成功');
}).catch(() => {
    console.log("数据库连接失败");

})