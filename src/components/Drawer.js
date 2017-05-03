import React ,{Component}from 'react';
import {View,Text,Image,Button,StyleSheet,TouchableOpacity } from 'react-native';
import BACKGROUND from '../assets/img/background.png';

import HOME_ICON from '../assets/img/home.png';
import STAR_ICON from '../assets/img/star.png';
import NOTE_ICON from '../assets/img/note.png';

/**
 * 左边的抽屉模块
 */
var icons = [
    {
        id:'Information',
        text:'首页',
        icon:HOME_ICON
    },
    {
        id:'Collect',
        text:'收藏',
        icon:STAR_ICON
    },
    {
        id:'Note',
        text:'笔记',
        icon:NOTE_ICON
    }
];

var style = StyleSheet.create({
    view:{
        flexDirection:'row',
        marginTop:20
    },
    img:{
        height:20,
        width:20,
        marginLeft:20
    },
    text:{
        height:30,
        marginLeft:20
    }
});



export default class Drawer extends Component{
    render(){
        var navigation = this.props.navigation;
        return (
            <View style={{zIndex:10}}>
                <Image source={BACKGROUND} style={{width:300,height:250}}/>
                    {
                        icons.map(function(ele,i){
                            return (
                                <TouchableOpacity 
                                    onPress={
                                        ()=>{
                                                navigation.navigate(ele.id);
                                            }
                                        }
                                    style={style.view}
                                    key={i}
                                >
                                    <Image source={ele.icon} style={style.img}/>
                                    <Text style={style.text}>{ele.text}</Text>
                                </TouchableOpacity>
                            );
                        })
                    }
            </View>
        );
    }
}


