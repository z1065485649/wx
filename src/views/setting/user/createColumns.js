import util from '@/libs/util'

export default function (onEditUser, onToggleActivate, onResetPassword) {
    return [
        {
            width: 80,
            title: "序号",
            type: "index",
            align: 'center'
        },

        {
            width: 150,
            key: 'phone',
            title: '登陆账号'
        },

        {
            key: 'name',
            title: '姓名',
        },
        {
            width: 80,
            key: 'gender',
            title: '性别',
            align: 'center',
            render: (h, params) => {
                let gender = '';
                switch (params.row.gender) {
                    case 'LADY':
                        gender = '女';
                        break;
                    case 'MAN':
                        gender = '男';
                        break;
                }
                return h('div', gender);
            }
        },

        {
            width: 180,
            title: '创建时间',
            key: 'createTime',
            render: (h, params) => {
                return h('div', util.formatTimestamp(params.row.createTime));
            }
        },

        {
            width: 180,
            title: '角色',
            key: 'roleName',
            align: 'center'
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
                }, params.row.activated ? '启用' : '禁用');
            }
        },

        {
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
                                onEditUser(params.row);
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
                                onResetPassword(params.row);
                            }
                        }
                    }, '重置密码'),

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

                ]);
            }
        }];
}