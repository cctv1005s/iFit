import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';
import {
  AppRegistry,
  View,
  Text,
  Image,
  ListView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  WebView
} from 'react-native';
import Header from '../Header.js';
import cheerio from 'cheerio-without-node-native';
import Navigation from '../../Navigation.js';

var {width,height} = Dimensions.get('window');
/**
 * 概览
 */
export default class FitTime extends Component {

  static navigationOptions = {
    tabBar: {
      label: 'FitTime',
      icon: ({ tintColor }) => (
        <Image
          source={require('../../assets/img/fittime.png')}
          style={{ height: 18, width: 18 }}
        />
      ),
    },
  };

  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
    };
    //this.fetchData = this.fetchData.bind(this); 
  }

  componentDidMount() {
    var self = this;
    /**
     * 读取数据
     */
    storage.load({
      key: 'fittime',
      autoSync: true,
    })
      .then(function (ret) {
        //检测缓存，没有缓存则抛出错误，重新加载缓存
        if (typeof ret !== 'array' || ret.length == 0)
          throw new Error("没有数据");
        self.setState({
          dataSource: self.state.dataSource.cloneWithRows(ret),
          loaded: true,
        });
      })
      .catch(function (err) {
        self.fetchData();
      });
  }

  fetchData() {
    var self = this;
    var _datasource = [];
    //获取第一个网站
    fetch('http://www.fitnes.cn/jianshen')
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

          //获取第二个网站
    fetch('http://www.fitnes.cn/jianshen/index_2.html')
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
          console.log("aaaaaa" + _datasource.length / 4);
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

  //加入缓存
  saveData() {
    storage.save({
      key: "fittime",
      rawData: this.state.dataSource,
      expires: 1000 * 60 * 5 //缓存过期时间
    });
  }

  /**
   * 返回网页
   */
  render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }
    else return this.renderView();
  }

  //过渡界面
  renderLoadingView() {
    return (
      <View style={styles.loadingContainer}>
        <Image
          source={require('../../assets/img/loading.gif')}
          style={styles.loadingImage} />
      </View>
    )
  };

  //返回加载成功的界面
  renderView() {
    return (
      <View style={styles.container}>
        <Header title="FitTime" />
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderRow.bind(this)}
          initialListSize={10}  //表示初始加载行数->提高加载速度
          scrollRenderAheadDistance={20} //当一个行接近屏幕范围20像素之内的时候，就开始渲染这一行
          style={styles.listview} />
      </View>
    );
  }

  _pressRow(rowData) {
    var imageUrl = "http://www.fitnes.cn" + rowData.url;
    Navigation.openWeb({
      title: rowData.title,
      url: imageUrl,
    });
  }

  //渲染返回de1listView的每一个
  _renderRow(rowData, sectionID, rowID) {
    var self = this;
    return (
      <View style={styles.ImageTextContainer}>
        <TouchableOpacity
          style={styles.bigContainer}
          onPress={() => self._pressRow({
            url: rowData[0].url,
            title: rowData[0].title,
          })}>
          <Image style={styles.BigImage}
            source={{ uri: rowData[0].photo }}>
            <Text style={styles.bigTextView}
              numberOfLines={1}>
              {rowData[0].title}
            </Text>
          </Image>
        </TouchableOpacity>
        <View style={styles.line}/>

          {rowData.map(function (ele, i) {
            if (i > 0) {
              return (
                <View key={i} >
                <TouchableOpacity
                  style={ styles.smallContainer}
                  onPress={() => self._pressRow({
                    url: ele.url,
                    title: ele.title,
                  })}>
                  <Image style={styles.smallImage}
                    source={{ uri: ele.photo }} />
                  <Text style={styles.smallTextView} >
                      {ele.title}
                   </Text>
                </TouchableOpacity>
                {
                    (i !== 3)?
                    <View style={styles.line}/>
                    :
                    <View/>
                }
                    
                </View>
              );
            }
          })}
      </View >
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
  },
  ImageTextContainer: {
    //borderWidth: 3,
    margin: 10,
    backgroundColor: 'white',
  },
  bigContainer: {
    margin:10,
  },
  smallContainer: {
     marginBottom:5,
     marginHorizontal: 5,
     flexDirection: 'row',
     alignItems: 'center', 
     justifyContent: 'center',
  },
  line: {
      height: 2,
      backgroundColor: '#F0F0F0',
      flex: 1,
      marginHorizontal: 5,
  },
  loadingImage: {
        margin: 100,
        height: width/3,
        width: width/2,
        resizeMode: Image.resizeMode.contain,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  BigImage: {
    flex: 1,
    height: Dimensions.get('window').height / 4,
    resizeMode: Image.resizeMode.cover,
  },
  smallImage: {
    flex: 0,
    margin: 10,
    height: Dimensions.get('window').width / 5,
    width: Dimensions.get('window').width / 5,
    //resizeMode: Image.resizeMode.cover,
  },
  listView: {
    paddingTop: 20,
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  bigTextView: {
    fontSize: 20,
    marginTop: Dimensions.get('window').height / 4 - 30,
    fontWeight: 'bold',
    fontFamily: 'Cochin',
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  smallTextView: {
    flex: 1,
    fontSize: 15,
    fontWeight: 'bold',
  },
});

AppRegistry.registerComponent('FitTime', () => FitTime);