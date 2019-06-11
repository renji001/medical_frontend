let returntime = value => { //解析剩余时间
    let data = '00:00';
    if(value >= 0) {
        let S = (value % 60) > 9 ? (value % 60) : '0' + (value % 60); //秒
        let M = parseInt(value / 60 % 60) > 9 ? parseInt(value / 60 % 60) : '0' + parseInt(value / 60 % 60); //分
        let H = parseInt(value / 60 / 60 % 24) > 9 ? parseInt(value / 60 / 60 % 24) : '0' + parseInt(value / 60 / 60 % 24); //时
        let T = parseInt(value / 60 / 60 / 24) > 9 ? parseInt(value / 60 / 60 / 24) : '0' + parseInt(value / 60 / 60 /24); //天
        data = (T == 0 ? '' : T + ':') + (H == 0 ? '' : H + ':') + (M == 0 ? '00:' : M + ':') + (S == 0 ? '00' : S);
    }
    return data;
}
let returntime1 = value => { //解析时间带年月日时分
    value = (value > 9530890868) ? value : value * 1000;
    var date = new Date();
    date.setTime(value);
    var Y = date.getFullYear();
    var M = (date.getMonth() + 1) > 9 ? (date.getMonth() + 1) : '0' + (date.getMonth() + 1);
    var D = date.getDate() + ' ';
    var H = date.getHours() > 9 ? date.getHours() : '0' + date.getHours();
    var S = date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes();
    var Ss = date.getSeconds() > 9 ? date.getSeconds() : '0' + date.getSeconds();
    var data = (Y + '-' + M + '-' + D + ' ' + H + ':' + S + ':' + Ss);
    return data;
}
let returntime2 = value => { //解析时间只有时分
    value = (value > 9530890868) ? value : value * 1000;
    var date = new Date();
    date.setTime(value);
    var Y = date.getFullYear();
    var M = (date.getMonth() + 1) > 9 ? (date.getMonth() + 1) : '0' + (date.getMonth() + 1);
    var D = date.getDate() + ' ';
    var H = date.getHours() > 9 ? date.getHours() : '0' + date.getHours();
    var S = date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes();
    var data = (H + ':' + S);
    return data;
}

let returntime3 = value => { //解析时间只有时分秒
    value = (value > 9530890868) ? value : value * 1000;
    var date = new Date();
    date.setTime(value);
    var H = date.getHours() > 9 ? date.getHours() : '0' + date.getHours();
    var S = date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes();
    var C = date.getSeconds() > 9 ? date.getSeconds() : '0' + date.getSeconds();
    var data = (H + ':' + S + ':' + C);
    return data;
}

let returntime4 = value => { //解析时间带月日时分秒
    value = (value > 9530890868) ? value : value * 1000;
    var date = new Date();
    date.setTime(value);
    var Y = date.getFullYear();
    var M = (date.getMonth() + 1) > 9 ? (date.getMonth() + 1) : '0' + (date.getMonth() + 1);
    var D = date.getDate() + ' ';
    var H = date.getHours() > 9 ? date.getHours() : '0' + date.getHours();
    var S = date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes();
    var C = date.getSeconds() > 9 ? date.getSeconds() : '0' + date.getSeconds();
    var data = (M + '-' + D + ' ' + H + ':' + S + ':' + C);
    return data;
}

