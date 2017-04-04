var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');


var headers = {
		'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
		'Accept-Encoding':'gzip, deflate, sdch',
		'Accept-Language':'en-US,en;q=0.8,zh-CN;q=0.6,zh;q=0.4,zh-TW;q=0.2',
		'Cache-Control':'no-cache',
		'Connection':'keep-alive',
		'Cookie':'SUB=_2AkMvjubPdcPhrAZXnP0dzGLiaotH-jycW485An7uJhIyOhh77m01qSWU_2xAgabL5FI97CgGJrR8gKHtXw..; SUBP=0033WrSXqPxfM72wWs9jqgMF55529P9D9W5VWlCXB-2.0J0JxWaRQCak5JpX5KzhUgL.Fo-cSh-Reh.7Soq2dJLoIpv7MGW7i--Ri-2ciKnpi--fiKL2iKLWi--fi-ihi-iW; SINAGLOBAL=6420679884540.87.1490184697531; _s_tentry=tool.lu; UOR=,,tool.lu; Apache=5447688850392.118.1490264046275; ULV=1490264046825:2:2:2:5447688850392.118.1490264046275:1490184697619; TC-Page-G0=42b289d444da48cb9b2b9033b1f878d9',
		'Host':'weibo.com',
		'Pragma':'no-cache',
		'Upgrade-Insecure-Requests':'1',
		'User-Agent':'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36'
};

function callback(err,res,body){
	if(!err && res.statusCode == 200){
		var text =  body;
		var arr = text.match(/<div class=\\"WB_feed_detail.*?<div class=\\"WB_feed_handle/g);

		var json = JSON.parse(fs.readFileSync('data.json').toString());
		var contents = [];
		for(var i = 0;i < arr.length;++i){
			var x = arr[i].slice(0,arr[i].length-28);
			contents.push({"content":x});
		}
		json['Weibo'] = contents;
		fs.writeFileSync('data.json',JSON.stringify(json));
		//unicode转为中文
		//decodeURIComponent(text);  没有现成的模块使用该函数
		text = fs.readFileSync('data.json').toString();
		text = text.replace(/&#x/g,'%u');
		text = text.replace(/;/g,'');
		text = unescape(text);
		fs.writeFileSync('data.json',text);
		console.log("ok");
	}
}

url = 'http://weibo.com/siriusgoalkeeper?is_hot=1';

request({url:url,gzip:true,headers:headers},callback);