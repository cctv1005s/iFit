  import React from 'react';
  import cheerio from 'cheerio-without-node-native';

  var fetchDatas = {};

  fetchDatas.fetchData= function(self,url1,url2) {
    var _datasource = [];
    //获取第一个网站
    fetch(url1)
      .then(res => { return res.blob(); })
      .then(blobs => {
        var reader = new FileReader();
        reader.readAsText(blobs, 'GBK');

        reader.onload = function (e) {
          var $ = cheerio.load(reader.result);
          var allText = $('.inner-wrap').children('a');
          var allPhoto = $('.nodeImg').children('img');
          for (var i = 0; i < allText.length; i++) {
            _datasource.push({
              url: allText[i].attribs.href,
              title: allText[i].attribs.title,
              photo: allPhoto[i].attribs.src
            });
          }

          //获取第二个网站
       fetch(url2)
      .then(res => { return res.blob(); })
      .then(blob => {
        var reader = new FileReader();
        reader.readAsText(blob, 'GBK');
        reader.onload = function (e) {
          var $ = cheerio.load(reader.result);
          var allText = $('.inner-wrap').children('a');
          var allPhoto = $('.nodeImg').children('img');
          for (var i = 0; i < allText.length; i++) {
            _datasource.push({
              url: allText[i].attribs.href,
              title: allText[i].attribs.title,
              photo: allPhoto[i].attribs.src
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
        }
      })
      .catch((error) => {
        console.warn(error);
      });

        };
      })
      .catch((error) => {
        console.warn(error);
      });
  }

  export default fetchDatas;