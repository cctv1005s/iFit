import React,{Component} from 'react';
import {View,Text,Image} from 'react-native';
import { TabNavigator } from 'react-navigation';

/**
 * 概览
 */
export default class SinaWeibo extends Component{
  static navigationOptions = {
    tabBar: {
      label: '新浪微博',
      icon: ({ tintColor }) => (
        <Image
          source={require('../../assets/img/weibo.png')}
          style={{height:18,width:18}}
        />
      ),
    },
    };
    render(){
        return (
            <View>
                <Text>
                    概览
                </Text>
            </View>
        );
    }
}