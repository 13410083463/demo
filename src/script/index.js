$(function(){
    function time(){
        var date = new Date();
        var year = date.getFullYear();
        var mont = date.getMonth() < 9 ? "0"+date.getMonth():date.getMonth();
        var day  = date.getDate();
        var time = year+"-"+mont+"-"+day;
        return time;
    }
    $("#time").html(time);
    $("#MenuAll li").on("click",function(){
        var index = $(this).index();
        $("#MenuAll li").removeClass("li_back")
        $(this).addClass("li_back")
       
       console.log(index)
       if(index == 1){
           $("#right iframe").attr("src","../../pages/iframe/myProfile.html")
       }else if(index == 0){
           $("#right iframe").attr("src", "../../pages/iframe/myApply.html")
       }else if(index == 2){
           $("#right iframe").attr("src", "../../pages/iframe/thereport.html")
       }else if(index == 3){
           $("#right iframe").attr("src", "../../pages/iframe/resetpass.html")
       }else if(index == 4){
           setTimeout(function(){
                window.location.href = "../../login.html"
           },1500)
       }
    })
})