null==getCookie("admin")&&(window.location.href="../../login.html");var data=JSON.parse(getCookie("admin"));function time(){var t=new Date;return t.getFullYear()+"-"+(t.getMonth()<9?"0"+t.getMonth():t.getMonth())+"-"+t.getDate()}console.log(data),0==data.auth&&$("#right iframe").attr("src","../../pages/iframe/myApply.html"),$("#LabelDisplayName").html(data.name),$("#time").html(time),$("#MenuAll li").on("click",function(){var t=$(this).index();$("#MenuAll li").removeClass("li_back"),$(this).addClass("li_back"),0==data.auth?1==t?$("#right iframe").attr("src","../../pages/iframe/myProfile.html"):0==t?$("#right iframe").attr("src","../../pages/iframe/myApply.html"):2==t?$("#right iframe").attr("src","../../pages/iframe/thereport.html"):3==t?$("#right iframe").attr("src","../../pages/iframe/resetpass.html"):4==t&&setTimeout(function(){window.location.href="../../login.html"},1500):1==data.auth&&(1==t?$("#right iframe").attr("src","../../pages/iframe/myHave.html"):0==t?$("#right iframe").attr("src","../../pages/iframe/myTodo.html"):2==t?$("#right iframe").attr("src","../../pages/iframe/enterpriseInfo.html"):3==t?$("#right iframe").attr("src","../../pages/iframe/resetpass.html"):4==t&&setTimeout(function(){window.location.href="../../login.html"},1500))});