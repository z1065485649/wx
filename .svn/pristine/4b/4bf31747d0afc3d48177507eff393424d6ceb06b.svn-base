import util from '@/libs/util'

export default function (onEdit, onToggleActivated, onDelete, onSetPermission) {
    return [
        {
            width: 80,
            title: "序号",
            type: "index",
            align: 'center'
        },
        {
            width: 200,
            title: "名称",
            key: "name",
            align: 'center'
        },
        {
            title: "说明",
            key: "description"
        },
        {
            width: 200,
            align: 'center',
            title: "更新时间",
            key: "lastUpdateTime",
            render: (h, params) => {
                return h("span", {}, util.formatTimestamp(params.row.lastUpdateTime));
            }
        },
        {
            width: 100,
            title: "状态",
            align: 'center',
            key: "activated",
            render: (h, params) => {
                return h("span", {
                    class: {
                        'text-danger': !params.row.activated
                    }
                }, params.row.activated ? '启用' : '禁用');
            }
        },
        {
            title: "操作",
            key: "action",
            width: 300,
            align: "center",
            render: (h, params) => {
                return h("div", [
                    h(
                        "Button",
                        {
                            props: {
                                type: "text",
                                size: "small"
                            },
                            class:['text-info'],
                            on: {
                                click: () => {
                                    onEdit(params.row);
                                }
                            }
                        },
                        "编辑"
                    ),
                    h(
                        "Button",
                        {
                            props: {
                                type: "text",
                                size: "small"
                            },
                            class:['text-info'],
                            on: {
                                click: () => {
                                    onToggleActivated(params.row);
                                }
                            }
                        },
                        params.row.activated ? '禁用' : '启用'
                    ),
                    h(
                        "Button",
                        {
                            props: {
                                type: "text",
                                size: "small"
                            },
                            class:['text-info'],
                            on: {
                                click: () => {
                                    onSetPermission(params.row);
                                }
                            }
                        },
                        "授权"
                    ),
                    h(
                        "Button",
                        {
                            props: {
                                type: "text",
                                size: "small"
                            },
                            class:['text-danger'],
                            on: {
                                click: () => {
                                    onDelete(params.row);
                                }
                            }
                        },
                        "删除"
                    ),
                ]);
            }
        }
    ];
};