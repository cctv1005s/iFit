import React from 'react';
import {View,Text,StyleSheet,Image,TouchableOpacity,TouchableWithoutFeedback,Dimensions} from 'react-native';
var {height,width} = Dimensions.get('window');

var style = StyleSheet.create({
    text:{
        lineHeight:30,
        textAlign:'center',
        fontSize:15
    },
    img:{
        height:30,
        width:30,
        marginTop:10,
        marginLeft:10,
        marginRight:10                    
    },
    tips:{
        flexDirection:'row',
        alignItems:'center'
    }
})

export default Tips = ({visible}) =>{
    
    return (
        <View style={
            {
                position:'absolute',
                right:10,top:50,
                width:95,
                height:170,
                backgroundColor:'white',
                zIndex:visible?10:0,
                elevation:5,
                opacity:visible?1:0
            }
        }>
            <TouchableOpacity  style={style.tips}>
                <Image 
                source={require('../../assets/img/heart.png')} 
                style={style.img}
                />
                <Text style={style.text}>
                    心情
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={style.tips}>
                <Image 
                source={require('../../assets/img/food.png')} 
                style={style.img}
                />
                <Text style={style.text}>
                    饮食
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={style.tips}>
                <Image 
                source={require('../../assets/img/fit.png')} 
                style={style.img}
                />
                <Text style={style.text}>
                    训练
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={style.tips}>
                <Image 
                source={require('../../assets/img/notebook.png')} 
                style={style.img}
                />
                <Text style={style.text}>
                    笔记
                </Text>
            </TouchableOpacity>

        </View>
    );
};