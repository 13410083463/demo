$(function () {
    $("#select").citySelect({
        url: "lib/city.min.js",
        prov: "请选择",
        city: "请选择",
        required: false
    });
    $(".but_01").on("click", function () {
        alert("-请输入统一社会信用代码\n\n-请输入密码\n\n-请重复输入密码\n\n-请输入企业名称\n\n-请选择省市\n\n-请输入电子信箱\n\n-请输入法人代表\n\n-请输入电话\n\n-请输入联系人\n\n-请输入职务\n\n-请输入联系电话\n\n-请输入手机\n\n-请输入传真\n\n-请输入邮编\n\n-请选择单位性质\n\n-请输入企业简介");
    });
});