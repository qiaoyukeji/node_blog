/*
 * @Descripttion:
 * @version:
 * @Author: qiaoyurensheng@163.com
 * @Date: 2020-06-18 13:14:30
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-06-18 13:16:41
 */
module.exports = (req, res) => {
    // 删除session
    req.session.destroy(function () {
        // 删除cookie
        res.clearCookie('connect.sid')
        // 重定向到登陆页面
        res.redirect('/admin/login')
    })
}