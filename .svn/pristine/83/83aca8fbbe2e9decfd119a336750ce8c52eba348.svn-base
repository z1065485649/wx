import Vue from "vue";
import VueRouter from "vue-router";
import Util from "@/libs/util";
import routes from './routes'

Vue.use(VueRouter);

//在正式项目中，可以将各个模块的路由配置单独放在一个js文件中，然后在这里合并起来

//初始化路由器并设置钩子
let router = new VueRouter({
  routes: routes,
  mode: 'history'
});

router.beforeEach((to, from, next) => {
  if (to.path != '/login' && !localStorage.getItem('token')) {
    router.push({ name: "login" });
  }
  next();
});

router.beforeEach((to, from, next) => {
  Util.title(to.meta.title);
  next();
});

export default router;