let returntime5 = value => { //解析剩余时间只有时分秒带html
    let data = '<span class="bgtime">00</span><span  class="shuoming">天</span><span class="bgtime">00</span><span class="shuoming" >时</span><span class="bgtime">00</span><span  class="shuoming">分</span><span class="bgtime">00</span><span  class="shuoming">秒</span>';
    if(value >= 0) {
        let S = (value % 60) > 9 ? (value % 60) : '0' + (value % 60); //秒
        let M = parseInt(value / 60 % 60) > 9 ? parseInt(value / 60 % 60) : '0' + parseInt(value / 60 % 60); //分
        let H = parseInt(value / 60 / 60 % 24) > 9 ? parseInt(value / 60 / 60 % 24) : '0' + parseInt(value / 60 / 60 % 24); //时
        let D = parseInt(value / 60 / 60 / 24) > 9 ? parseInt(value / 60 / 60 / 24) : '0' + parseInt(value / 60 / 60 / 24); //天
        var html = '<span class="bgtime">' + D + '</span><span  class="shuoming">天</span>';
        html += '<span class="bgtime">' + H + '</span><span class="shuoming" >时</span>';
        data = (html + '<span class="bgtime">' + M + '</span><span  class="shuoming">分</span><span class="bgtime">' + S + '</span><span  class="shuoming">秒</span>');
    }
    return data;
}

