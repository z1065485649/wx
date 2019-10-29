/**
 * http 请求插件
 */
import axios from "axios";

let servers = {
    //dev: 'http://192.168.33.242:7080/',
    dev: 'http://192.168.13.23:8111',
    //dev: 'http://192.168.13.24:8080/',
    test: 'http://192.168.33.233:8090/',
    prod: 'http://personal.bainuo.cn/doctor-web-2.0/',
    pre: 'http://pre-doctor.bainuo.cn/'
};
//统一http请求配置
let http = axios.create({
    timeout: 30000,
    baseURL: ((typeof environment) == 'undefined') ? servers['prod'] : servers[environment]
});

// Add a request interceptor
http.interceptors.request.use(function (config) {
    let token = localStorage.getItem("token");
    if (token) {
        let loginTime=localStorage.getItem("loginTime");
        var nowTime = new Date().getTime();
        if (nowTime - loginTime >= 30 * 60 * 1000) {
            //退出操作
            localStorage.removeItem("token");
            config.headers.token="";
        } else {
            loginTime= nowTime;
            localStorage.setItem("loginTime",loginTime);
            config.headers.token =token;
        }
    }
    return config;
}, function (error) {
    console.error(error);
    return Promise.reject(error);
});

// Add a response interceptor
http.interceptors.response.use(function (response) {
    let result = response.data;
    if (response.status == 200 && result.status == 'OK') {
        return result;
    } else {
        return Promise.reject(result);
    }
}, function (error) {
    return Promise.reject({
        status: "CLIENT_ERROR",
        message: error.message
    });
});

export default {

    install: function (Vue) {
        //为所有的Vue实例添加一个$http属性
        Vue.prototype.$http = http;
    },
};
