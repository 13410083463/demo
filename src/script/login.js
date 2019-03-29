
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
                "UserName": "1",
                "Password": "12"
            }
            $.ajax({
                url: "http://declare.dagaimao.cn/web/index.php?r=users/login-check-port&UserName=" + user +"&Password="+pass,
                type:"get",
                // data:data,
                // headers:{
                //     "content-Type":"application/x-www-form-urlencoded;charset=utf8"
                // },
                // dataType: "json",
                // contentType: "application/x-www-form-urlencoded;charset=utf8",
                // dataType:"jsonp",
                // jsonpCallback: "onBack",
                // jsonp:"onBack",
                success: function (res) {
                    setCookie("admin", res, "d30")
                    var data = JSON.parse(res);
                    if (data.status == 0){
                        $("#ValidationSummary1 li").eq(0).hide();
                        $("#ValidationSummary1 li").eq(1).hide();
                        $("#ValidationSummary1 li").eq(2).show();
                        console.log(data.status)
                    } else if (data.status == 1){
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


