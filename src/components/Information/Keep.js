import React,{Component} from 'react';
import {View,Text,Image} from 'react-native';
import { TabNavigator } from 'react-navigation';


export default class Overall extends Component{
  static navigationOptions = {
    tabBar: {
      label: 'Keep',
      icon: ({ tintColor }) => (
        <Image
          source={require('../../assets/img/keep.png')}
          style={{height:18,width:18}}
        />
      ),
    },
    };
    render(){
        return (
            <View>
                <Text>
                    Keep
                </Text>
            </View>
        );
    }
}