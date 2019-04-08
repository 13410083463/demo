$(function () {
    $("#TextBoxApplyDate").datepicker({
        todayHighlight: true,
        format: "yyyy-mm-dd",
        todayBtn: "linked",
        clearBtn: !0,
        language: "zh-CN"
    })

    $("#ButtonNext").on("click", function () {
        var query = confirm("请确认您选择了正确的申报类型和申报级别，一旦确定不可随意更改！")
        if (query == true) {
            $("#DivForm").show();
            $("#DivButtonApply").show();
            $("#DDLCorpType").attr("disabled", "disabled")
            $("#DDLRank").attr("disabled", "disabled")
            $("#DivButtonNew").hide();
            var a =$("#DDLRank option:selected").text();
            var b = $("#DDLCorpType option:selected").val();
            var data = {
                rank: a,
                type: b
            }
            $.ajax({
                url:"http://declare.dagaimao.cn/web/index.php?r=apply/submit-application",
                type:"post",
                data:data,
                xhrFields: {
                    withCredentials: true//设置显式指定浏览器发送Cookie，跨域时默认不使用
                },
                crossDomain: true,
                dataType: "json",
                success:function(res){
                    if(res.status == 1){
                        declare_id = res.declare_id;
                    }
                },
                error:function(res){

                }
            })
        }
    })
    $("#LinkButtonFill").on("click", function () {
        $("#frameModal").modal("show");
        $("#frameModalLabel").html('评估指标表')
        $("#zhibiao").show();
        $("#shouru").hide();
        $("#shouru2").hide();
    })
    $("#TransportForm1_LinkButtonIncome").on("click", function () {
        $("#frameModal").modal("show");
        $("#frameModalLabel").html('附表一：物流业务收入构成清单')
        $("#zhibiao").hide();
        $("#shouru").show();
        $("#shouru2").hide();
    })
    $("#TransportForm1_LinkButtonOtherIncome").on("click", function () {
        $("#frameModal").modal("show");
        $("#frameModalLabel").html('附表二：非物流业务收入构成清单')
        $("#zhibiao").hide();
        $("#shouru").hide();
        $("#shouru2").show();
    })
    $("#RepeaterServiceMode_ctl00_CheckBoxList input").on("click", function () {
        $("#RepeaterServiceMode_ctl00_CheckBoxClass").prop("checked", true)
    })

    $("#RepeaterServiceMode_ctl01_CheckBoxList input").on("click", function () {
        $("#RepeaterServiceMode_ctl01_CheckBoxClass").prop("checked", true)
    })

    $("#RepeaterServiceRange_ctl00_CheckBoxList input").on("click", function () {
        $("#RepeaterServiceRange_ctl00_CheckBoxClass").prop("checked", true)
    })
    $("#RepeaterServiceRange_ctl01_CheckBoxList input").on("click", function () {
        $("#RepeaterServiceRange_ctl01_CheckBoxClass").prop("checked", true)
    })
    $("#RepeaterServiceRange_ctl02_CheckBoxList input").on("click", function () {
        $("#RepeaterServiceRange_ctl02_CheckBoxClass").prop("checked", true)
    })
    $("#RepeaterServiceRange_ctl03_CheckBoxList input").on("click", function () {
        $("#RepeaterServiceRange_ctl03_CheckBoxClass").prop("checked", true)
    })
    var userInfo = JSON.parse(localStorage.getItem("userInfo"));
    console.log(userInfo)
    $("#LabelUnitName").html(userInfo.companyName)
    $("#LabelWebSite").html(userInfo.website)
    $("#LabelChargePerson").html(userInfo.representative)
    $("#LabelCP_Tel").html(userInfo.telephone)
    $("#LabelContactName").html(userInfo.linkMan)
    $("#LabelContactPosition").html(userInfo.duty)
    $("#LabelContactTel").html(userInfo.linkPhone1 + "  " + userInfo.linkPhone2)
    $("#LabelContactMobil").html(userInfo.phone);
    $("#LabelContactFax").html(userInfo.fax1 + "  " + userInfo.fax2);
    $("#LabelContactEmail").html(userInfo.email)
    $("#LabelUnitSeat").html(userInfo.address)
    if (userInfo.companyType == "0") {
        $("#LabelUnitNature").html("国有");
    } else if (userInfo.companyType == "1") {
        $("#LabelUnitNature").html("民营");
    } else if (userInfo.companyType == "2") {
        $("#LabelUnitNature").html("外商投资");
    } else if (userInfo.companyType == "3") {
        $("#LabelUnitNature").html("其他");
    }
    $("#LabelUnitNature").html()


    $("#saveJudger").click(function(){
        var val = $("#RadioButtonListLocal tbody tr td input[type='radio']:checked").next().html();
        $("#LabelJudger").html(val)
        $("#chooseJudgerModal").modal("hide")
    })
})  

function MoneyOnly(e) {
    //判断输入是否为数字类型
    e.value = e.value.replace(/\D/g, "");
}