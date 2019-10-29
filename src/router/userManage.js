let userManageRoute = {
    path: '/userList',
    meta: {
        keepAlive: true,
        title: "用户列表",
        breadcrumb: false,
    },
    component: (resolve) => require(['@/views/live/userManage/UserMangePage'], resolve),
};
let userMangeAddRoute={
    name:'userMangeAdd',
    path:'/userMangeAdd',
    meta:{
        keepAlive: true,
        title:"新增用户",
        breadcrumb: true,
    },
    component: (resolve) => require(['@/views/live/userManage/UserMangeAdd'], resolve),
};

let userMangeDetailsRoute={
    name:'userMangeDetails',
    path:'/userMangeDetails',
    meta:{
        title:"查看详情",
        breadcrumb: true,
    },
    component: (resolve) => require(['@/views/live/userManage/UserMangeDetails'],resolve),
}

let userMangeCheckRoute={
    name:'userMangeCheck',
    path:'/userMangeCheck',
    meta:{
        title:"审核",
        breadcrumb: true,
    },
    component: (resolve) => require(['@/views/live/userManage/UserMangeCheck'],resolve),
}

export default {
    path: '/user/manage',
    redirect: '/userList',
    meta: {
        title: "用户管理",
        breadcrumb: true
    },
    component: {
        template: '<keep-alive include="userList"><router-view></router-view></keep-alive>'
    },
    children: [userManageRoute,userMangeAddRoute,userMangeDetailsRoute,userMangeCheckRoute]
}
