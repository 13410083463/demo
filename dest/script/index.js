$(function(){$("#time").html(function(){var t=new Date;return t.getFullYear()+"-"+(t.getMonth()<9?"0"+t.getMonth():t.getMonth())+"-"+t.getDate()}),$("#MenuAll li").on("click",function(){var t=$(this).index();$("#MenuAll li").removeClass("li_back"),$(this).addClass("li_back"),console.log(t),1==t?$("#right iframe").attr("src","../../pages/iframe/myProfile.html"):0==t?$("#right iframe").attr("src","../../pages/iframe/myApply.html"):2==t?$("#right iframe").attr("src","../../pages/iframe/thereport.html"):3==t?$("#right iframe").attr("src","../../pages/iframe/resetpass.html"):4==t&&setTimeout(function(){window.location.href="../../login.html"},1500)})});