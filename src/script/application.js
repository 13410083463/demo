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
})

function MoneyOnly(e) {
    //判断输入是否为数字类型
    e.value = e.value.replace(/\D/g, "");
}