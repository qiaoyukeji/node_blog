/*
 * @Descripttion:
 * @version:
 * @Author: qiaoyurensheng@163.com
 * @Date: 2020-06-18 13:36:34
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-06-18 15:51:16
 */
module.exports = (req, res) => {
    const { message } = req.query
    res.render('admin/user-edit', {
        message
    })
}