/*
 * @Descripttion:
 * @version:
 * @Author: qiaoyurensheng@163.com
 * @Date: 2020-06-18 14:57:09
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-06-18 17:06:03
 */
const Joi = require('joi');
// 引入用户集合的构造函数
const { User } = require("./model/user")
// 定义对象的验证规则
const schema = {
    username: Joi.string().min(2).max(12).required().error(new Error('用户名不符合要求')),
    email: Joi.string().email().required().error(new Error('邮箱不符合要求')),
    password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required().error(new Error('密码不符合要求')),
    role: Joi.string().valid('normal', 'admin').required().error(new Error("角色值不符合要求")),
    state: Joi.number().valid(0, 1).required().error(new Error('状态值非法'))

}



async function run(req, res) {
    try {
        // 实施验证
        await Joi.validate(req.body, schema)

    } catch (error) {
        // 验证没有通过
        // 重定向到用户添加页面
        return res.redirect(`/admin/user-edit?message=${error.message}`)
    }
    // console.log('验证通过');
    // 根据邮箱地址查询用户是否存在
    let user = await User.findOne({ email: req.body.email })
    // 如果用户存在，则邮箱地址已经被别人占用
    if (user) {
        // 重定向到用户添加页面
        return res.redirect(`/admin/user-edit?message=邮箱地址已经被占用`)
    }
    // 将用户信息添加到数据库
    await User.create(req.body)
    // res.send(user)
    res.redirect('/admin/user')

}
module.exports = run