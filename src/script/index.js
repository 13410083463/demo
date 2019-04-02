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
    function time(data){
        var date = new Date(data * 1000);
        var year = date.getFullYear();
        var mont = date.getMonth() < 9 ? "0"+date.getMonth():date.getMonth();
        var day  = date.getDate();
        var time = year+"-"+mont+"-"+day;
        return time;
    }
console.log(time(1554113818))
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
                setTimeout(function () {
                    window.location.href = "../../login.html";
                }, 1500)
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
                setTimeout(function () {
                    window.location.href = "../../login.html";
                }, 1500)
            }
        }
       
    })
    
    
// })

