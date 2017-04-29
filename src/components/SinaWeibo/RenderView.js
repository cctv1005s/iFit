import React from 'react';
import {
  View,
  Text,
  Image,
  ListView,
  TouchableOpacity,
  Dimensions,
  WebView
} from 'react-native';
import Header from '../Header.js';
import Navigation from '../../Navigation.js';
import styles from '../SinaWeibo/SinaWeiboStyles.js';

var RenderView = {};

//过渡界面
RenderView.renderLoadingView = function(loadingImgUrl) {
    return (
      <View style={styles.loadingContainer}>
        <Image
          source={loadingImgUrl}
          style={styles.loadingImage} />
      </View>
    )
  };

  //返回加载成功的界面
  RenderView.renderView = function(Title,self) {
    return (
      <View style={styles.container}>
        <Header title = {Title} />
        <ListView
          dataSource={self.state.dataSource}
          renderRow={self._renderRow.bind(self)}
          initialListSize={10}  //表示初始加载行数->提高加载速度
          scrollRenderAheadDistance={20} //当一个行接近屏幕范围20像素之内的时候，就开始渲染这一行
          style={styles.listview} />
      </View>
    );
  }

  export default RenderView;