export default function createColumns(onEdit, onDelete) {
    return [
        {
            width: 150,
            title: "名称",
            key: "name"
        },
        {
            width: 250,
            key: "code",
            title: "code",
        },
        {
            width: 250,
            key: "url",
            title: "url",
        },
        {
            width: 250,
            title: "描述",
            key: "description",
        },
        {
            title: "操作",
            key: "action",
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
                            style: {
                                color: "#4DA1FF"
                            },
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
                            style: {
                                color: "#ff0000"
                            },
                            on: {
                                click: () => {
                                    onDelete(params.row);
                                }
                            }
                        },
                        "删除"
                    )
                ]);
            }
        }
    ];
}