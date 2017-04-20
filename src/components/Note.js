import React,{Component} from 'react';
import {View,Text} from 'react-native';
import Header from './Header.js';

export default class Note extends Component{
    constructor(p){
        super(p);
        global.navigation = this.props.navigation;
    }
    
    render(){
        return (
            <View>
                <Header 
                 title="健身笔记"
                />
                <Text>
                    健身笔记
                </Text>
            </View>
        );
    }
}