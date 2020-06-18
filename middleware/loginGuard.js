/*
 * @Descripttion:
 * @version:
 * @Author: qiaoyurensheng@163.com
 * @Date: 2020-06-18 01:43:55
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-06-18 01:44:49
 */
const guard = (req, res, next) => {
    // 判断访问是否是登陆页面
    // 判断用户的登陆状态
    // 若不是登陆，则重定向到登陆页面
    if (req.url !== '/login' && !req.session.username) {
        res.redirect('/admin/login')
    } else {
        next()
    }
}

module.exports = guard