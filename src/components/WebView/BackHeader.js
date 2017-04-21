import React from 'react';
import {
    Image,
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native';

const Header = ({title,img,leftClick}) =>(
    <View style={styles.header}>
        <TouchableOpacity 
         onPress={()=>{
             //返回上一层
             global.navigation.navigation.goBack(null);
         }}
        >
            <Image source={require('../../assets/img/back.png')} style={styles.left}/>
        </TouchableOpacity>
        
        <Text style = {styles.title}>
            {title}
        </Text>
    </View>
);

var styles = StyleSheet.create({
    left:{
        height:25,
        width:25,
    },
    header:{
        backgroundColor:'#FFCC33',
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