/**
 * 用于创建新的一个Note的方法
 */
import React ,{Component} from 'react';
import {View,Dimensions} from 'react-native';

var {width,height} = Dimensions.get('window');
export default class NewNoteView extends Component{
    render(){
        return (
            <View style={{position:'absolute',width:width,height:height,left:0,top:0,elevation:5,zIndex:20}}>
                <View style={{backgroundColor:'black',opacity:0.5,position:'absolute',left:0,top:0,width:width,height:height}}></View>
                <View style={{marginLeft:20,marginRight:20,height:300,backgroundColor:'white',elevation:5,top:height/2 - 200,borderRadius:10}}>

                </View>
            </View>
        );
    }
}