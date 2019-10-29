let userFeedback = {
    name: 'userFeedback',
    path: '/userFeedback',
    meta: {
        title: "用户反馈",
        breadcrumb: true,
    },
    component: (resolve) => require(['@/views/live/systemManage/UserFeedback'], resolve),
};
let userReport={
    name:'userReport',
    path:'/userReport',
    meta:{
        title:"用户举报",
        breadcrumb: true,
    },
    component: (resolve) => require(['@/views/live/systemManage/UserReport'], resolve),
};

export default {
    path: '/system/manage',
    redirect: '/userFeedback',
    meta: {
        title: "系统管理",
        breadcrumb: true
    },
    component: {
        name: 'systemManage',
        template: '<router-view></router-view>'
    },
    children: [userFeedback,userReport]
}
