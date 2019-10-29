let resource = {
    path: 'resource',
    meta: {
        title: "资源管理",
        breadcrumb: true,
    },
    component: (resolve) => require(['@/views/setting/resource/ResourceManager'], resolve),
};

let role = {
    path: 'role',
    meta: {
        title: "角色管理",
        breadcrumb: true,
    },
    component: (resolve) => require(['@/views/setting/role/RoleManager'], resolve),
};

let user = {
    path: 'user',
    meta: {
        title: "用户管理",
        breadcrumb: true,
    },
    component: {
        name: 'UserManager',
        template: '<router-view></router-view>'
    },
    children: [
        {
            path: '',
            component: (resolve) => require(['@/views/setting/user/Search'], resolve)
        },
        {
            path: 'create',
            meta: {
                title: "添加用户",
                breadcrumb: false,
            },
            component: (resolve) => require(['@/views/setting/user/Create'], resolve),
        },
        {
            path: ':user_id',
            meta: {
                title: "编辑用户资料",
                breadcrumb: false,
            },
            component: (resolve) => require(['@/views/setting/user/Edit'], resolve),
        }
    ]
};

let organization = {
    path: 'organization',
    meta: {
        title: "组织机构",
        breadcrumb: true,
    },
    component: (resolve) => require(['@/views/setting/organization/OrganizationManager'], resolve),
};


export default {
    path: '/setting',
    redirect: '/setting/user',
    meta: {
        title: "系统设置",
        breadcrumb: true
    },
    component: {
        name: 'setting',
        template: '<router-view></router-view>'
    },
    children: [resource, role, user, organization]
}
