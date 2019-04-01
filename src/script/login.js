
function onSuccess(res){
    var data = JSON.stringify(res);
    setCookie("admin", data, "d30")
    setTimeout(function () {
        window.location.href = "../../index.html";
    }, 1000)
}
function onFail(res){
    if(res.status == 4 || res.status == 5){
        $("#ValidationSummary1 li").eq(0).hide();
        $("#ValidationSummary1 li").eq(1).hide();
        $("#ValidationSummary1 li").eq(2).show();
    }
}

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
            operaterData("?r=users/login-check-port","POST",data,onSuccess,onFail)
      
        }
        return false;
    })
    
})


