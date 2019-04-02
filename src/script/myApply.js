$("#sendApply").on("click",function(){
    $.ajax({
        url:"http://declare.dagaimao.cn/web/index.php?r=users/my-data",
        type:"get",
        xhrFields: {
            withCredentials: true//设置显式指定浏览器发送Cookie，跨域时默认不使用
        },
        crossDomain: true,
        dataType: "json",
        success:function(res){
            if(res.status == 1){
                var data = {
                    companyName: res.data.companyName,
                    address: res.data.address,
                    website: res.data.website,
                    email: res.data.email,
                    representative: res.data.representative,
                    telephone: res.data.telephone,
                    linkMan: res.data.linkMan,
                    duty: res.data.duty,
                    phone: res.data.phone,
                    linkPhone1: res.data.linkPhone1,
                    linkPhone2: res.data.linkPhone2,
                    fax1: res.data.fax1,
                    fax2: res.data.fax2,
                    companyType: res.data.companyType
                }
                var dataString  = JSON.stringify(data);
                localStorage.setItem("userInfo", dataString)

            }
        },
        error:function(){
            console.log("error!!!")
        }

    })
    
})

$(".title h1").click(function(){
    $.ajax({
        url: "http://declare.dagaimao.cn/web/index.php?r=apply/my-application",
        type: "get",
        xhrFields: {
            withCredentials: true//设置显式指定浏览器发送Cookie，跨域时默认不使用
        },
        crossDomain: true,
        dataType: "JSON",
        success: function (res) {
            console.log(res)
        },
        error: function () {
            console.log("error!!!")
        }

    })
})