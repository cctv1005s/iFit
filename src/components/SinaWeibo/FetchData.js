  import React from 'react';
  import cheerio from 'cheerio-without-node-native';

  var FetchDatas = {};

  var _datasource = [];

  var getData = function(self,index,size){
    if(index > size){
      var realDatasource = [];
          console.log("weibo: " + _datasource.length / 4);
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
    }else{
      var url = 'http://www.hiyd.com/jianshenzhishi/?page='+index;
      fetch(url)
        .then(res => {return res.blob();})
        .then(blob => {
          var reader = new FileReader();
          reader.readAsText(blob, 'UTF-8');
          reader.onload = function (e) {
            var $ = cheerio.load(reader.result);
            var allText = $('.item-pic a');
            var allPhoto = $('.item-pic a img');
            for (var i = 0; i < allText.length; i++) {
              _datasource.push({
                url: allText[i].attribs.href,
                title: allPhoto[i].attribs.alt,
                photo: allPhoto[i].attribs.src
              });
            }
            getData(self,index+1,size);
           }
      })
      .catch((error) => {
        console.warn(error);
      });
    }
  }



  FetchDatas.fetchData = function(self,index,size) {
    getData(self,index,size);
  }

  export default FetchDatas;