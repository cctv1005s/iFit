import React,{Component} from 'react';
import {View,Dimensions,TextInput,Image,TouchableOpacity,StyleSheet} from 'react-native';

//引入图标
import CANCEL_ICON from '../../assets/img/cancel.png';
import YES_ICON from '../../assets/img/yes.png';

var {width,height} = Dimensions.get('window');

var style = StyleSheet.create({
    wrapper:{
        height:height,
        width:width,
        position:'absolute',
        left:0,
        top:0,
        zIndex:20,
        elevation:5
            },
    mask:{
        height:height,
        width:width,
        backgroundColor:'black',
        opacity:0.5,
        position:'absolute',
        left:0,
        top:0
    },
    touch:{
        marginLeft:10,
        marginRight:10
    },
    image:{
        height:25,
        width:25
    },
    input:{
        width:width - 90
    },
    header:{
        height:60,
        backgroundColor:'white',
        elevation:5,
        alignItems:'center',
        flexDirection:'row'
    }
});

export default class NoteView extends Component{
    render(){
        return (
            <View style={style.wrapper} >
                <View style={style.mask}></View>                
                <View
                 style={style.header}
                >
                    <TouchableOpacity style={style.touch}>
                        <Image source={CANCEL_ICON} style={style.image} />
                    </TouchableOpacity>

                    <TextInput style={style.input} />

                    <TouchableOpacity style={style.touch}>
                        <Image source={YES_ICON} style={style.image} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

