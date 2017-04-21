import React,{Component} from 'react';
import {View,Text,ScrollView} from 'react-native';
import Header from './Note/Header.js';
import Tips from './Note/Tips.js';

//每一个Note条目
import NoteD from './Note/NoteD.js';

export default class Note extends Component{
    constructor(p){
        super(p);
        this.state={
            visible:false
        }
    }
    
    render(){
        var self = this;
        var visible = this.state.visible;
        return (
            <View style={{zIndex:1}}>
                <Tips 
                 visible={visible}
                />
                <Header 
                 title="健身笔记" 
                 rightClick={function(e){
                    self.setState({
                        visible:!visible
                    })
                 }}
                />
                <ScrollView style={{height:800,backgroundColor:"#eee"}}>
                    <NoteD />
                    <NoteD />
                </ScrollView>
            </View>
        );
    }
}