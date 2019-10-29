
import Vue from 'vue'

const userJon={name:"test"};

//kb转M
Vue.prototype.bytesToSize=function(bytes){
  if (bytes === 0) return '0 B';
  var k = 1000, // or 1024
    sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
    i = Math.floor(Math.log(bytes) / Math.log(k));
  return (bytes / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i];
};
//时间格式化
Vue.prototype.byformatDate=function(date){
    if(date==''||date==null){
      return '';
    }
    const y = date.getFullYear();
    let m = date.getMonth() + 1;
    m = m < 10 ? '0' + m : m;
    let d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    return y + '-' + m + '-' + d;
};

Vue.prototype.validateEmpty=function(rules,value,callback){
  if(value.trim()=='') {
    callback(new Error(rules.message));
  }else{
    callback();
  }
};

//时间戳转月年日
Vue.prototype.byformatTimestamp=function(date){
  if(date==''||date==null){
    return '';
  }
  date=new Date(date);
  const y = date.getFullYear();
  let m = date.getMonth() + 1;
  m = m < 10 ? '0' + m : m;
  let d = date.getDate();
  d = d < 10 ? ('0' + d) : d;
  return y + '-' + m + '-' + d;
};
Vue.prototype.byformatDateTime=function(date){
  if(date==''||date==null){
    return '';
  }
  //needTime是整数，否则要parseInt转换
  var time = new Date(date);
  var y = time.getFullYear();
  var m = time.getMonth()+1;
  var d = time.getDate();
  var h = time.getHours();
  var mm = time.getMinutes();
  var s = time.getSeconds();
  return y+'-'+add0(m)+'-'+add0(d)+' '+add0(h)+':'+add0(mm)+':'+add0(s);
};
function add0(m){return m<10?'0'+m:m }
//获取图片上传url
Vue.prototype.ajaxUploadParam=function(purpose){
  var dfd=new Promise((resolve, reject)=>{
    this.$http.get("api/getUploadParams?purpose="+purpose).then((result) => {
      if (result.status == "200") {
        if (result.data.status == "OK") {
          console.info(result.data.data,333)
          resolve(result.data.data);
        } else {
          reject(result.data.message);
          this.$Message.error(result.data.message);
        }
      }
    }).catch((error) => {
      reject("出现error" + error);
      this.$Message.error("出现error" + error);
    });
  });
  return dfd;
};
//权限控制全局注册
Vue.directive('permission',{
  inserted:function(el,binding){
    el.style.display="none";
    let array = localStorage.getItem("muenDoctPc");
    let resources=JSON.parse(array).resources;
    if(resources.length>0){
      for(var i=0;i<resources.length;i++){
        if(binding.value==resources[i]){
           el.style.display="inline";
        }
      }
    }
  }
});
//自定义指令鼠标focus事件
Vue.directive('focus',{
    inserted: function (el, {value}) {
      if (value) {
        el.focus();
      }
  }
});
//性别
Vue.filter('sex',function(value,myString){
  var sex={ UNKNOWN: '未知',MAN: '男',LADY: '女',};
  if(myString==''){
    return sex.UNKNOWN;
  }
  return sex[myString];
});