/**
 * banner管理
 * Created by bainuo on 2017/12/21.
 */
let bannerListRoute={
    path: '/bannerList',
    meta: {
        title: "banner管理",
        breadcrumb: false,
    },
    component: (resolve) => require(['@/views/live/contentManage/banner/BannerList'], resolve),
};
let bannerAddRoute={
    name:'bannerAdd',
    path: '/bannerAdd',
    meta: {
        title: "新增banner",
        breadcrumb: true,
    },
    component: (resolve) => require(['@/views/live/contentManage/banner/BannerAdd'], resolve),
};

export default {
    name:'banner',
    path: '/banner',
    redirect: '/bannerList',
    meta: {
        title: "banner管理",
        breadcrumb: true
    },
    component: {
        template: '<keep-alive include="banner"><router-view></router-view></keep-alive>'
    },
    children: [bannerListRoute,bannerAddRoute]
}