let returntime6 = value => { //解析时间带年月日时分
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

let returntime7 = value => { //解析时间带年月日时分
    value = (value > 9530890868) ? value : value * 1000;
    var date = new Date();
    date.setTime(value);
    var Y = date.getFullYear();
    var M = (date.getMonth() + 1) > 9 ? (date.getMonth() + 1) : '0' + (date.getMonth() + 1);
    var D = date.getDate() + ' ';
    var H = date.getHours() > 9 ? date.getHours() : '0' + date.getHours();
    var S = date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes();
    var Ss = date.getSeconds() > 9 ? date.getSeconds() : '0' + date.getSeconds();
    var data = (M + '-' + D);
    return data;
}
//年月日
let returntime8 = value => { //解析时间带年月日时分
    value = (value > 9530890868) ? value : value * 1000;
    var date = new Date();
    date.setTime(value);
    var Y = date.getFullYear();
    var M = (date.getMonth() + 1) > 9 ? (date.getMonth() + 1) : '0' + (date.getMonth() + 1);
    var D = date.getDate() + ' ';
     var H = date.getHours() > 9 ? date.getHours() : '0' + date.getHours();
    var S = date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes();
    var Ss = date.getSeconds() > 9 ? date.getSeconds() : '0' + date.getSeconds();
    var data = (Y + '.' + M + '.' + D);
    return data;
}

let returnnumber = value => { //期号截取
    value = value < 9999999 ? value : value.substring(value.length - 7);
    return value;
}

let returnName = value => { //和谐名字
    //	console.log(value)
    if(!value) return;
    if(value.length > 4) {
        var left = value.substring(0, 3);
        var cent = '';
        var right = value.substring(value.length - 3, value.length);
        for(var i = 0; i < value.length - 6; i++) {
            cent += '*';
        }
        value = left + cent + right;
    }
    return value;
}
//转换内容
let content = content => {
    //支持的html标签
    //表情库
    var faces = function(e) {
        var alt = ["[微笑]", "[嘻嘻]", "[哈哈]", "[可爱]", "[可怜]", "[挖鼻]", "[吃惊]", "[害羞]", "[挤眼]", "[闭嘴]", "[鄙视]", "[爱你]", "[泪]", "[偷笑]", "[亲亲]", "[生病]", "[太开心]", "[白眼]", "[右哼哼]", "[左哼哼]", "[嘘]", "[衰]", "[委屈]", "[吐]", "[哈欠]", "[抱抱]", "[怒]", "[疑问]", "[馋嘴]", "[拜拜]", "[思考]", "[汗]", "[困]", "[睡]", "[钱]", "[失望]", "[酷]", "[色]", "[哼]", "[鼓掌]", "[晕]", "[悲伤]", "[抓狂]", "[黑线]", "[阴险]", "[怒骂]", "[互粉]", "[心]", "[伤心]", "[猪头]", "[熊猫]", "[兔子]", "[ok]", "[耶]", "[good]", "[NO]", "[赞]", "[来]", "[弱]", "[草泥马]", "[神马]", "[囧]", "[浮云]", "[给力]", "[围观]", "[威武]", "[奥特曼]", "[礼物]", "[钟]", "[话筒]", "[蜡烛]", "[蛋糕]"];
        var arr = {}
        _.each(alt, function(index, item) {
        	arr[index] = '/static/img/face/' + item + '.gif';
        });
        return arr;
    }();
    var html = function(end) {
        return new RegExp('\\n*\\[' + (end || '') + '(pre|div|p|table|thead|th|tbody|tr|td|ul|li|ol|li|dl|dt|dd|h2|h3|h4|h5)([\\s\\S]*?)\\]\\n*', 'g');
    };
    content = (content || '').replace(/&(?!#?[a-zA-Z0-9]+;)/g, '&amp;')
        .replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;') //XSS
        .replace(/@(\S+)(\s+?|$)/g, '@<a href="javascript:;">$1</a>$2') //转义@
        .replace(/face\[([^\s\[\]]+?)\]/g, function(face) { //转义表情
            var alt = face.replace(/^face/g, '');
            return '<img alt="' + alt + '" title="' + alt + '" src="' + faces[alt] + '">';
        })
        .replace(/img\[([^\s]+?)\]/g, function(img) { //转义图片
            return '<img class="layui-layim-photos" src="' + img.replace(/(^img\[)|(\]$)/g, '') + '">';
        })
        .replace(/file\([\s\S]+?\)\[[\s\S]*?\]/g, function(str) { //转义文件
            var href = (str.match(/file\(([\s\S]+?)\)\[/) || [])[1];
            var text = (str.match(/\)\[([\s\S]*?)\]/) || [])[1];
            if(!href) return str;
            return '<a class="layui-layim-file" href="' + href + '" download target="_blank"><i class="layui-icon">&#xe61e;</i><cite>' + (text || href) + '</cite></a>';
        })
        .replace(/audio\[([^\s]+?)\]/g, function(audio) { //转义音频
            return '<div class="layui-unselect layui-layim-audio" layim-event="playAudio" data-src="' + audio.replace(/(^audio\[)|(\]$)/g, '') + '"><i class="layui-icon">&#xe652;</i><p>音频消息</p></div>';
        })
        .replace(/video\[([^\s]+?)\]/g, function(video) { //转义音频
            return '<div class="layui-unselect layui-layim-video" layim-event="playVideo" data-src="' + video.replace(/(^video\[)|(\]$)/g, '') + '"><i class="layui-icon">&#xe652;</i></div>';
        })

        .replace(/a\([\s\S]+?\)\[[\s\S]*?\]/g, function(str) { //转义链接
            var href = (str.match(/a\(([\s\S]+?)\)\[/) || [])[1];
            var text = (str.match(/\)\[([\s\S]*?)\]/) || [])[1];
            if(!href) return str;
            return '<a href="' + href + '" target="_blank">' + (text || href) + '</a>';
        }).replace(html(), '\<$1 $2\>').replace(html('/'), '\</$1\>') //转移HTML代码
        .replace(/\n/g, '<br>') //转义换行 
    return content;
}
let returnNumber = value => { //大数字转换
    return (value > 10000 ? value/10000 + 'w' : value);
}
let timeday = value => { //解析剩余时间自动转换为天
	if(!value) return;  //86400000 一天
	value = (value > 9530890868) ? value : value * 1000;
	var time = Date.parse(new Date());
	if((time-86400000*5) > value){
		return returntime1(value)
	}else{
		var arr = returntime((time - value)/1000).split(':');
		if(arr.length==4){
			return Number(arr[0]) + '天前'
		}
		if(arr.length==3){
			return Number(arr[0]) + '小时前'
		}
		if(arr.length==2){
			if(arr[0] == 0){
				return Number(arr[1]) + '秒前'
			}else{
				return Number(arr[0]) + '分钟前'
			}
		}
	}
}
export {
    returntime,
    returntime1,
    returntime2,
    returntime3,
    returntime4,
    returntime5,
    returntime6,
    returntime7,
    returntime8,
    returnName,
    returnnumber,
    content,
    returnNumber,
    timeday,
}