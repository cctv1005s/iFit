import React,{Component} from 'react';
import {View,Dimensions,TextInput,Image,TouchableOpacity,StyleSheet} from 'react-native';

var {width,height} = Dimensions.get('window');

export default class NoteView extends Component{
    render(){
        return (
            <View
             style={{
                 height:height,
                 width:width,
                 position:'absolute',
                 left:0,
                 top:0,
                 zIndex:20,
                 elevation:5
             }}
            >
                <View
                 style={{
                     height:height,
                     width:width,
                     backgroundColor:'black',
                     opacity:0.5,
                     position:'absolute',
                     left:0,
                     top:0
                 }}
                >
                </View>

                

            </View>
        );
    }
}

