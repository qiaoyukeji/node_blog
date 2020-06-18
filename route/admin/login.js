/*
 * @Descripttion:
 * @version:
 * @Author: qiaoyurensheng@163.com
 * @Date: 2020-06-18 13:07:07
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-06-18 13:10:35
 */
const { User } = require('../../model/user')


module.exports = async (req, res) => {
    // 接收请求参数
    const { email, password } = req.body;
    if (email.trim().length == 0 || password.trim().length == 0) {
        res.status(400).render('admin/error', { msg: '邮件地址或密码错误' });
        return;
    }
    // 根据邮箱查询用户信息
    // 如果查询到了用户，user中为对象，没有查询到用户，user为空
    let user = await User.findOne({ email })
    // 如果查询到了用户
    if (user) {
        // 比对密码
        if (password == user.password) {
            // 将用户名存储到请求对象中
            req.session.username = user.username
            // res.send('登陆成功')
            // 将用户信息挂载到locals中，以便模板公共部分可以拿到
            req.app.locals.userInfo = user
            // 路由重定向到用户列表页面
            res.redirect('/admin/user')

        } else {
            res.status(400).render("./admin/error", { msg: '邮箱信息或密码错误' })
        }
    } else {
        res.status(400).render("./admin/error", { msg: '邮箱信息或密码错误' })
    }


    // res.send(req.body)

}
