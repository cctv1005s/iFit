  import React from 'react';
  import cheerio from 'cheerio-without-node-native';
  import axios from 'axios';
  var FetchDatas = {};

  var _datasource = [];
  
  var getData = function(self,currentPage,totalPage){
    if(currentPage > totalPage){
      var realDatasource = [];
          console.log("keep: " + _datasource.length / 4);
          for (var i = 0, j = 0; i < _datasource.length / 4; i++ , j += 4) {
            realDatasource.push([
               _datasource[j],
               _datasource[j + 1],
               _datasource[j + 2],
               _datasource[j + 3],
            ]);
            keep_gb.push([
               _datasource[j],
               _datasource[j + 1],
               _datasource[j + 2],
               _datasource[j + 3],
            ]);
          }
          
          console.log(realDatasource);
          self.setState({
            dataSource: self.state.dataSource.cloneWithRows(realDatasource),
            loaded:true
          });
            
    }else{
      var url = 'http://www.hiyd.com/bb/?page='+currentPage;
      axios.get(url)
      .then(res => { return res.data;})
      .then(data => {
          var $ = cheerio.load(data);
          var allText = $('.train-title a');
          var allPhoto = $('.train-pic img');
          for (var i = 0; i < 4; i++) {
            _datasource.push({
              url: allText[i].attribs.href,
              title: allPhoto[i].attribs.alt,
              photo: allPhoto[i].attribs.src
            });
          }    
          currentPage += 1;
            getData(self,currentPage,totalPage);
      })
      .catch((error) => {
        console.warn(error);
      });
    }
  }

  FetchDatas.fetchData = function(self,currentPage,totalPage) {
    getData(self,currentPage,totalPage);
  }

  export default FetchDatas;