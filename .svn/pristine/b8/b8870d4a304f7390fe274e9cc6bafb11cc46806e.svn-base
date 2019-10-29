// 圈子列表
let circleMangePageRoute={
    name:'circleMangePage',
    path:'/circleMangePage',
    meta:{
        title:"",
        breadcrumb: false,
    },
    component: (resolve) => require(['@/views/live/circleManage/circleList/CircleMangePage'], resolve),
};

let circleMangeAddRoute={
    name:'circleMangeAdd',
    path:'/circleMangeAdd',
    meta:{
        title:"新增圈子",
        breadcrumb: true,
    },
    component: (resolve) => require(['@/views/live/circleManage/circleList/CircleMangeAdd'], resolve),
};

let circleMangeEditRoute={
    name:'circleMangeEdit',
    path:'/circleMangeEdit',
    meta:{
        title:"修改圈子",
        breadcrumb: true,
    },
    component: (resolve) => require(['@/views/live/circleManage/circleList/CircleMangeAdd'], resolve),
};

let circleMangeDetailsRoute={
    name:'circleMangeDetails',
    path:'/circleMangeDetails',
    meta:{
        title:"圈子详情",
        breadcrumb: true,
    },
    component: (resolve) => require(['@/views/live/circleManage/circleList/CircleMangeDetails'],resolve),
}

let circleMangeMemberRoute={
    name:'circleMangeMember',
    path:'/circleMangeMember',
    meta:{
        title:"成员管理",
        breadcrumb: true,
    },
    component: (resolve) => require(['@/views/live/circleManage/circleList/CircleMangeMember'],resolve),
}


let circleManageRoute = {
    path: '/circleList',
    redirect: '/circleMangePage',
    component: {
        template: '<router-view></router-view>'
    },
    meta:{
        title:"圈子列表",
        breadcrumb: false,
    },
    children: [circleMangePageRoute,circleMangeAddRoute,circleMangeEditRoute,circleMangeDetailsRoute,circleMangeMemberRoute]
};

// 管理圈子

let circlePostDetailRoute={
    name:'circlePostDetail',
    path:'/circlePostDetail',
    meta:{
        title:"帖子管理",
        breadcrumb: true,
    },
    component: (resolve) => require(['@/views/live/circleManage/circlePostManage/CirclePostDetail'], resolve),
};

let circlePostListRoute={
    name:'circlePostList',
    path:'/circlePostList',
    meta:{
        title:"帖子列表",
        breadcrumb: false,
    },
    component: (resolve) => require(['@/views/live/circleManage/circlePostManage/CirclePostList'], resolve),
};

let circleManageEditRoute = {
    path: '/circlePostManage',
    redirect: '/circlePostList',
    component: {
        template: '<router-view></router-view>'
    },
    meta:{
        title:"帖子列表",
        breadcrumb: true,
    },
    children: [circlePostListRoute,circlePostDetailRoute]
};

// 分类管理

let circleTypeListRoute={
    name:'circleTypeList',
    path:'/circleTypeList',
    meta:{
        title:"",
        breadcrumb: false,
    },
    component: (resolve) => require(['@/views/live/circleManage/circleManageType/CircleTypeList'], resolve),
};

let circleTypeAddRoute={
    name:'circleTypeAdd',
    path:'/circleTypeAdd',
    meta:{
        title:"新增分类",
        add:'新增分类',
        edit:'编辑分类',
        breadcrumb: true,
    },
    component: (resolve) => require(['@/views/live/circleManage/circleManageType/CircleTypeAdd'], resolve),
};

let circleManageTypeRoute = {
    path: '/circleManageType',
    redirect: '/circleTypeList',
    component: {
        template: '<router-view></router-view>'
    },
    meta:{
        title:"分类管理",
        breadcrumb: true,
    },
    children: [circleTypeListRoute,circleTypeAddRoute]
};

// 关键字维护
let keywordListRoute={
    path: '/keywordList',
    meta: {
        title: "关键字维护",
        breadcrumb: true,
    },
    component: (resolve) => require(['@/views/live/circleManage/keywordMange/KeywordList'], resolve),
};

let keywordAddRoute={
    path: '/keywordAdd',
    meta: {
        title: "新增关键字",
        breadcrumb: true,
    },
    component: (resolve) => require(['@/views/live/circleManage/keywordMange/keywordAdd'], resolve),
};
// 归总

export default {
    path: '/circle/manage',
    redirect: '/circleList',
    meta: {
        title: "圈子管理",
        breadcrumb: true
    },
    component: {
        template: '<keep-alive include="circleList"><router-view></router-view></keep-alive>'
    },
    children: [circleManageRoute,circleManageEditRoute,circleManageTypeRoute,keywordListRoute,keywordAddRoute]
}
