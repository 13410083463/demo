$(function () {
    var obj = {
        code:"",
        pass:"",
        qass:"",
        enterprise:"",
        path:"",
        Website:"",
        email:"",
        Telephone:"",
        Contacts:"",
        post:"",
        Contactnumber:"",
        Mobile:"" ,
        fax:"",
        zipCode:"",
        Unitpropery:"",
        Unitintroduction:"",
        Unitintroduction2:""
    }
    $("#select").citySelect({
        url: "../../lib/city.min.js",
        prov: "请选择",
        city: "请选择",
        required: false
    });

    $(".but_01").on("click", function () {
        obj.code = "";
        obj.pass = "";
        obj.qass = "";
        obj.enterprise = "";
        obj.path = "";
        obj.Website = "";
        obj.email = "";
        obj.Telephone = "";
        obj.Contacts = "";
        obj.post = "";
        obj.Contactnumber = "";
        obj.Mobile = "";
        obj.fax = "";
        obj.zipCode = "";
        obj.Unitpropery = "";
        obj.Unitintroduction = "";
        obj.Unitintroduction2 = "";
        var TextBoxRegisteredID = $("#TextBoxRegisteredID").val(), TextBoxPassword1 = $("#TextBoxPassword1").val(), TextBoxPassword2 = $("#TextBoxPassword2").val(),
            TextBoxUnitName = $("#TextBoxUnitName").val(), TextBoxUnitSeat = $("#TextBoxUnitSeat").val(), TextBoxWebSite = $("#TextBoxWebSite").val(),
            TextBoxContactEmail = $("#TextBoxContactEmail").val(), TextBoxChargePerson = $("#TextBoxChargePerson").val(), TextBoxCP_Tel = $("#TextBoxCP_Tel").val(),
            TextBoxContactName = $("#TextBoxContactName").val(), TextBoxContactPosition = $("#TextBoxContactPosition").val(), TextBoxContactTelAC = $("#TextBoxContactTelAC").val(),
            TextBoxContactMobil = $("#TextBoxPostCode").val(), TextBoxContactFaxAC = $("#TextBoxContactFaxAC").val(), TextBoxPostCode = $("#TextBoxPostCode").val(),
            DDLUnitNature = $("#DDLUnitNature").val(), TextBoxIntroduction = $("#TextBoxIntroduction").val(), TextBoxContactTel = $("#TextBoxContactTel").val(),
            TextBoxContactFax = $("#TextBoxContactFax").val(), RadioIsMember = $("#radio input[type='radio']:checked").val();
        var data = {
            account: TextBoxRegisteredID,
            password1: TextBoxPassword1,
            password2: TextBoxPassword2,
            companyName: TextBoxUnitName,
            companyAdress: TextBoxUnitSeat,
            website: TextBoxWebSite,
            email: TextBoxContactEmail,
            representative: TextBoxChargePerson,
            telephone: TextBoxCP_Tel,
            linkMan: TextBoxContactName,
            duty: TextBoxContactPosition,
            linkPhone1: TextBoxContactTelAC,
            linkPhone2: TextBoxContactTel,
            phone: TextBoxContactMobil,
            fax: TextBoxContactFaxAC,
            fax2: TextBoxContactFax,
            postcode: TextBoxPostCode,
            Member: RadioIsMember,
            company_type: DDLUnitNature,
            presentation: TextBoxIntroduction
        }
        if (TextBoxRegisteredID == ""){
            obj.code = "-请输入统一社会信用代码\n\n"
        }
        if (TextBoxPassword1 == "") {
            obj.pass = "-请输入密码\n\n";
        }
        if (TextBoxPassword2 == "") {
            obj.qass = "-请重复输入密码\n\n";
        }
        if (TextBoxUnitName == "") {
            obj.enterprise = "-请输入企业名称\n\n";
        }
        if (TextBoxUnitSeat == "") {
            obj.path = "-请选择省市\n\n";
        }
        if (TextBoxWebSite == "") {
            obj.Website = "--请输入企业网址\n\n"
        }
        if (TextBoxContactEmail == "") {
            obj.email = "-请输入电子信箱\n\n";
        }
        if (TextBoxChargePerson == ""){
            obj.Telephone = "-请输入法人代表\n\n";
        }
        if (TextBoxCP_Tel == "") {
            obj.Contacts = "-请输入电话\n\n";
        }
        if (TextBoxContactName == ""){
            obj.post = "-请输入联系人\n\n";
        }
        if (TextBoxContactPosition == "") {
            obj.Contactnumber = "-请输入职务\n\n";
        }
        if (TextBoxContactTelAC == "" || TextBoxContactTel == ""){
            obj.Mobile = "-请输入联系电话\n\n";
        }
        if (TextBoxContactMobil == "") {
            obj.fax = "-请输入手机\n\n";
        }
        if (TextBoxContactFaxAC == "" || TextBoxContactFax == ""){
            obj.zipCode = "-请输入传真\n\n";
        }
        if (TextBoxPostCode == ""){
            obj.Unitpropery = "-请输入邮编\n\n";
        }
        if (DDLUnitNature == ""){
            obj.Unitintroduction = "-请选择单位性质\n\n";
        }
        if (TextBoxIntroduction == ""){
            obj.Unitintroduction2 = "-请输入企业简介";
        }
        if (TextBoxRegisteredID == "" || TextBoxPassword1 == "" || TextBoxPassword2 == "" || TextBoxUnitName == "" || TextBoxUnitSeat == "" || TextBoxWebSite == "" || TextBoxContactEmail == "" || TextBoxChargePerson == "" || TextBoxCP_Tel == "" || TextBoxContactName == "" || TextBoxContactPosition == "" || TextBoxContactTelAC == "" || TextBoxContactMobil == "" || TextBoxContactFaxAC == "" || TextBoxPostCode == "" || DDLUnitNature == "" || TextBoxIntroduction == "" || TextBoxContactTel == "" || TextBoxContactFax == "" ){
            alert(obj.code + obj.pass + obj.qass + obj.enterprise + obj.path + obj.Website + obj.email + obj.Telephone + obj.Contacts + obj.post + obj.Contactnumber + obj.Mobile + obj.fax + obj.zipCode + obj.Unitpropery + obj.Unitintroduction + obj.Unitintroduction2);
        }else{
            console.log(data)

            $.ajax({
                url: "http://declare.dagaimao.cn/web/index.php?r=users/deal-register&account=123&password1=1&password2=1&companyName=2&companyAdress=2&website=2&email=2&representative=2&telephone=2&linkMan=2&duty=2&linkPhone1=2&linkPhone2=22&phone=2&fax=2&fax2=2&postcode=2&Member=2&company_type=2&presentation=2",
                type: 'post',
                // data: data,
                crossDomain: true,
                processData: false,
                success: function (res) {
                    console.log(res)
                },
                error: function () {
                    console.log("error!!!!");
                }
            })
           
        }
    });

    $("#DDLUnitNature").on("click",function(){
        var value = $(this).val();
        console.log(value)
        if(value == "SOE"){
            $("#span_Nature").show();
        }else{
            $("#span_Nature").hide();
        }
    })
});