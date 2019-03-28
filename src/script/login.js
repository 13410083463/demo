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
                UserNme: user,
                Password: pass
            }
            // console.log(data)
            $.ajax({
                url:"http://declare.dagaimao.cn/web/index.php?r=users/login-check-port",
                type:'POST',
              
                data:JSON.stringify(data),
                crossDomain:true,
                processData: false,
                contentType:"application/x-www-form-urlencoded;charset=utf8",
                success: function (res) {
                    console.log(JSON.parse(res))
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