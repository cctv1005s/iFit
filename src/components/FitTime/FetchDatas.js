  import React from 'react';
  import cheerio from 'cheerio-without-node-native';
  import axios from 'axios';


  var fetchDatas = {};

  fetchDatas.fetchData= function(self,url1,url2) {
    var _datasource = [];
    //获取第一个网站
     axios.get(url1)
      .then(res => { return res.data;})
      .then(data => {
          console.log(data);
        var $ = cheerio.load(data);
          var allText = $('.logo').children('a');
          var allPhoto =$('.logo').children('a').children('img');
          for (var i = 1; i < allText.length; i++) {
            _datasource.push({
              url: allText[i].attribs.href,
              title: allText[i].attribs.title,
              photo: "http://www.fitsns.cn" + allPhoto[i].attribs.src
            });
          }
      })
      .then(()=>{
          //获取第二个网站
          axios.get(url2)
         .then(res => { return res.data;})
         .then(data => {
          var $ = cheerio.load(data);
          var allText = $('.logo').children('a');
          var allPhoto =$('.logo').children('a').children('img');
          for (var i = 1; i < allText.length; i++) {
            _datasource.push({
              url: allText[i].attribs.href,
              title: allText[i].attribs.title,
              photo:  "http://www.fitsns.cn" + allPhoto[i].attribs.src,
            });
          }

          var realDatasource = [];
          for (var i = 0, j = 0; i < _datasource.length / 4; i++ , j += 4) {
            realDatasource.push([
               _datasource[j],
               _datasource[j + 1],
               _datasource[j + 2],
               _datasource[j + 3],
            ]);
          }
          console.log(realDatasource);
          self.setState({
            dataSource: self.state.dataSource.cloneWithRows(realDatasource),
            loaded: true,
          });

          //讲数据添加进入缓存
          self.saveData();
         })
           .catch((error) => {
        console.warn(error);
      });
    })
       .catch((error) => {
        console.warn(error);
      });
  
  }

  export default fetchDatas;