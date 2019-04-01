//写cookies 
function getsec(str) {
    var str1 = str.substring(1, str.length) * 1;
    var str2 = str.substring(0, 1);
    if (str2 == "s") {
        return str1 * 1000;
    }
    else if (str2 == "h") {
        return str1 * 60 * 60 * 1000;
    }
    else if (str2 == "d") {
        return str1 * 24 * 60 * 60 * 1000;
    }
}
function setCookie(name, value, time) {
    var strsec = getsec(time);
    var exp = new Date();
    exp.setTime(exp.getTime() + strsec * 1);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}

//读取cookies 
function getCookie(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");

    if (arr = document.cookie.match(reg))

        return unescape(arr[2]);
    else
        return null;
}
//删除cookies 
function delCookie(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(name);
    if (cval != null)
    document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
} 
var obj = {
    url:"http://declare.dagaimao.cn/web/index.php"
}

//请求数据
function operaterData(url,method,data,onSucess,onFail){
    $.ajax({
        url:obj.url + url,
        type: method,
        data:data,
        xhrFields:{
            withCredentials: true//设置显式指定浏览器发送Cookie，跨域时默认不使用
        },
        crossDomain: true,
        dataType: "json",
        success: function (res) {
            console.log(res);
            if (res.status == 1) {
                onSucess(res);
            } else {
                onFail(res);
            }
        },
        error: function () {
            console.log("error!!!!");
        }
    })
}
