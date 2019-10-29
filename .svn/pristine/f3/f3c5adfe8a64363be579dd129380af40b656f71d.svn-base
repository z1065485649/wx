/**
 * 启动页管理
 * Created by bainuo on 2017/12/21.
 */
let startPageListRoute={
    path: '/startPageList',
    meta: {
        title: "启动页管理",
        breadcrumb: false,
    },
    component: (resolve) => require(['@/views/live/contentManage/startPage/StartPageList'], resolve),
};
let startPageAddRoute={
    path: '/startPageAdd',
    meta: {
        title: "新增启动页",
        breadcrumb: false,
    },
    component: (resolve) => require(['@/views/live/contentManage/startPage/StartPageAdd'], resolve),
};

export default {
    name:'startPage',
    path: '/startPage',
    redirect: '/startPageList',
    meta: {
        title: "启动页管理",
        breadcrumb: true
    },
    component: {
        template: '<keep-alive include="banner"><router-view></router-view></keep-alive>'
    },
    children: [startPageListRoute,startPageAddRoute]
}
