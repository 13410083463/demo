$(function(){
    var pass, newPass, confirmPass
    $("form").submit(function(){
        pass = "";
        newPass = "";
        confirmPass = "";
        var Pass = $("#pass").val();
        var Newpass = $("#newPass").val();
        var Confirmpass = $("#confirmPass").val();
        console.log(Newpass,Confirmpass)
        var data = {
            original_password:Pass,
            new_password:Newpass
        }
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
        }else{
            $.ajax({
                url:"http://declare.dagaimao.cn/web/index.php?r=users/deal-password",
                type:"post",
                data:data,
                xhrFields:{
                    withCredentials: true//设置显式指定浏览器发送Cookie，跨域时默认不使用
                },
                crossDomain: true,
                dataType:"json",
                success:function(res){
                    console.log(res)
                },
                error:function(){
                    console.log("error")
                }
            })
        }
        
      
        return false;

    })
})