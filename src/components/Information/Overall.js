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
import Navigation from '../../Navigation.js';
import styles from '../Overall/OverallStyles.js';
import FetchDatas from '../Overall/FetchData.js';
import RenderView from '../Overall/RenderView.js'
import LoadingImage from '../../assets/img/loading.gif';

var {width,height} = Dimensions.get('window');
/**
 * 概览
 */
export default class Overall extends Component {

  static navigationOptions = {
    tabBar: {
      label: 'Overall',
      icon: ({ tintColor }) => (
        <Image
          source={require('../../assets/img/overall.png')}
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
      loaded: false
    };
    this.fetchData = this.fetchData.bind(this);
  }
  
  componentDidMount() {
    var self = this;
    /**
     * 读取数据
     */
     
    if(overall_gb.length !== 0){
      this.setState({
        dataSource:this.state.dataSource.cloneWithRows(overall_gb),
        loaded:true
      });
    }else{
      self.fetchData();
    }
  }


  fetchData() {
    var self = this;
    overall_gb = [];
    var currentPage = 1;
    var totalPage = 6;
    FetchDatas.fetchData(self,currentPage,totalPage);
    self.saveData();
  }

  //加入缓存
  saveData() {
    storage.save({
      key: "overall",
      rawData: overall_gb,
      expires:1000*3600*24
    });
  }

  /**
   * 返回网页
   */
  render() {
    var self = this;
    if (!this.state.loaded) {
      return RenderView.renderLoadingView(LoadingImage);
    }
    else return RenderView.renderView('Overall', self);
    
  }

  _pressRow(rowData) {
    var imageUrl = rowData.url;
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


AppRegistry.registerComponent('Overall', () => Overall);