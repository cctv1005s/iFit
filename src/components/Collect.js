import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Text,
  Image,
  ListView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Header from './Header.js';
import Navigation from '../Navigation.js';
import styles from './FitTime/FitTimeStyles.js';
import RenderView from './FitTime/RenderView.js'
import LoadingImage from '../assets/img/loading.gif'


export default class Collect extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
    };
  };

  componentDidMount() {
    var self = this;

    storage.load({
        key: 'collect',
    }).then(res => {
        console.log(res);
      self.setState({
        dataSource: self.state.dataSource.cloneWithRows(res),
        loaded: true,
      });
    }).catch(err => {
        alert("Collect界面 初始出错");
    })
  }
  /**
  * 返回网页
  */
  render() {
    var self = this;
    if (!this.state.loaded) {
      return RenderView.renderLoadingView(LoadingImage);
    }
    else return RenderView.renderView('收藏', self);
  }

  pressRow(rowData) {
    Navigation.openWeb(rowData);
  }

  //渲染返回de1listView的每一个
  _renderRow(rowData, sectionID, rowID) {
    var self = this;
    var url = rowData[0];
    var title = rowData[1];
    var imageUrl = rowData[2];

    return (
      <View style={styles.container}>
        <View style={styles.ImageTextContainer}>
          <TouchableOpacity
            style={styles.smallContainer}
            onPress={() => self.pressRow({
              url: url,
              title: title,
              imageUrl: imageUrl,
            })}>
            <Image style={styles.smallImage}
              source={{ uri: imageUrl }} />
            <Text style={styles.smallTextView} >
              {title}
            </Text>
          </TouchableOpacity>
          <View style={styles.line} />

        </View >
      </View >
    );
  }
}

