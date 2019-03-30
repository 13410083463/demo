
$(function(){
  
    $("form").submit(function(){
        var user = $("#UserName").val();
        var pass = $("#Password").val();
        if(user == ""){
            $("#ValidationSummary1 li").eq(0).show();
            $("#ValidationSummary1 li").eq(2).hide();
        }else{
            $("#ValidationSummary1 li").eq(0).hide();
            $("#ValidationSummary1 li").eq(2).hide();
        }
        if(pass == ""){
            $("#ValidationSummary1 li").eq(1).show();
            $("#ValidationSummary1 li").eq(2).hide();
        }else {
            $("#ValidationSummary1 li").eq(1).hide();
            $("#ValidationSummary1 li").eq(2).hide();
        }
        if(user !="" && pass !=""){
            var data = {
                "UserName": user,
                "Password": pass
            }
            $.ajax({
                url: "http://declare.dagaimao.cn/web/index.php?r=users/login-check-port",
                type:"post",
                data:data,
                dataType: "json",
                success: function (res) {
                    var data = JSON.stringify(res);
                    setCookie("admin", data, "d30")
                    if (res.status == "账户不存在"){
                        $("#ValidationSummary1 li").eq(0).hide();
                        $("#ValidationSummary1 li").eq(1).hide();
                        $("#ValidationSummary1 li").eq(2).show();
                        console.log(res.status)
                    } else if (res.status == 1){
                        setTimeout(function () {
                            window.location.href = "../../index.html";
                        }, 1000)
                    }
                },
                error: function () {
                    console.log("error!!!!");
                }
            })
           
        }
        return false;
    })
    
})


