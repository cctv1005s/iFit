import React ,{Component}from 'react';
import {View,Text,Image,Button} from 'react-native';

export default class Drawer extends Component{
    render(){
        var navigation = this.props.navigation;
        return (
            <View>
                <Image source={require('../assets/img/background.png')} style={{width:310,height:400}}/>
                <Button title="text me" onPress={
                    ()=>{
                        navigation.navigate('Collect');
                    }
                }/>
            </View>
        );
    }
}
