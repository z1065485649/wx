

export default {
    name: 'dashboard',
    path: '/dashboard',
    meta: {
        title: '控制台',
        breadcrumb: true,
    },
    component: (resolve) => require(['@/views/Dashboard'], resolve),
};