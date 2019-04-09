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
    formData.append('type', 'list')
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
    console.log(declare_id)
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
                        declare_id = res.declare_id
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
                        var data = res.declareInfo;
                        console.log(data)
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
