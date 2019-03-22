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
})