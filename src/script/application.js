function time() {
    var date = new Date();
    var year = date.getFullYear();
    var mont = (date.getMonth() + 1) < 9 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1);
    var day = date.getDate();
    var time = year + "-" + mont + "-" + day;
    return time;
}

function time2(data) {
    var date = new Date(data * 1000);
    var year = date.getFullYear();
    var mont = (date.getMonth() + 1) < 9 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1);
    var day = date.getDate();
    var time = year + "-" + mont + "-" + day;
    return time;
}
var fileM = document.querySelector("#upfiles");
var category, fileType;
var declare_id = localStorage.getItem("applyEditId")
function Up() {
    var fileObj = fileM.files[0];
    $("#text").val(fileObj.name)
}

$("#formdata").submit(function () {
    if (fileM.value == "") {
        alert("请选择要上传的文件")
        return;
    }
    var fileObj = fileM.files[0];
    var formData = new FormData();
    formData.append('file', fileObj)
    formData.append('category', category)
    formData.append('type', fileType)
    formData.append('declare_id', declare_id)

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.open("POST", "http://declare.dagaimao.cn/web/index.php?r=apply/upload-file", true);
    xhr.upload.addEventListener("progress", function (result) {
        var loaded = result.loaded;     //已经上传大小情况
        var tot = result.total;      //附件总大小
        var per = Math.floor(100 * loaded / tot);  //已经上传的百分比
        $("#nei").show();
        $("#nei").css({
            width: per + "%"
        })
        $("#sp").html(per + "%");
    })
    xhr.onreadystatechange = function () {
        console.log(xhr)
        if (xhr.readyState == 4) {
            var data = JSON.parse(xhr.responseText);
            if (data.status == 1) {
                var query = confirm("上传成功")
                if (query == true) {
                    window.location.reload();
                }
            }
        }
    }

    xhr.send(formData)

    return false;

})
$("#fileCancel").click(function () {
    $("#upfile").hide();
    $("#back").hide();
})
$(".showFile").click(function () {
    category = $(this).attr("filename");
    fileType = $(this).attr("fileType")
    $("#upfile").show();
    $("#back").show();
})
$(function () {
    if (declare_id !=""){
        $("#DivForm").show();
        $("#DivButtonApply").show();
        $("#DivButtonNew").hide();
    }
    $("#TextBoxApplyDate").val(time())
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
            var b1 = $("#RepeaterServiceMode_ctl00_CheckBoxClass[type='checkbox']:checked").val() ? $("#RepeaterServiceMode_ctl00_CheckBoxClass[type='checkbox']:checked").val() + "," : "",
                b2 = $("#RepeaterServiceMode_ctl01_CheckBoxClass[type='checkbox']:checked").val() ? $("#RepeaterServiceMode_ctl01_CheckBoxClass[type='checkbox']:checked").val() + "," : "",
                b3 = $("#RepeaterServiceMode_ctl02_CheckBoxClass[type='checkbox']:checked").val() ? $("#RepeaterServiceMode_ctl02_CheckBoxClass[type='checkbox']:checked").val() + "," : "",
                b4 = $("#RepeaterServiceMode_ctl03_CheckBoxClass[type='checkbox']:checked").val() ? $("#RepeaterServiceMode_ctl03_CheckBoxClass[type='checkbox']:checked").val() + "," : "",
                b5 = $("#RepeaterServiceMode_ctl04_CheckBoxClass[type='checkbox']:checked").val() ? $("#RepeaterServiceMode_ctl04_CheckBoxClass[type='checkbox']:checked").val() + "," : "",
                b6 = $("#RepeaterServiceMode_ctl05_CheckBoxClass[type='checkbox']:checked").val() ? $("#RepeaterServiceMode_ctl05_CheckBoxClass[type='checkbox']:checked").val() + "," : "",
                b7 = $("#RepeaterServiceMode_ctl06_CheckBoxClass[type='checkbox']:checked").val() ? $("#RepeaterServiceMode_ctl06_CheckBoxClass[type='checkbox']:checked").val() + "," : "",
                b8 = $("#RepeaterServiceMode_ctl07_CheckBoxClass[type='checkbox']:checked").val() ? $("#RepeaterServiceMode_ctl07_CheckBoxClass[type='checkbox']:checked").val() + "," : "",
                b9 = $("#RepeaterServiceMode_ctl08_CheckBoxClass[type='checkbox']:checked").val() ? $("#RepeaterServiceMode_ctl08_CheckBoxClass[type='checkbox']:checked").val() + "," : "",
                b10 = $("#RepeaterServiceMode_ctl09_CheckBoxClass[type='checkbox']:checked").val() ? $("#RepeaterServiceMode_ctl09_CheckBoxClass[type='checkbox']:checked").val() + "," : "",
                b11 = $("#RepeaterServiceMode_ctl10_CheckBoxClass[type='checkbox']:checked").val() ? $("#RepeaterServiceMode_ctl10_CheckBoxClass[type='checkbox']:checked").val() + "," : "",
                b12 = $("#RepeaterServiceMode_ctl11_TextBoxOther").val() ? 12 + "(" + $("#RepeaterServiceMode_ctl11_TextBoxOther").val() + ")" + "," : "",
                b13 = $("#RepeaterServiceMode_ctl00_CheckBoxList_0[type='checkbox']:checked").val() ? $("#RepeaterServiceMode_ctl00_CheckBoxList_0[type='checkbox']:checked").val() + "," : "",
                b14 = $("#RepeaterServiceMode_ctl00_CheckBoxList_1[type='checkbox']:checked").val() ? $("#RepeaterServiceMode_ctl00_CheckBoxList_1[type='checkbox']:checked").val() + "," : "",
                b15 = $("#RepeaterServiceMode_ctl00_CheckBoxList_2[type='checkbox']:checked").val() ? $("#RepeaterServiceMode_ctl00_CheckBoxList_2[type='checkbox']:checked").val() + "," : "",
                b16 = $("#RepeaterServiceMode_ctl00_CheckBoxList_3[type='checkbox']:checked").val() ? $("#RepeaterServiceMode_ctl00_CheckBoxList_3[type='checkbox']:checked").val() + "," : "",
                b17 = $("#RepeaterServiceMode_ctl00_CheckBoxList_4[type='checkbox']:checked").val() ? $("#RepeaterServiceMode_ctl00_CheckBoxList_4[type='checkbox']:checked").val() + "," : "",
                b18 = $("#RepeaterServiceMode_ctl00_CheckBoxList_5[type='checkbox']:checked").val() ? $("#RepeaterServiceMode_ctl00_CheckBoxList_5[type='checkbox']:checked").val() + "," : "",
                b19 = $("#RepeaterServiceMode_ctl00_CheckBoxList_6[type='checkbox']:checked").val() ? $("#RepeaterServiceMode_ctl00_CheckBoxList_6[type='checkbox']:checked").val() + "," : "",
                b20 = $("#RepeaterServiceMode_ctl00_CheckBoxList_7[type='checkbox']:checked").val() ? $("#RepeaterServiceMode_ctl00_CheckBoxList_7[type='checkbox']:checked").val() + "," : "",
                b21 = $("#RepeaterServiceMode_ctl00_CheckBoxList_8[type='checkbox']:checked").val() ? $("#RepeaterServiceMode_ctl00_CheckBoxList_8[type='checkbox']:checked").val() + "," : "",
                b22 = $("#RepeaterServiceMode_ctl00_TextBoxOtherSub").val() ? 22 + "(" + $("#RepeaterServiceMode_ctl00_TextBoxOtherSub").val() + ")" + "," : "";
            var c0 = $("#RepeaterServiceRange_ctl00_CheckBoxClass[type='checkbox']:checked").val() ? $("#RepeaterServiceRange_ctl00_CheckBoxClass[type='checkbox']:checked").val() + "," : "",
                c1 = $("#RepeaterServiceRange_ctl01_CheckBoxClass[type='checkbox']:checked").val() ? $("#RepeaterServiceRange_ctl01_CheckBoxClass[type='checkbox']:checked").val() + "," : "",
                c2 = $("#RepeaterServiceRange_ctl02_CheckBoxClass[type='checkbox']:checked").val() ? $("#RepeaterServiceRange_ctl02_CheckBoxClass[type='checkbox']:checked").val() + "," : "",
                c3 = $("#RepeaterServiceRange_ctl03_CheckBoxClass[type='checkbox']:checked").val() ? $("#RepeaterServiceRange_ctl03_CheckBoxClass[type='checkbox']:checked").val() + "," : "",
                c4 = $("#RepeaterServiceRange_ctl04_CheckBoxClass[type='checkbox']:checked").val() ? $("#RepeaterServiceRange_ctl04_CheckBoxClass[type='checkbox']:checked").val() + "," : "",
                c5 = $("#RepeaterServiceRange_ctl05_CheckBoxClass[type='checkbox']:checked").val() ? $("#RepeaterServiceRange_ctl05_CheckBoxClass[type='checkbox']:checked").val() + "," : "",
                c6 = $("#RepeaterServiceRange_ctl06_CheckBoxClass[type='checkbox']:checked").val() ? $("#RepeaterServiceRange_ctl06_CheckBoxClass[type='checkbox']:checked").val() + "," : "",
                c7 = $("#RepeaterServiceRange_ctl07_CheckBoxClass[type='checkbox']:checked").val() ? $("#RepeaterServiceRange_ctl07_CheckBoxClass[type='checkbox']:checked").val() + "," : "",
                c8 = $("#RepeaterServiceRange_ctl08_CheckBoxClass[type='checkbox']:checked").val() ? $("#RepeaterServiceRange_ctl08_CheckBoxClass[type='checkbox']:checked").val() + "," : "",
                c9 = $("#RepeaterServiceRange_ctl09_CheckBoxClass[type='checkbox']:checked").val() ? $("#RepeaterServiceRange_ctl09_CheckBoxClass[type='checkbox']:checked").val() + "," : "",
                c10 = $("#RepeaterServiceRange_ctl10_CheckBoxClass[type='checkbox']:checked").val() ? $("#RepeaterServiceRange_ctl10_CheckBoxClass[type='checkbox']:checked").val() + "," : "",
                c11 = $("#RepeaterServiceRange_ctl11_CheckBoxClass[type='checkbox']:checked").val() ? $("#RepeaterServiceRange_ctl11_CheckBoxClass[type='checkbox']:checked").val() + "," : "",
                c12 = $("#RepeaterServiceRange_ctl12_CheckBoxClass[type='checkbox']:checked").val() ? $("#RepeaterServiceRange_ctl12_CheckBoxClass[type='checkbox']:checked").val() + "," : "",
                c13 = $("#RepeaterServiceRange_ctl13_CheckBoxClass[type='checkbox']:checked").val() ? $("#RepeaterServiceRange_ctl13_CheckBoxClass[type='checkbox']:checked").val() + "," : "",
                c14 = $("#RepeaterServiceRange_ctl14_CheckBoxClass[type='checkbox']:checked").val() ? $("#RepeaterServiceRange_ctl14_CheckBoxClass[type='checkbox']:checked").val() + "," : "",
                c15 = $("#RepeaterServiceRange_ctl15_CheckBoxClass[type='checkbox']:checked").val() ? $("#RepeaterServiceRange_ctl15_CheckBoxClass[type='checkbox']:checked").val() + "," : "",
                c16 = $("#RepeaterServiceRange_ctl16_TextBoxOther").val() ? 17 + "(" + $("#RepeaterServiceRange_ctl16_TextBoxOther").val() + ")" + "," : "",
                c17 = $("#RepeaterServiceRange_ctl00_CheckBoxList_0[type='checkbox']:checked").val() ? $("#RepeaterServiceRange_ctl00_CheckBoxList_0[type='checkbox']:checked").val() + "," : "",
                c18 = $("#RepeaterServiceRange_ctl00_CheckBoxList_1[type='checkbox']:checked").val() ? $("#RepeaterServiceRange_ctl00_CheckBoxList_1[type='checkbox']:checked").val() + "," : "",
                c19 = $("#RepeaterServiceRange_ctl01_CheckBoxList_0[type='checkbox']:checked").val() ? $("#RepeaterServiceRange_ctl01_CheckBoxList_0[type='checkbox']:checked").val() + "," : "",
                c20 = $("#RepeaterServiceRange_ctl01_CheckBoxList_1[type='checkbox']:checked").val() ? $("#RepeaterServiceRange_ctl01_CheckBoxList_1[type='checkbox']:checked").val() + "," : "",
                c21 = $("#RepeaterServiceRange_ctl00_CheckBoxList_2[type='checkbox']:checked").val() ? $("#RepeaterServiceRange_ctl00_CheckBoxList_2[type='checkbox']:checked").val() + "," : "",
                c22 = $("#RepeaterServiceRange_ctl01_TextBoxOtherSub").val() ? 23 + "(" + $("#RepeaterServiceRange_ctl01_TextBoxOtherSub").val() + ")" + "," : "",
                c23 = $("#RepeaterServiceRange_ctl02_CheckBoxList_0[type='checkbox']:checked").val() ? $("#RepeaterServiceRange_ctl02_CheckBoxList_0[type='checkbox']:checked").val() + "," : "",
                c24 = $("#RepeaterServiceRange_ctl02_CheckBoxList_1[type='checkbox']:checked").val() ? $("#RepeaterServiceRange_ctl02_CheckBoxList_1[type='checkbox']:checked").val() + "," : "",
                c25 = $("#RepeaterServiceRange_ctl00_CheckBoxList_2[type='checkbox']:checked").val() ? $("#RepeaterServiceRange_ctl00_CheckBoxList_2[type='checkbox']:checked").val() + "," : "",
                c26 = $("#RepeaterServiceRange_ctl00_CheckBoxList_3[type='checkbox']:checked").val() ? $("#RepeaterServiceRange_ctl00_CheckBoxList_3[type='checkbox']:checked").val() + "," : "",
                c27 = $("#RepeaterServiceRange_ctl02_TextBoxOtherSub").val() ? 28 + "(" + $("#RepeaterServiceRange_ctl02_TextBoxOtherSub").val() + ")" + "," : "",
                c28 = $("#RepeaterServiceRange_ctl03_CheckBoxList_0[type='checkbox']:checked").val() ? $("#RepeaterServiceRange_ctl03_CheckBoxList_0[type='checkbox']:checked").val() + "," : "",
                c29 = $("#RepeaterServiceRange_ctl03_TextBoxOtherSub").val() ? 30 + "(" + $("#RepeaterServiceRange_ctl03_TextBoxOtherSub").val() + ")" + "," : "";
            var DDLRank =$("#DDLRank option:selected").text();
            var DDLCorpType = $("#DDLCorpType option:selected").val();
            var DDLApplyType = $("#DDLApplyType option:selected").val();
            var TextBoxApplyDate = $("#TextBoxApplyDate").val();
            var LabelJudger = $("#LabelJudger").attr("numid");
            var TextBoxEmployeesNum = $("#TextBoxEmployeesNum").val();
            
            var TextBoxCertificate = $("#TextBoxCertificate").val();
            var data = {
                nature: DDLApplyType,
                rank: DDLRank,
                type: DDLCorpType,
                date: TextBoxApplyDate,
                organization_id: LabelJudger,
                staff_total: TextBoxEmployeesNum,
                service_pattern_id: b1 + b2 + b3 + b4 + b5 + b6 + b7 + b8 + b9 + b10 + b11 + b12 + b13 + b14 + b15 + b16 + b17 + b18 + b19 + b20 + b21 + b22,
                service_territory_id: c0 + c1 + c2 + c3 + c4 + c5 + c6 + c7 + c8 + c9 + c10 + c11 + c12 + c13 + c14 + c15 + c16 + c17 + c18 + c19 + c20 + c21 + c22 + c23 + c24 + c25 + c26 + c27 + c28 + c29,
                credential_condition: TextBoxCertificate
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
                    console.log(res)
                    if(res.status == 1){
                        localStorage.setItem("applyEditId", res.declare_id)
                    }
                },
                error:function(res){

                }
            })
        }
    })
    $("#ButtonApply").click(function(){
        var b1 = $("#RepeaterServiceMode_ctl00_CheckBoxClass[type='checkbox']:checked").val() ? $("#RepeaterServiceMode_ctl00_CheckBoxClass[type='checkbox']:checked").val() + "," : "",
            b2 = $("#RepeaterServiceMode_ctl01_CheckBoxClass[type='checkbox']:checked").val() ? $("#RepeaterServiceMode_ctl01_CheckBoxClass[type='checkbox']:checked").val() + "," : "",
            b3 = $("#RepeaterServiceMode_ctl02_CheckBoxClass[type='checkbox']:checked").val() ? $("#RepeaterServiceMode_ctl02_CheckBoxClass[type='checkbox']:checked").val() + "," : "",
            b4 = $("#RepeaterServiceMode_ctl03_CheckBoxClass[type='checkbox']:checked").val() ? $("#RepeaterServiceMode_ctl03_CheckBoxClass[type='checkbox']:checked").val() + "," : "",
            b5 = $("#RepeaterServiceMode_ctl04_CheckBoxClass[type='checkbox']:checked").val() ? $("#RepeaterServiceMode_ctl04_CheckBoxClass[type='checkbox']:checked").val() + "," : "",
            b6 = $("#RepeaterServiceMode_ctl05_CheckBoxClass[type='checkbox']:checked").val() ? $("#RepeaterServiceMode_ctl05_CheckBoxClass[type='checkbox']:checked").val() + "," : "",
            b7 = $("#RepeaterServiceMode_ctl06_CheckBoxClass[type='checkbox']:checked").val() ? $("#RepeaterServiceMode_ctl06_CheckBoxClass[type='checkbox']:checked").val() + "," : "",
            b8 = $("#RepeaterServiceMode_ctl07_CheckBoxClass[type='checkbox']:checked").val() ? $("#RepeaterServiceMode_ctl07_CheckBoxClass[type='checkbox']:checked").val() + "," : "",
            b9 = $("#RepeaterServiceMode_ctl08_CheckBoxClass[type='checkbox']:checked").val() ? $("#RepeaterServiceMode_ctl08_CheckBoxClass[type='checkbox']:checked").val() + "," : "",
            b10 = $("#RepeaterServiceMode_ctl09_CheckBoxClass[type='checkbox']:checked").val() ? $("#RepeaterServiceMode_ctl09_CheckBoxClass[type='checkbox']:checked").val() + "," : "",
            b11 = $("#RepeaterServiceMode_ctl10_CheckBoxClass[type='checkbox']:checked").val() ? $("#RepeaterServiceMode_ctl10_CheckBoxClass[type='checkbox']:checked").val() + "," : "",
            b12 = $("#RepeaterServiceMode_ctl11_TextBoxOther").val() ? 12 + "(" + $("#RepeaterServiceMode_ctl11_TextBoxOther").val() + ")" + "," : "",
            b13 = $("#RepeaterServiceMode_ctl00_CheckBoxList_0[type='checkbox']:checked").val() ? $("#RepeaterServiceMode_ctl00_CheckBoxList_0[type='checkbox']:checked").val() + "," : "",
            b14 = $("#RepeaterServiceMode_ctl00_CheckBoxList_1[type='checkbox']:checked").val() ? $("#RepeaterServiceMode_ctl00_CheckBoxList_1[type='checkbox']:checked").val() + "," : "",
            b15 = $("#RepeaterServiceMode_ctl00_CheckBoxList_2[type='checkbox']:checked").val() ? $("#RepeaterServiceMode_ctl00_CheckBoxList_2[type='checkbox']:checked").val() + "," : "",
            b16 = $("#RepeaterServiceMode_ctl00_CheckBoxList_3[type='checkbox']:checked").val() ? $("#RepeaterServiceMode_ctl00_CheckBoxList_3[type='checkbox']:checked").val() + "," : "",
            b17 = $("#RepeaterServiceMode_ctl00_CheckBoxList_4[type='checkbox']:checked").val() ? $("#RepeaterServiceMode_ctl00_CheckBoxList_4[type='checkbox']:checked").val() + "," : "",
            b18 = $("#RepeaterServiceMode_ctl00_CheckBoxList_5[type='checkbox']:checked").val() ? $("#RepeaterServiceMode_ctl00_CheckBoxList_5[type='checkbox']:checked").val() + "," : "",
            b19 = $("#RepeaterServiceMode_ctl00_CheckBoxList_6[type='checkbox']:checked").val() ? $("#RepeaterServiceMode_ctl00_CheckBoxList_6[type='checkbox']:checked").val() + "," : "",
            b20 = $("#RepeaterServiceMode_ctl00_CheckBoxList_7[type='checkbox']:checked").val() ? $("#RepeaterServiceMode_ctl00_CheckBoxList_7[type='checkbox']:checked").val() + "," : "",
            b21 = $("#RepeaterServiceMode_ctl00_CheckBoxList_8[type='checkbox']:checked").val() ? $("#RepeaterServiceMode_ctl00_CheckBoxList_8[type='checkbox']:checked").val() + "," : "",
            b22 = $("#RepeaterServiceMode_ctl00_TextBoxOtherSub").val() ? 22 + "(" + $("#RepeaterServiceMode_ctl00_TextBoxOtherSub").val() + ")" + "," : "";
        var c0 = $("#RepeaterServiceRange_ctl00_CheckBoxClass[type='checkbox']:checked").val() ? $("#RepeaterServiceRange_ctl00_CheckBoxClass[type='checkbox']:checked").val() + "," : "",
            c1 = $("#RepeaterServiceRange_ctl01_CheckBoxClass[type='checkbox']:checked").val() ? $("#RepeaterServiceRange_ctl01_CheckBoxClass[type='checkbox']:checked").val() + "," : "",
            c2 = $("#RepeaterServiceRange_ctl02_CheckBoxClass[type='checkbox']:checked").val() ? $("#RepeaterServiceRange_ctl02_CheckBoxClass[type='checkbox']:checked").val() + "," : "",
            c3 = $("#RepeaterServiceRange_ctl03_CheckBoxClass[type='checkbox']:checked").val() ? $("#RepeaterServiceRange_ctl03_CheckBoxClass[type='checkbox']:checked").val() + "," : "",
            c4 = $("#RepeaterServiceRange_ctl04_CheckBoxClass[type='checkbox']:checked").val() ? $("#RepeaterServiceRange_ctl04_CheckBoxClass[type='checkbox']:checked").val() + "," : "",
            c5 = $("#RepeaterServiceRange_ctl05_CheckBoxClass[type='checkbox']:checked").val() ? $("#RepeaterServiceRange_ctl05_CheckBoxClass[type='checkbox']:checked").val() + "," : "",
            c6 = $("#RepeaterServiceRange_ctl06_CheckBoxClass[type='checkbox']:checked").val() ? $("#RepeaterServiceRange_ctl06_CheckBoxClass[type='checkbox']:checked").val() + "," : "",
            c7 = $("#RepeaterServiceRange_ctl07_CheckBoxClass[type='checkbox']:checked").val() ? $("#RepeaterServiceRange_ctl07_CheckBoxClass[type='checkbox']:checked").val() + "," : "",
            c8 = $("#RepeaterServiceRange_ctl08_CheckBoxClass[type='checkbox']:checked").val() ? $("#RepeaterServiceRange_ctl08_CheckBoxClass[type='checkbox']:checked").val() + "," : "",
            c9 = $("#RepeaterServiceRange_ctl09_CheckBoxClass[type='checkbox']:checked").val() ? $("#RepeaterServiceRange_ctl09_CheckBoxClass[type='checkbox']:checked").val() + "," : "",
            c10 = $("#RepeaterServiceRange_ctl10_CheckBoxClass[type='checkbox']:checked").val() ? $("#RepeaterServiceRange_ctl10_CheckBoxClass[type='checkbox']:checked").val() + "," : "",
            c11 = $("#RepeaterServiceRange_ctl11_CheckBoxClass[type='checkbox']:checked").val() ? $("#RepeaterServiceRange_ctl11_CheckBoxClass[type='checkbox']:checked").val() + "," : "",
            c12 = $("#RepeaterServiceRange_ctl12_CheckBoxClass[type='checkbox']:checked").val() ? $("#RepeaterServiceRange_ctl12_CheckBoxClass[type='checkbox']:checked").val() + "," : "",
            c13 = $("#RepeaterServiceRange_ctl13_CheckBoxClass[type='checkbox']:checked").val() ? $("#RepeaterServiceRange_ctl13_CheckBoxClass[type='checkbox']:checked").val() + "," : "",
            c14 = $("#RepeaterServiceRange_ctl14_CheckBoxClass[type='checkbox']:checked").val() ? $("#RepeaterServiceRange_ctl14_CheckBoxClass[type='checkbox']:checked").val() + "," : "",
            c15 = $("#RepeaterServiceRange_ctl15_CheckBoxClass[type='checkbox']:checked").val() ? $("#RepeaterServiceRange_ctl15_CheckBoxClass[type='checkbox']:checked").val() + "," : "",
            c16 = $("#RepeaterServiceRange_ctl16_TextBoxOther").val() ? 17 + "(" + $("#RepeaterServiceRange_ctl16_TextBoxOther").val() + ")" + "," : "",
            c17 = $("#RepeaterServiceRange_ctl00_CheckBoxList_0[type='checkbox']:checked").val() ? $("#RepeaterServiceRange_ctl00_CheckBoxList_0[type='checkbox']:checked").val() + "," : "",
            c18 = $("#RepeaterServiceRange_ctl00_CheckBoxList_1[type='checkbox']:checked").val() ? $("#RepeaterServiceRange_ctl00_CheckBoxList_1[type='checkbox']:checked").val() + "," : "",
            c19 = $("#RepeaterServiceRange_ctl01_CheckBoxList_0[type='checkbox']:checked").val() ? $("#RepeaterServiceRange_ctl01_CheckBoxList_0[type='checkbox']:checked").val() + "," : "",
            c20 = $("#RepeaterServiceRange_ctl01_CheckBoxList_1[type='checkbox']:checked").val() ? $("#RepeaterServiceRange_ctl01_CheckBoxList_1[type='checkbox']:checked").val() + "," : "",
            c21 = $("#RepeaterServiceRange_ctl00_CheckBoxList_2[type='checkbox']:checked").val() ? $("#RepeaterServiceRange_ctl00_CheckBoxList_2[type='checkbox']:checked").val() + "," : "",
            c22 = $("#RepeaterServiceRange_ctl01_TextBoxOtherSub").val() ? 23 + "(" + $("#RepeaterServiceRange_ctl01_TextBoxOtherSub").val() + ")" + "," : "",
            c23 = $("#RepeaterServiceRange_ctl02_CheckBoxList_0[type='checkbox']:checked").val() ? $("#RepeaterServiceRange_ctl02_CheckBoxList_0[type='checkbox']:checked").val() + "," : "",
            c24 = $("#RepeaterServiceRange_ctl02_CheckBoxList_1[type='checkbox']:checked").val() ? $("#RepeaterServiceRange_ctl02_CheckBoxList_1[type='checkbox']:checked").val() + "," : "",
            c25 = $("#RepeaterServiceRange_ctl00_CheckBoxList_2[type='checkbox']:checked").val() ? $("#RepeaterServiceRange_ctl00_CheckBoxList_2[type='checkbox']:checked").val() + "," : "",
            c26 = $("#RepeaterServiceRange_ctl00_CheckBoxList_3[type='checkbox']:checked").val() ? $("#RepeaterServiceRange_ctl00_CheckBoxList_3[type='checkbox']:checked").val() + "," : "",
            c27 = $("#RepeaterServiceRange_ctl02_TextBoxOtherSub").val() ? 28 + "(" + $("#RepeaterServiceRange_ctl02_TextBoxOtherSub").val() + ")" + "," : "",
            c28 = $("#RepeaterServiceRange_ctl03_CheckBoxList_0[type='checkbox']:checked").val() ? $("#RepeaterServiceRange_ctl03_CheckBoxList_0[type='checkbox']:checked").val() + "," : "",
            c29 = $("#RepeaterServiceRange_ctl03_TextBoxOtherSub").val() ? 30 + "(" + $("#RepeaterServiceRange_ctl03_TextBoxOtherSub").val() + ")" + "," : "";
        var DDLRank = $("#DDLRank option:selected").text();
        var DDLCorpType = $("#DDLCorpType option:selected").val();
        var DDLApplyType = $("#DDLApplyType option:selected").val();
        var TextBoxApplyDate = $("#TextBoxApplyDate").val();
        var LabelJudger = $("#LabelJudger").attr("numid");
        var TextBoxEmployeesNum = $("#TextBoxEmployeesNum").val();
        var TextBoxCertificate = $("#TextBoxCertificate").val();
        var data = {
            declare_id: declare_id,
            nature: DDLApplyType,
            rank: DDLRank,
            type: DDLCorpType,
            date: TextBoxApplyDate,
            organization_id: LabelJudger,
            staff_total: TextBoxEmployeesNum,
            service_pattern_id: b1 + b2 + b3 + b4 + b5 + b6 + b7 + b8 + b9 + b10 + b11 + b12 + b13 + b14 + b15 + b16 + b17 + b18 + b19 + b20 + b21 + b22,
            service_territory_id: c0 + c1 + c2 + c3 + c4 + c5 + c6 + c7 + c8 + c9 + c10 + c11 + c12 + c13 + c14 + c15 + c16 + c17 + c18 + c19 + c20 + c21 + c22 + c23 + c24 + c25 + c26 + c27 + c28 + c29,
            credential_condition: TextBoxCertificate,
            status:1
        }
        $.ajax({
            url: "http://declare.dagaimao.cn/web/index.php?r=apply/save-application",
            type: "post",
            data: data,
            xhrFields: {
                withCredentials: true//设置显式指定浏览器发送Cookie，跨域时默认不使用
            },
            crossDomain: true,
            dataType: "json",
            success: function (res) {
                console.log(res)
            },
            error: function (res) {

            }
        })
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

    function ininData(){
        $.ajax({
            url: "http://declare.dagaimao.cn/web/index.php?r=users/my-data",
            type: "get",
            xhrFields: {
                withCredentials: true//设置显式指定浏览器发送Cookie，跨域时默认不使用
            },
            crossDomain: true,
            dataType: "json",
            success: function (res) {
                if(res.status == 1){
                    var data = res.data;
                   
                    $("#LabelUnitName").html(data.companyName)
                    $("#LabelWebSite").html(data.website)
                    $("#LabelChargePerson").html(data.representative)
                    $("#LabelCP_Tel").html(data.telephone)
                    $("#LabelContactName").html(data.linkMan)
                    $("#LabelContactPosition").html(data.duty)
                    $("#LabelContactTel").html(data.linkPhone1 + "  " + data.linkPhone2)
                    $("#LabelContactMobil").html(data.phone);
                    $("#LabelContactFax").html(data.fax1 + "  " + data.fax2);
                    $("#LabelContactEmail").html(data.email)
                    $("#LabelUnitSeat").html(data.address)
                    if (data.companyType == "0") {
                        $("#LabelUnitNature").html("国有");
                    } else if (data.companyType == "1") {
                        $("#LabelUnitNature").html("民营");
                    } else if (data.companyType == "2") {
                        $("#LabelUnitNature").html("外商投资");
                    } else if (data.companyType == "3") {
                        $("#LabelUnitNature").html("其他");
                    }
                    $("#LabelUnitNature").html()
                }
            },
            error: function (res) {

            }
        })
        if (declare_id !=""){
            $.ajax({
                url: "http://declare.dagaimao.cn/web/index.php?r=apply/edit-my-application&declare_id=" + declare_id,
                type: "get",
                xhrFields: {
                    withCredentials: true//设置显式指定浏览器发送Cookie，跨域时默认不使用
                },
                crossDomain: true,
                dataType: "json",
                success: function (res) {
                    if (res.status == 1) {
                        var path = "http://filed.dagaimao.cn/";
                        console.log(res)
                        var data = res.declareInfo;
                        var date = time2(data.date)
                        var DDLCorpType = $("#DDLCorpType option:selected").val();
                        var DDLApplyType = $("#DDLApplyType option:selected").val();
                        if (data.nature == 0){
                            $("#DDLApplyType option:selected").text("初次申请")
                        }else if(data.nature == 1){
                            $("#DDLApplyType option:selected").text("复核申请")
                        } else if(data.nature == 2){
                            $("#DDLApplyType option:selected").text("升级申请")
                        }
                        if(data.type == 0){
                            $("#DDLCorpType option:selected").text("供应链企业A级评估")
                        }else if(data.type ==1){
                            $("#DDLCorpType option:selected").text("供应链服务质量评级")
                        } else if (data.type == 2) {
                            $("#DDLCorpType option:selected").text("绿色供应链企业评级")
                        }
                        $("#DDLRank option:selected").text(data.rank)
                        $("#TextBoxApplyDate").val(date)
                        $("#DDLCorpType").attr("disabled", "disabled")
                        $("#DDLRank").attr("disabled", "disabled")
                        $("#LabelJudger").html(res.organization)
                        $("#TextBoxEmployeesNum").val(data.staff_total)
                        $("#TextBoxCertificate").val(data.credential_condition)
                        //附表
                        var warehouse_self = data.warehouse_self ? path + data.warehouse_self.slice(35):"";
                        var warehouse_rent = data.warehouse_rent ? path + data.warehouse_rent.slice(35) : "";
                        var trucks_self = data.trucks_self ? path + data.trucks_self.slice(35) : "";
                        var trucks_rent = data.trucks_rent ? path + data.trucks_rent.slice(35) : "";
                        var manager = data.manager ? path + data.manager.slice(35) : "";
                        var salesman = data.salesman ? path + data.salesman.slice(35) : "";
                        var site_listing = data.site_listing ? path + data.site_listing.slice(35) : "";
                        $(".showFile[filename='warehouse_self']").after("<a style='margin-right:15px' class='" + (warehouse_self == "" ? "active" : "") +"' href='" + (warehouse_self == "" ? "javascript:void(0)" : warehouse_self) + "' alt>自有仓储设施清单.xls</a><a class='" + (warehouse_self==""?"active":"")+"' href='javascript:void(0)'>删除</a>");
                        $(".showFile[filename='warehouse_rent']").after("<a style='margin-right:15px' class='" + (warehouse_rent == "" ? "active" : "") + "' href='" + (warehouse_rent == "" ? "javascript:void(0)" : warehouse_rent) + "' alt>租用仓储设施清单.xls</a><a class='" + (warehouse_rent == "" ? "active" : "") + "' href='javascript:void(0)'>删除</a>");
                        $(".showFile[filename='trucks_self']").after("<a style='margin-right:15px' class='" + (trucks_self == "" ? "active" : "") + "' href='" + (trucks_self == "" ? "javascript:void(0)" : trucks_self) + "' alt>自有货运车辆清单.xls</a><a class='" + (trucks_self == "" ? "active" : "") + "' href='javascript:void(0)'>删除</a>");
                        $(".showFile[filename='trucks_rent']").after("<a style='margin-right:15px' class='" + (trucks_rent == "" ? "active" : "") + "' href='" + (trucks_rent == "" ? "javascript:void(0)" : trucks_rent) + "' alt>中高层管理人员清单.xls</a><a class='" + (trucks_rent == "" ? "active" : "") + "' href='javascript:void(0)'>删除</a>");
                        $(".showFile[filename='manager']").after("<a style='margin-right:15px' class='" + (manager == "" ? "active" : "") + "' href='" + (manager == "" ? "javascript:void(0)" : manager) + "' alt>业务人员清单.xls</a><a class='" + (manager == "" ? "active" : "") + "' href='javascript:void(0)'>删除</a>");
                        $(".showFile[filename='salesman']").after("<a style='margin-right:15px' class='" + (salesman == "" ? "active" : "") + "' href='" + (salesman == "" ? "javascript:void(0)" : salesman) + "' alt>运营网点清单.xls</a><a class='" + (salesman == "" ? "active" : "") + "' href='javascript:void(0)'>删除</a>");
                        $(".showFile[filename='site_listing']").after("<a style='margin-right:15px' class='" + (site_listing == "" ? "active" : "") + "' href='" + (site_listing == "" ? "javascript:void(0)" : site_listing) + "' alt>物流服务方案与实施.xls</a><a class='" + (site_listing == "" ? "active" : "") + "' href='javascript:void(0)'>删除</a>");
                        // 附件
                        var company_introduce = data.company_introduce ? path + data.company_introduce.slice(35) : "";
                        var company_license = data.company_license ? path + data.company_license.slice(35) : "";
                        var organization_code = data.organization_code ? path + data.organization_code.slice(35) : "";
                        var tax_certificate = data.tax_certificate ? path + data.tax_certificate.slice(35) : "";
                        var company_articles = data.company_articles ? path + data.company_articles.slice(35) : "";
                        var transport_license = data.transport_license ? path + data.transport_license.slice(35) : "";
                        var auditing_report = data.auditing_report ? path + data.auditing_report.slice(35) : "";
                        var business_range = data.business_range ? path + data.business_range.slice(35) : "";
                        var log_scheme = data.log_scheme ? path + data.log_scheme.slice(35) : "";
                        var organization_structure = data.organization_structure ? path + data.organization_structure.slice(35) : "";
                        var info_introduce = data.info_introduce ? path + data.info_introduce.slice(35) : "";
                        var other = data.other ? path + data.other.slice(35) : "";
                        var initiation = data.initiation ? path + data.initiation.slice(35) : "";
                        $(".showFile[filename='company_introduce']").after("<a style='margin-right:15px' class='" + (company_introduce == "" ? "active" : "") + "' href='" + (company_introduce == "" ? "javascript:void(0)" : company_introduce) + "' alt>企业简介.xls</a><a class='" + (company_introduce == "" ? "active" : "") + "' href='javascript:void(0)'>删除</a>");
                        $(".showFile[filename='company_license']").after("<a style='margin-right:15px' class='" + (company_license == "" ? "active" : "") + "' href='" + (company_license == "" ? "javascript:void(0)" : company_license) + "' alt>营业执照(扫描上传.xls</a><a class='" + (company_license == "" ? "active" : "") + "' href='javascript:void(0)'>删除</a>");
                        $(".showFile[filename='organization_code']").after("<a style='margin-right:15px' class='" + (organization_code == "" ? "active" : "") + "' href='" + (organization_code == "" ? "javascript:void(0)" : organization_code) + "' alt>组织机构代码.xls</a><a class='" + (organization_code == "" ? "active" : "") + "' href='javascript:void(0)'>删除</a>");
                        $(".showFile[filename='tax_certificate']").after("<a style='margin-right:15px' class='" + (tax_certificate == "" ? "active" : "") + "' href='" + (tax_certificate == "" ? "javascript:void(0)" : tax_certificate) + "' alt>税务登记证.xls</a><a class='" + (tax_certificate == "" ? "active" : "") + "' href='javascript:void(0)'>删除</a>");
                        $(".showFile[filename='company_articles']").after("<a style='margin-right:15px' class='" + (company_articles == "" ? "active" : "") + "' href='" + (company_articles == "" ? "javascript:void(0)" : company_articles) + "' alt>企业章程.xls</a><a class='" + (company_articles == "" ? "active" : "") + "' href='javascript:void(0)'>删除</a>");
                        $(".showFile[filename='transport_license']").after("<a style='margin-right:15px' class='" + (transport_license == "" ? "active" : "") + "' href='" + (transport_license == "" ? "javascript:void(0)" : transport_license) + "' alt>其他专业资质证书.xls</a><a class='" + (transport_license == "" ? "active" : "") + "' href='javascript:void(0)'>删除</a>");
                        $(".showFile[filename='auditing_report']").after("<a style='margin-right:15px' class='" + (auditing_report == "" ? "active" : "") + "' href='" + (auditing_report == "" ? "javascript:void(0)" : auditing_report) + "' alt>审计报告.xls</a><a class='" + (auditing_report == "" ? "active" : "") + "' href='javascript:void(0)'>删除</a>");
                        $(".showFile[filename='business_range']").after("<a style='margin-right:15px' class='" + (business_range == "" ? "active" : "") + "' href='" + (business_range == "" ? "javascript:void(0)" : business_range) + "' alt>ISO9001或其他质量管理体系认证证书.xls</a><a class='" + (business_range == "" ? "active" : "") + "' href='javascript:void(0)'>删除</a>");
                        $(".showFile[filename='log_scheme']").after("<a style='margin-right:15px' class='" + (log_scheme == "" ? "active" : "") + "' href='" + (log_scheme == "" ? "javascript:void(0)" : log_scheme) + "' alt>业务辐射面分布图.xls</a><a class='" + (log_scheme == "" ? "active" : "") + "' href='javascript:void(0)'>删除</a>");
                        $(".showFile[filename='organization_structure']").after("<a style='margin-right:15px' class='" + (organization_structure == "" ? "active" : "") + "' href='" + (organization_structure == "" ? "javascript:void(0)" : organization_structure) + "' alt>组织机构图及相关指标职能分配表.xls</a><a class='" + (organization_structure == "" ? "active" : "") + "' href='javascript:void(0)'>删除</a>");
                        $(".showFile[filename='info_introduce']").after("<a style='margin-right:15px' class='" + (info_introduce == "" ? "active" : "") + "' href='" + (info_introduce == "" ? "javascript:void(0)" : info_introduce) + "' alt>信息化简介.xls</a><a class='" + (info_introduce == "" ? "active" : "") + "' href='javascript:void(0)'>删除</a>");
                        $(".showFile[filename='other']").after("<a style='margin-right:15px' class='" + (other == "" ? "active" : "") + "' href='" + (other == "" ? "javascript:void(0)" : other) + "' alt>其他.xls</a><a class='" + (other == "" ? "active" : "") + "' href='javascript:void(0)'>删除</a>");
                        $(".showFile[filename='initiation']").after("<a style='margin-right:15px' class='" + (initiation == "" ? "active" : "") + "' href='" + (initiation == "" ? "javascript:void(0)" : initiation) + "' alt>入会申请表.xls</a><a class='" + (initiation == "" ? "active" : "") + "' href='javascript:void(0)'>删除</a>");
                    }

                },
                error: function (res) {

                }
            })
        }
    }
    ininData();

    $("#saveJudger").click(function(){
        var num = $("#RadioButtonListLocal tbody tr td input[type='radio']:checked").val();
        var val = $("#RadioButtonListLocal tbody tr td input[type='radio']:checked").next().html();
        $("#LabelJudger").html(val)
        $("#LabelJudger").attr("numid",num)
        $("#chooseJudgerModal").modal("hide")
    })
})  
function MoneyOnly(e) {
    //判断输入是否为数字类型
    e.value = e.value.replace(/\D/g, "");
}
