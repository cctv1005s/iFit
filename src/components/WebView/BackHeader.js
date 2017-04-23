import React from 'react';
import {
    Image,
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native';

import STAR_WHITE from '../../assets/img/star_white.png';
import STAR_YELLOW from '../../assets/img/star_yellow.png';

const Header = ({title,img,rightClick,active}) =>(
    <View style={styles.header}>
        <TouchableOpacity 
         onPress={()=>{
             //返回上一层
             global.navigation.navigation.goBack(null);
         }}
        >
            <Image source={require('../../assets/img/back.png')} style={styles.left}/>
        </TouchableOpacity>
        
        <Text style = {styles.title} numberOfLines={1}>
            {title}
        </Text>

        <TouchableOpacity 
         onPress={()=>{
             //返回上一层
            if(typeof rightClick == 'function')
                rightClick();
         }}
        >
            <Image source={active?STAR_YELLOW:STAR_WHITE} style={styles.left}/>
        </TouchableOpacity>
    </View>
);

var styles = StyleSheet.create({
    left:{
        height:25,
        width:25,
    },
    header:{
        backgroundColor:'#1296db',
        flexDirection:'row',
        alignItems:'center',
        padding:10,
        elevation:5
    },
    title:{
        flex:1,
        textAlign:'center',
        fontSize:18,
        fontWeight:'200',
        color:'#ffffff',
        margin:8
    }
});

export default Header;