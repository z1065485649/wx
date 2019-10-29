/**
 * 精品课程管理
 * Created by bainuo on 2017/12/19.
 */
let courseListRoute={
    path: '/courseList',
    meta: {
        title: "精品课程管理",
        breadcrumb: false,
    },
    component: (resolve) => require(['@/views/live/course/CourseMangeList'], resolve),
};

let courseAddRoute={
    name:'courseAdd',
    path: '/courseAdd',
    meta: {
        title: "新增课程",
        breadcrumb: true,
    },
    component: (resolve) => require(['@/views/live/course/CourseAdd'], resolve),
};
let courseDetailsRoute={
    name:'courseDetails',
    path: '/courseDetails',
    meta: {
        title: "课程详情",
        breadcrumb: true,
    },
    component: (resolve) => require(['@/views/live/course/CourseDetails'], resolve),
};
/***课程章节****/
let chapterAddOrEditRoute={
    name:'chapterAddOrEdit',
    path: '/chapterAddOrEdit',
    meta: {
        title: "新增章节",
        breadcrumb: false,
    },
    component: (resolve) => require(['@/views/live/course/CourseChapter'], resolve),
};

let courseChapterRoute={
    name:'courseChapter',
    path: '/courseChapter',
    redirect:'/chapterAddOrEdit',
    meta: {
        title: "章节管理",
        breadcrumb: true,
    },
    component: {
        template: '<router-view></router-view>'
    },
    children:[chapterAddOrEditRoute]
};
/***课程章节end****/

export default {
    name:'course',
    path: '/boutique/course',
    redirect: '/courseList',
    meta: {
        title: "精品课程管理",
        breadcrumb: true
    },
    component: {
        template: '<keep-alive include="CourseMangePage"><router-view></router-view></keep-alive>'
    },
    children: [courseListRoute,courseAddRoute,courseDetailsRoute,courseChapterRoute]
}
