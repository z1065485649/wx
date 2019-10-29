import util from '@/libs/util'

export default function (onEditOrg, onDeleteOrg,onToggleActivate) {
    return [
        {
            width: 80,
            title: "序号",
            type: "index",
            align: 'center'
        },

        {
            width: 150,
            key: 'provinceName',
            title: '所属省份'
        },

        {
            width: 150,
            key: 'cityName',
            title: '所属城市',
        },
        {
            width: 250,
            key: 'name',
            title: '机构名称',
        },
        {
            // width: 80,
            key: 'name',
            title: '机构描述',
        },
        {
            width: 120,
            title: '创建时间',
            key: 'createTime',
            render: (h, params) => {
                return h('div', util.formatTimestamp(params.row.createTime));
            }
        },
        {
            width: 120,
            title: '最后更新',
            key: 'lastUpdateTime',
            render: (h, params) => {
                return h('div', util.formatTimestamp(params.row.lastUpdateTime));
            }
        },
        {
            width: 80,
            title: '状态',
            key: 'activated',
            render: (h, params) => {
                return h('div', {
                        class: {
                            'text-danger': !params.row.activated
                        }
                    },
                    params.row.activated ? '启用' : '禁用');
            }
        },

        {
            width: 180,
            title: '操作',
            key: 'action',
            align: 'center',
            render: (h, params) => {
                return h('div', [
                    h('Button', {
                        props: {
                            type: 'text',
                            size: 'small'
                        },
                        class:['text-info'],
                        on: {
                            click: () => {
                                onEditOrg(params.row);
                            }
                        }
                    }, '编辑'),

                    h('Button', {
                        props: {
                            type: 'text',
                            size: 'small'
                        },
                        class:['text-info'],
                        on: {
                            click: () => {
                                onToggleActivate(params.row);
                            }
                        }
                    }, params.row.activated ? '禁用' : '启用'),

                    h('Button', {
                        props: {
                            type: 'text',
                            size: 'small'
                        },
                        class:['text-danger'],
                        on: {
                            click: () => {
                                onDeleteOrg(params.row);
                            }
                        }
                    }, '删除'),

                ]);
            }
        }];
}