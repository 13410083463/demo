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
           window.location.href = "../../index.html"
        }
        return false;
    })
})