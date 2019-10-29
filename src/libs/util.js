let util = {

};

util.title = function (title) {
    title = title ? title + ' - 狂风客服' : '会话系统';
    window.document.title = title;
};

util.formatTimestamp = function (timestamp, format) {
    if (!timestamp) return;
    return util.formatDate(new Date(timestamp), format);
};

util.formatDate = function (date, format) {
    if (!date || !(date instanceof Date)) {
        return date;
    }
    let formatted = format || 'yyyy-MM-dd hh:mm:ss';

    var map = {
        "M+": date.getMonth() + 1, //月份 
        "d+": date.getDate(), //日 
        "h+": date.getHours(), //小时 
        "m+": date.getMinutes(), //分 
        "s+": date.getSeconds(), //秒 
        "q+": Math.floor((date.getMonth() + 3) / 3), //季度 
        "S": date.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(formatted)) {
        let value = date.getFullYear().toString().substr(4 - RegExp.$1.length);
        formatted = formatted.replace(RegExp.$1, value);
    }
    for (var key in map) {
        if (new RegExp("(" + key + ")").test(formatted)) {
            let value = map[key].toString();
            if (RegExp.$1.length != 1) {
                value = ("00" + value).substr(value.length);
            }
            formatted = formatted.replace(RegExp.$1, value);
        }
    }
    return formatted;
};
util.validateEmptys=(rule,value, callback,msg)=> {
    if (value.replace(/^(\s|\u00A0)+/,'').replace(/(\s|\u00A0)+$/,'')=='') {
        callback(new Error(msg));
    } else {
        callback();
    }
};
export default util;
