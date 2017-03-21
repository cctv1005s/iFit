import React,{Component} from 'react';
import {View,Text} from 'react-native';
import { TabNavigator } from 'react-navigation';
import Header from './Header';

/**
 * 资讯部分
 */

class SinaWeibo extends Component{
    render(){
        return (
            <View>
                <Header
                    title="新浪微博"
                />
                <Text>
                    新浪微博
                </Text>
            </View>
        );
    }
}

class Keep extends Component{
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


export default TabNavigator({
    SinaWeibo:{
        screen:SinaWeibo,
        path:'/',
        navigationOptions:{
            title:()=>'新浪微博'
        }
    },
    Keep:{
        screen:Keep,
        path:'/keep,',
        navigationOptions:{
            title:() => 'Keep'
        }
    }
},{
    tabBarPosition: 'bottom',
    swipeEnabled: false,
});
