function time(data) {
    var date = new Date(data * 1000);
    var year = date.getFullYear();
    var mont = (date.getMonth() + 1) < 9 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1);
    var day = date.getDate();
    var time = year + "-" + mont + "-" + day;
    return time;
}
window.table = $("#gvInfo").DataTable({
    processing: true,  //隐藏加载提示,自行处理
    searching: false,  //禁用原生搜索
    ordering: false,
    lengthChange: false,
    bLengthChange: true,
    displayStart: 0,
    bDeferRender: true,
    pageLength: 2,
    serverSide: !0,
    dom: "<'row'<'col-sm-12'tr>>\n\t\t\t<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7 dataTables_pager'lp>>",
    lengthMenu: [2, 4, 8, 10],
    language: {
        "sProcessing": "处理中...",
        "sLengthMenu": "显示 _MENU_ ",
        "sZeroRecords": "没有匹配结果",
        "sInfo": "显示第 _START_ 至 _END_ ，共 _TOTAL_ 项",
        "sInfoEmpty": "显示第 0 至 0 ，共 0 项",
        "sInfoFiltered": "(由 _MAX_ 项结果过滤)",
        "sInfoPostFix": "",
        "sSearch": "搜索:",
        "sUrl": "",
        "sEmptyTable": "表中数据为空",
        "sLoadingRecords": "载入中...",
        "sInfoThousands": ",",
        "oPaginate": {
            "sFirst": "首页",
            "sPrevious": "上页",
            "sNext": "下页",
            "sLast": "末页"
        },
        "oAria": {
            "sSortAscending": ": 以升序排列此列",
            "sSortDescending": ": 以降序排列此列"
        }
    },
    ajax: function (data, callback, settings) {
        var pageNum = settings._iDisplayStart / settings._iDisplayLength;
        var data = {
            page: (pageNum + 1),
            pageData: settings._iDisplayLength
        }
        $.ajax({
            url: "http://declare.dagaimao.cn/web/index.php?r=apply/company",
            type: "post",
            data: data,
            xhrFields: {
                withCredentials: true//设置显式指定浏览器发送Cookie，跨域时默认不使用
            },
            crossDomain: true,
            dataType: "json",
            success: function (res) {
                console.log(res)
                var dataList = res.user_info;
                console.log(dataList)
                var returnData = {};
                returnData.aaData = dataList;
                returnData.iTotalDisplayRecords = res.totalCount;
                returnData.iTotalRecords = res.totalCount;
                callback(returnData);
            }
        })
    },
    columnDefs: [{
        targets: [0],
        'title': '企业名称',
        "data": "account",
        "render": function (data, type, row, meta) {
            return "<span>" + data + "</span>"
        }
    }, {
        targets: [1],
        'data': 'type',
        'title': '申报类型',
        "render": function (data, type, row, meta) {
            if (row.type == 0) {
                return "<span>供应链企业A级评估</span>"
            } else if (row.type == 1) {
                return "<span>供应链服务质量评级</span>"
            } else if (row.type == 2) {
                return "<span>绿色供应链企业评级</span>"
            }

        }
    }, {
        targets: [2],
        'data': 'rank',
        'title': '申报级别',
        "width": '80px',
        "render": function (data, type, row, meta) {
            if (row.rank == "A") {
                return "<span>A</span>"
            } else if (row.rank == "AA") {
                return "<span>AA</span>"
            } else if (row.rank == "AAA") {
                return "<span>AAA</span>"
            }

        }
    }, {
        targets: [3],
        'title': '批次',
        "width": '60px',
        "render": function (data, type, row, meta) {
            return "<span>1</span>"
        }
    }, {
        targets: [4],
        'title': '注册时间',
        "render": function (data, type, row, meta) {
            var Time = time(43243243)
            return "<span class='Handle'>" + Time + "</span>"
        }
    }, {
        targets: [5],
        'title': '状态',
        "render": function (data, type, row, meta) {
            return "<span>成功<span>"
        }
    }, {
        targets:[6],
        'title':'操作',
        'render':function(data,type,row,meta){
            return "<span class='registerInfo'>注册信息</span><span class='AssessmentInfo'>评估信息</span><span class='financial'>财务报表</span>"
        }
    }]
});