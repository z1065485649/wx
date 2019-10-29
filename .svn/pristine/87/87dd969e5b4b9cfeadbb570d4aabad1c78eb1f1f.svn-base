


//开发环境禁用登录模拟用户
  let devUser={
    logged:true,
    profile:{
      name:"bainuo"
    }
}
//正式环境未登录时返回空用户，在login页面修改此对象，然后其他页面require即可获取到当前登录用户信息
//同时，需要考虑保持会话状态，将登陆后的状态信息写入本地存储，以避免每次刷新都需要重新登录
let emptyUser={

  /**
   * 表示是否登录
   */
  logged: false,
  /**
   * 表示用户资料
   */
  profile: null
}
// 通过切换下边两行代码，开启或禁用login页面调试
//export default emptyUser;
 export default process.env.NODE_ENV==='development'?devUser:emptyUser;
