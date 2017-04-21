import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

var style = StyleSheet.create({
    text:{
        lineHeight:30,
        textAlign:'center'
    }
})


export default Tips = ({visible}) =>{
    return (
        <View style={
            {
             position:'absolute',
             right:10,top:50,
             width:100,
             height:120,
             backgroundColor:'white',
             zIndex:10,
             elevation:5,
             opacity:visible?1:0
            }}
        >
            <View>
                <Text style={style.text}>心情</Text>
            </View>
            <View>
                <Text style={style.text}>训练</Text>
            </View>
            <View>
                <Text style={style.text}>饮食</Text>
            </View>
            <View>
                <Text style={style.text}>笔记</Text>
            </View>       
        </View>
    );
} 