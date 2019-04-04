// $(function(){
    if(getCookie("admin") == null){
        window.location.href = "../../login.html";
    }

    var data = JSON.parse(getCookie("admin"));
    if (data.auth == 0){
        $("#right iframe").attr("src", "../../pages/iframe/myApply.html")
    } else if (data.auth == 1){
        $("#list1").html("我的待办")
        $("#list2").html("我的已办")
        $("#list3").html("企业信息查询")
    }
    
    $("#LabelDisplayName").html(data.name)
    function time(){
        var date = new Date();
        var year = date.getFullYear();
        var mont = (date.getMonth()+1) < 9 ? "0"+(date.getMonth()+1):(date.getMonth()+1);
        var day  = date.getDate();
        var time = year+"-"+mont+"-"+day;
        return time;
    }
    $("#time").html(time);
    $("#MenuAll li").on("click",function(){
        var index = $(this).index();
        $("#MenuAll li").removeClass("li_back")
        $(this).addClass("li_back")
        if (data.auth == 0){
            if (index == 1) {
                $("#right iframe").attr("src", "../../pages/iframe/myProfile.html")
            } else if (index == 0) {
                $("#right iframe").attr("src", "../../pages/iframe/myApply.html")
            } else if (index == 2) {
                $("#right iframe").attr("src", "../../pages/iframe/thereport.html")
            } else if (index == 3) {
                $("#right iframe").attr("src", "../../pages/iframe/resetpass.html")
            } else if (index == 4) {
                $.ajax({
                    url: "http://declare.dagaimao.cn/web/index.php?r=users/quit-login",
                    type: "post",
                    xhrFields: {
                        withCredentials: true//设置显式指定浏览器发送Cookie，跨域时默认不使用
                    },
                    crossDomain: true,
                    dataType: "json",
                    success: function (res) {
                        console.log(res)
                        if (res.status == 1) {
                            setTimeout(function () {
                                window.location.href = "../../login.html";
                            }, 1500)
                        }
                    }
                })
            }
        }else if(data.auth == 1){
            if (index == 1) {
                $("#right iframe").attr("src", "../../pages/iframe/myHave.html")
            } else if (index == 0) {
                $("#right iframe").attr("src", "../../pages/iframe/myTodo.html")
            } else if (index == 2) {
                $("#right iframe").attr("src", "../../pages/iframe/enterpriseInfo.html")
            } else if (index == 3) {
                $("#right iframe").attr("src", "../../pages/iframe/resetpass.html")
            } else if (index == 4) {
                $.ajax({
                    url: "http://declare.dagaimao.cn/web/index.php?r=users/quit-login",
                    type: "post",
                    xhrFields: {
                        withCredentials: true//设置显式指定浏览器发送Cookie，跨域时默认不使用
                    },
                    crossDomain: true,
                    dataType: "json",
                    success: function (res) {
                        console.log(res)
                        if (res.status == 1) {
                            setTimeout(function () {
                                window.location.href = "../../login.html";
                            }, 1500)
                        }
                    }

                })
              
            }
        }
       
    })
    
    
// })

