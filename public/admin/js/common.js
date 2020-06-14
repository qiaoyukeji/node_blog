/*
 * @Descripttion:
 * @version:
 * @Author: qiaoyurensheng@163.com
 * @Date: 2020-06-14 21:26:32
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-06-14 21:29:24
 */
function serializeArrayToJson(form) {
    let result = {}
    // 获取表单中用户输入的值，[{name:'name',value:'输入的内容'},{}]
    let f = form.serializeArray()
    f.forEach(function (item) {
        result[item.name] = item.value
    })
    return result;
}