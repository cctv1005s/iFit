var request = require('request');
var cheerio = require('cheerio');

var url = 'http://sports.51ttyy.com/zatan/201703/217538.html';
request(url,function(err,res,body){
				if(!err && res.statusCode == 200){
					var $ = cheerio.load(body);
					var title = $('.title').first();
					var $$ = cheerio.load(title);
					var title = $('h1').text();
					console.log(title);
					var content = $('.article').html();
					
				}
			})