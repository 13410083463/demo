$(function(){var b={code:"",pass:"",qass:"",enterprise:"",path:"",Website:"",email:"",Telephone:"",Contacts:"",post:"",Contactnumber:"",Mobile:"",fax:"",zipCode:"",Unitpropery:"",Unitintroduction:"",Unitintroduction2:""};$("#select").citySelect({url:"lib/city.min.js",prov:"请选择",city:"请选择",required:!1}),$(".but_01").on("click",function(){b.code="",b.pass="",b.qass="",b.enterprise="",b.path="",b.Website="",b.email="",b.Telephone="",b.Contacts="",b.post="",b.Contactnumber="",b.Mobile="",b.fax="",b.zipCode="",b.Unitpropery="",b.Unitintroduction="",b.Unitintroduction2="";var t=$("#TextBoxRegisteredID").val(),n=$("#TextBoxPassword1").val(),e=$("#TextBoxPassword2").val(),o=$("#TextBoxUnitName").val(),a=$("#TextBoxUnitSeat").val(),i=$("#TextBoxWebSite").val(),s=$("#TextBoxContactEmail").val(),l=$("#TextBoxChargePerson").val(),r=$("#TextBoxCP_Tel").val(),c=$("#TextBoxContactName").val(),x=$("#TextBoxContactPosition").val(),p=$("#TextBoxContactTelAC").val(),C=$("#TextBoxPostCode").val(),T=$("#TextBoxContactFaxAC").val(),d=$("#TextBoxPostCode").val(),v=$("#DDLUnitNature").val(),u=$("#TextBoxIntroduction").val(),B=$("#TextBoxContactTel").val(),U=$("#TextBoxContactFax").val();""==t&&(b.code="-请输入统一社会信用代码\n\n"),""==n&&(b.pass="-请输入密码\n\n"),""==e&&(b.qass="-请重复输入密码\n\n"),""==o&&(b.enterprise="-请输入企业名称\n\n"),""==a&&(b.path="-请选择省市\n\n"),""==i&&(b.Website="--请输入企业网址\n\n"),""==s&&(b.email="-请输入电子信箱\n\n"),""==l&&(b.Telephone="-请输入法人代表\n\n"),""==r&&(b.Contacts="-请输入电话\n\n"),""==c&&(b.post="-请输入联系人\n\n"),""==x&&(b.Contactnumber="-请输入职务\n\n"),""!=p&&""!=B||(b.Mobile="-请输入联系电话\n\n"),""==C&&(b.fax="-请输入手机\n\n"),""!=T&&""!=U||(b.zipCode="-请输入传真\n\n"),""==d&&(b.Unitpropery="-请输入邮编\n\n"),""==v&&(b.Unitintroduction="-请选择单位性质\n\n"),""==u&&(b.Unitintroduction2="-请输入企业简介"),""==t||""==n||""==e||""==o||""==a||""==i||""==s||""==l||""==r||""==c||""==x||""==p||""==C||""==T||""==d||""==v||""==u||""==B||""==U?alert(b.code+b.pass+b.qass+b.enterprise+b.path+b.Website+b.email+b.Telephone+b.Contacts+b.post+b.Contactnumber+b.Mobile+b.fax+b.zipCode+b.Unitpropery+b.Unitintroduction+b.Unitintroduction2):console.log("全部正确")}),$("#DDLUnitNature").on("click",function(){var t=$(this).val();console.log(t),"SOE"==t?$("#span_Nature").show():$("#span_Nature").hide()})});