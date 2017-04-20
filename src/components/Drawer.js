import React ,{Component}from 'react';
import {View,Text,Image,Button,StyleSheet,TouchableOpacity } from 'react-native';


var style = StyleSheet.create({
    view:{
        alignItems:'flex-start',
        marginTop:20
    },
    img:{
        height:20,
        width:20
    },
    text:{
        height:20,
        width:20
    }
});


export default class Drawer extends Component{
    render(){
        var navigation = this.props.navigation;
        return (
            <View>
                <Image source={require('../assets/img/background.png')} style={{width:300,height:250}}/>
                
                <TouchableOpacity 
                 onPress={
                    ()=>{
                         navigation.navigate('Note');
                    }
                 }
                 style={
                     style.view
                 }
                >
                    <Image source={require('../assets/img/note.png')} style={style.img}/>
                    <Text style={style.text}>健身笔记</Text>
                </TouchableOpacity>

            </View>
        );
    }
}


