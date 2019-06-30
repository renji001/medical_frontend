//返回当前时间
function returntime(value){
	var date = new Date();
    date.setDate(date.getDate() + (value || 0));
    this.year = date.getFullYear();
    this.month = date.getMonth() + 1;
    this.date = date.getDate();
    this.month = this.month > 10 ? this.month : '0' + this.month;
    this.date = this.date > 10 ? this.date : '0' + this.date;
    var currentTime = this.year + "-" + this.month + "-" + this.date
    return currentTime;
}
//解析时间带年月日时分
function returntime1(value){
	value = (value > 9530890868) ? value : value * 1000;
    var date = new Date();
    date.setTime(value);
    var Y = date.getFullYear();
    var M = (date.getMonth() + 1) > 9 ? (date.getMonth() + 1) : '0' + (date.getMonth() + 1);
    var D = date.getDate() + ' ';
    var H = date.getHours() > 9 ? date.getHours() : '0' + date.getHours();
    var S = date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes();
    var Ss = date.getSeconds() > 9 ? date.getSeconds() : '0' + date.getSeconds();
    var data = (Y + '-' + M + '-' + D + ' ' + H + ':' + S);
    return data;
}
//判断浏览器
function isWeiXin() {
    //window.navigator.userAgent属性包含了浏览器类型、版本、操作系统类型、浏览器引擎类型等信息，这个属性可以用来判断浏览器类型
    var ua = window.navigator.userAgent;
    //通过正则表达式匹配ua中是否含有MicroMessenger字符串
    if((/MicroMessenger/.test(ua))) {
        return 1; //微信
    }
    if((/AlipayClient/.test(ua))) {
        return 2; //支付宝
    }
    return 9; //其他
}
/***msg***/
function msg(res) {
    layer.open({
        content: res,
        skin: 'msg',
        time: 2.5 //2秒后自动关闭
    });
}
//手机号验证
function isPoneAvailable(str) {
    var myreg = /^[1][3,4,5,7,8,9][0-9]{9}$/;
    if(!myreg.test(str)) {
        layer.open({
            content: '请填写正确手机号',
            skin: 'msg',
            time: 2 //2秒后自动关闭
        });
        return false;
    } else {
        return true;
    }
}

//判断不能为空
function isNull(txt, obj) {
    for(var i in txt) {
        var gettype = Object.prototype.toString;
        if(gettype.call(obj[i]) == '[object Null]' || gettype.call(obj[i]) == '[object Undefined]') { //空
            msg(txt[i] + '不能为空')
            return false
        }
        if(gettype.call(obj[i]) == "[object Array]" || gettype.call(obj[i]) == "[object String]") { //数组或者字符串
            if(obj[i].length == 0) {
                msg(txt[i] + '不能为空')
                return false
            }
        }
        if(gettype.call(obj[i]) == "[object Object]") { //对象
            var num = 0
            for(var j in obj[i]) {
                num++
            }
            if(num == 0) {
                msg(txt[i] + '不能为空')
                return false;
            }
        }
    }
    return true;
}
//解析时间带年月日
function returntime6(value) {
    value = (value > 9530890868) ? value : value * 1000;
    var date = new Date();
    date.setTime(value);
    var Y = date.getFullYear();
    var M = (date.getMonth() + 1) > 9 ? (date.getMonth() + 1) : '0' + (date.getMonth() + 1);
    var D = date.getDate() + ' ';
    var H = date.getHours() > 9 ? date.getHours() : '0' + date.getHours();
    var S = date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes();
    var Ss = date.getSeconds() > 9 ? date.getSeconds() : '0' + date.getSeconds();
    var data = (Y + '-' + M + '-' + D);
    return data;
}
//判断手机系统安卓、ios
function returnisIos() {
    var ua = navigator.userAgent.toLowerCase();
    if(/iphone|ipad|ipod/.test(ua)) {
        return true;
    } else if(/android/.test(ua)) {
        return false;
    }
}