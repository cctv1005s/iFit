import React ,{Component}from 'react';
import {View,Text,Image,Button,StyleSheet,TouchableOpacity } from 'react-native';

/**
 * 左边的抽屉模块
 * 因为图标资源的报错，所以只能够穷举所有的情况出来
 * 代码这部分有冗余
 */

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
        height:20,
        marginLeft:20
    }
});

export default class Drawer extends Component{

    render(){
        var navigation = this.props.navigation;
        return (
            <View style={{zIndex:10}}>
                <Image source={require('../assets/img/background.png')} style={{width:300,height:250}}/>
                    <TouchableOpacity 
                        onPress={
                            ()=>{
                                    navigation.navigate('Information');
                                }
                            }
                        style={style.view}
                    >
                        <Image source={require('../assets/img/home.png')} style={style.img}/>
                        <Text style={style.text}>首页</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        onPress={
                            ()=>{
                                    navigation.navigate('Collect');
                                }
                            }
                        style={style.view}
                    >
                        <Image source={require('../assets/img/star.png')} style={style.img}/>
                        <Text style={style.text}>收藏</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        onPress={
                            ()=>{
                                    navigation.navigate('Note');
                                }
                            }
                        style={style.view}
                    >
                        <Image source={require('../assets/img/note.png')} style={style.img}/>
                        <Text style={style.text}>健身笔记</Text>
                    </TouchableOpacity>
            </View>
        );
    }
}


