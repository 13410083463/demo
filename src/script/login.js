

$(function(){
  
    $("form").submit(function(){
        var user = $("#UserName").val();
        var pass = $("#Password").val();
        if(user == ""){
            $("#ValidationSummary1 li").eq(0).show();
        }else{
            $("#ValidationSummary1 li").eq(0).hide();
        }
        if(pass == ""){
            $("#ValidationSummary1 li").eq(1).show();
        }else {
            $("#ValidationSummary1 li").eq(1).hide();
        }
        if(user !="" && pass !=""){
            var data = {
                "UserName": "1",
                "Password": "12"
            }
            $.ajax({
                url: "http://declared.dagaimao.cn/declare?r=users/login-check-port&UserName=" + user + "&Password=" + pass,
                type:"post",
                headers:{
                    "content-Type":"application/x-www-form-urlencoded;charset=utf8"
                },
                // dataType: "json",
                // contentType: "application/x-www-form-urlencoded;charset=utf8",
                dataType:"jsonp",
                success: function (res) {
                    console.log(JSON.parse(res))
                    $.getScript("../../pubilc.js",function(){
                        setCookie("admin", res.name, "d30")
                        console.log(getCookie('admin'))
                    });
                   
                    // if(res){
                    //     setTimeout(function(){
                    //         window.location.href = "../../index.html?obj="+res;
                    //     },1000)
                    // }
                },
                error: function () {
                    console.log("error!!!!");
                }
            })
          
        }
        return false;
    })
    
})


