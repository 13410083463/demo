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
        $("#MenuAll li").removeClass("li_back")
        $(this).addClass("li_back")
       var index = $(this).index();
       console.log(index)
       if(index == 1){
           $("#right iframe").attr("src","nodeDone.html")
       }else if(index == 0){
           $("#right iframe").attr("src", "stay.html")
       }else if(index == 2){
           $("#right iframe").attr("src", "info.html")
       }else if(index == 3){
           $("#right iframe").attr("src", "resetpass.html")
       }else if(index == 4){
           setTimeout(function(){
                window.location.href = "login.html"
           },1500)
       }
    })
})