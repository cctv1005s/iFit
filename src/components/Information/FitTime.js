import React,{Component} from 'react';
import {View,Text,Image} from 'react-native';
import { TabNavigator } from 'react-navigation';


/**
 * 概览
 */
export default class FitTime extends Component{
  static navigationOptions = {
    tabBar: {
      label: 'FitTime',
      icon: ({ tintColor }) => (
        <Image
          source={require('../../assets/img/fittime.png')}
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