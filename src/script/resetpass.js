$(function(){
    var pass, newPass, confirmPass
    $("form").submit(function(){
        pass = "";
        newPass = "";
        confirmPass = "";
        var Pass = $("#pass").val();
        var Newpass = $("#newPass").val();
        var Confirmpass = $("#confirmPass").val();
        if (Pass == ""){
            pass = "- 请输入原密码\n\n"
        }
        if (Newpass == ""){
            newPass = "- 请输入新密码\n\n"
        }
        if (Confirmpass == ""){
            confirmPass = "- 请确认新密码"
        }
        if (Pass == "" || Newpass == "" || Confirmpass == ""){
            alert(pass + newPass + confirmPass)
        } else if (Newpass != Confirmpass){
            alert("- 新密码不一致，请重新输入")
        }
      
      
        return false;

    })
})