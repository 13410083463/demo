
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
                url: "http://declare.dagaimao.cn/web/index.php?r=users/login-check-port",
                type:"post",
                data:JSON.stringify(data),
                headers:{
                    "content-Type":"application/x-www-form-urlencoded;charset=utf8"
                },
                // dataType: "json",
                // contentType: "application/x-www-form-urlencoded;charset=utf8",
                // dataType:"jsonp",
                // jsonpCallback: "onBack",
                // jsonp:"onBack",
                dataType:"application/json",
                dataType:"json",
                success: function (res) {
                    console.log(res)
                    setCookie("admin", res, "d30")
                        console.log(getCookie('admin'))
                   
                    // if(res){
                    //     setTimeout(function(){
                    //         window.location.href = "../../index.html";
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


