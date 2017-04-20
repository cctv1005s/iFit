import React,{Component} from 'react';
import {View,Text,StyleSheet,Image,Dimensions} from 'react-native';

var {width,height} = Dimensions.get('window');

export default class NoteD extends Component{
    render(){
        return (
            <View style={{padding:20,marginTop:10,position:'relative',paddingTop:10,paddingBottom:10}}>
                <View 
                 style={{height:100,
                         width:100,
                         borderRadius:50,
                         elevation:5,
                         alignItems:'center',
                         justifyContent: 'center',
                         backgroundColor:'white'
                        }}
                 >
                    <Image source={require('../../assets/img/heart.png')} style={{height:50,width:50}}/>
                </View>

                <View style={{position:'absolute',left:70,top:15,width:width - 90,height:90,backgroundColor:'white',}}> 
                    <Text style={{position:'absolute',textAlign:'center',fontSize:15,fontWeight:'bold',top:25,paddingLeft:50}}>
                        今天心情非常的不错，我很开心,
                        今天心情非常的不错，我很
                    </Text>
                    <Text style={{position:'absolute',right:10,bottom:5,fontSize:13,color:'#a0a0a0'}}>
                        2017年04月20日15:16:20
                    </Text>
                </View>
            </View>
        );
    }
}