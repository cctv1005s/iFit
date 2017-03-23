import React,{Component} from 'react';
import {View,Text,Image} from 'react-native';
import { TabNavigator } from 'react-navigation';


/**
 * 概览
 */
export default class Overall extends Component{
  static navigationOptions = {
    tabBar: {
      label: '概览',
      icon: ({ tintColor }) => (
        <Image
          source={require('../../assets/img/overall.png')}
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