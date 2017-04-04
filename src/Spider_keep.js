var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var eventproxy = require('eventproxy');
var url = require('url');


var baseUrl = 'http://www.buildbody.net/category/xinwen/page/';
var finalContents = [];
var wtf = 5;
function save(contents){
	var text = fs.readFileSync('data.json').toString();
	var json = JSON.parse(text);
	json['Keep']['Content'] = contents;
	fs.writeFileSync('data.json',JSON.stringify(json));
	text = fs.readFileSync('data.json').toString();
	text = text.replace(/&#x/g,'%u');
	text = text.replace(/;/g,'');
	text = unescape(text);
	fs.writeFileSync('data.json',text);
	console.log("ok");
}
function fuck(i){
	var myUrl = baseUrl + i;
	console.log(myUrl);
	request(myUrl,function(err,res,body){
		if(!err && res.statusCode == 200){
			var $ = cheerio.load(body);
			var urls = [];
			$('article header h2 a').each(function(index,element){
				var $element = $(element);
				var href = $element.attr('href');
				urls.push(href);
			});
			console.log(urls.length);
			var ep = new eventproxy();
			ep.after('content_html',urls.length,function(contents){
				contents = contents.map(function(pair){
					var title = pair[0];
					var content = pair[1];
					return({
						'title': title,
						'content': content
					});
				});
				finalContents = finalContents.concat(contents);
				if(i == wtf){
					save(finalContents);
				}
			});
			urls.forEach(function(url){
				request(url,function(err,res,body){
					if(!err && res.statusCode == 200){
						fs.writeFileSync('fuck.html',body);
						var $ = cheerio.load(body);
						var title = $('.article-title a').text();
						var content = $('article').html();
						console.log(url);
						console.log(title);
						ep.emit('content_html',[title,content]);
					}else{
						ep.emit('content_html',[null,null]);
					}
				})
			})
		}else{
			console.log(err);
		}
	});
}
for(var i = 1;i <= wtf;++i){
	fuck(i);
}
	

