/*
-	1.将data.json中的内容都解析进来，然后要添加内容的时候先检查新内容是否已经在里面了
*/

var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var eventproxy = require('eventproxy');
var url = require('url');

var myUrl = 'http://www.fit-time.com/info.html';
var baseUrl = 'http://www.fit-time.com';

request(myUrl,function(err,res,body){
	if(!err && res.statusCode == 200){
		var $ = cheerio.load(body);
		var urls = [];
		$('.info a').each(function(index,element){
			var $element = $(element);
			var href = url.resolve(baseUrl,$element.attr('href'));
			urls.push(href);
		});

		var ep = new eventproxy();
		ep.after('content_html',urls.length,function(contents){
			contents = contents.map(function(pair){
				var title = pair[0];
				var content = pair[1];
				return ({
					'title':title,
					'content':content
				});
			});
			var text = fs.readFileSync('data.json').toString();
			var json = JSON.parse(text);
			json['Fit']['Content'] = contents;
			fs.writeFileSync('data.json',JSON.stringify(json));
			//unicode转为中文
			text = fs.readFileSync('data.json').toString();
			text = text.replace(/&#x/g,'%u');
			text = text.replace(/;/g,'');
			text = unescape(text);
			console.log("ok");
		});

		urls.forEach(function(url){
			request(url,function(err,res,body){
				if(!err && res.statusCode == 200){
					var $ = cheerio.load(body);
					var title = $('.title').text();
					if(title == ""){
						title = $('.entry-title').text();
					}
					var content = $('.cw').eq(3).html();//不支持$('.cw:eq(3)')
					ep.emit('content_html',[title,content]);
				}
			})
		})
	}
});
