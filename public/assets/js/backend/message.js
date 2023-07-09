define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'message/index' + location.search,
                    add_url: 'message/add',
                    edit_url: 'message/edit',
                    del_url: 'message/del',
                    multi_url: 'message/multi',
                    import_url: 'message/import',
                    table: 'message',
                }
            });

            var table = $("#table");

            // 初始化表格
            table.bootstrapTable({
                url: $.fn.bootstrapTable.defaults.extend.index_url,
                pk: 'id',
                sortName: 'id',
                columns: [
                    [
                        {checkbox: true},
                        {field: 'id', title: __('Id')},
                        {field: 'arttt_id', title: __('Arttt_id')},
                        {field: 'name', title: __('Name'), operate: 'LIKE'},
                        {field: 'emails', title: __('Emails'), operate: 'LIKE'},
                        {field: 'createtime', title: __('Createtime'), operate: 'LIKE'},
                        {field: 'types', title: __('Types'), searchList: {"1":__('Types 1'),"2":__('Types 2')}, formatter: Table.api.formatter.normal},
                        {field: 'updatetime', title: __('Updatetime'), operate: 'LIKE'},
                        {field: 'requstip', title: __('Requstip'), operate: 'LIKE'},
                        {field: 'operate', title: __('Operate'), table: table, events: Table.api.events.operate, formatter: Table.api.formatter.operate}
                    ]
                ]
            });

            // 为表格绑定事件
            Table.api.bindevent(table);
        },
        add: function () {
            Controller.api.bindevent();
        },
        edit: function () {
            Controller.api.bindevent();
        },
        api: {
            bindevent: function () {
                Form.api.bindevent($("form[role=form]"));
            }
        }
    };
    return Controller;
});
