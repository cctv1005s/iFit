import React,{Component} from 'react';
import {View,Dimensions,TextInput,Image,TouchableOpacity,StyleSheet} from 'react-native';

//引入图标
import CANCEL_ICON from '../../assets/img/cancel.png';
import YES_ICON from '../../assets/img/yes.png';

import NoteManager from './NoteManager.js';

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
    constructor(p){
        super(p);
        this.state = {
            text:""
        }
    }
    
    render(){
        var visible = this.props.visible;
        if(!visible)
            return null;
        return (
            <View style={style.wrapper} >
                <View style={style.mask}></View>                
                <View
                 style={style.header}
                >
                    <TouchableOpacity style={style.touch} onPress={this.onCancel.bind(this)}>
                        <Image source={CANCEL_ICON} style={style.image} />
                    </TouchableOpacity>

                    <TextInput 
                     style={style.input} 
                     autoFocus={true}
                     value={this.state.text}
                     onChangeText={(t)=>{this.setState({text:t})}}
                    />

                    <TouchableOpacity style={style.touch} onPress={this.onYes.bind(this)}>
                        <Image source={YES_ICON} style={style.image} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

