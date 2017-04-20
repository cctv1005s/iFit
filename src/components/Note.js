import React,{Component} from 'react';
import {View,Text,ScrollView} from 'react-native';
import Header from './Header.js';

//每一个Note条目
import NoteD from './Note/NoteD.js';

export default class Note extends Component{
    constructor(p){
        super(p);
        global.navigation = this.props.navigation;
    }
    
    render(){
        return (
            <View style={{zIndex:1}}>
                <Header title="健身笔记"/>
                <ScrollView style={{height:800,backgroundColor:"#eee"}}>
                    <NoteD />
                    <NoteD />
                </ScrollView>
            </View>
        );
    }
}