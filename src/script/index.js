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


    // $("#MenuAll li").hover(function(){
    //     $(this).addClass("li_back")
    //     $(this).find(".jiantou").addClass("jian_color")
    // },function(){
    //     $(this).removeClass("li_back")
    //     $(this).find(".jiantou").removeClass("jian_color")
    // })
    $("#MenuAll li").on("click",function(){
        $("#MenuAll li").removeClass("li_back")
        $(this).addClass("li_back")
       
    })
})