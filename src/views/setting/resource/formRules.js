export default {
    name: {
        required: true,
        message: "请填写菜单/资源名称"
    },
    code: {
        required: true,
        message: "请填写唯一编号，编号用于系统检查访问请求时使用"
    },
    url: {
        required: true,
        message: "请填写链接地址，url用于在页面中跳转，比如后台系统的菜单连接地址"
    },
    sort: {
        type: "number",
        required: true,
        message: "请设置排序字段"
    },
};