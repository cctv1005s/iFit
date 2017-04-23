import React,{Component} from 'react';
import {View,Text,ScrollView,Dimensions} from 'react-native';
import Header from './Note/Header.js';
import Tips from './Note/Tips.js';
import NewNoteView from './Note/NewNoteView.js';

//每一个Note条目
import NoteD from './Note/NoteD.js';
//Note的管理器
import NoteManager from './Note/NoteManager.js';

var {width,height} = Dimensions.get('window');

export default class Note extends Component{
    constructor(p){
        super(p);
        this.state={
            visible:false,
            notes:[]
        };
    }
    
    componentDidMount(){
        var self = this;
        //从本地存储中加载数据
        NoteManager
        .getAll()
        .then(function(data){
            self.setState({
                notes:data
            });
        });
    }

    render(){
        var self = this;
        var visible = this.state.visible;
        return (
            <View style={{zIndex:1}}>
                <Tips 
                 visible={visible}
                 onPress={(type)=>{
                    
                 }}
                />

                <Header 
                 title="健身笔记" 
                 rightClick={function(e){
                    //设置tips为不可见状态
                    self.setState({
                        visible:!visible
                    })
                 }}
                />

                <ScrollView style={{height:800,backgroundColor:"#eee"}}>
                    {
                        this.state.notes.map(function(ele,i){
                            return (
                                <NoteD 
                                 key={i}
                                 ele={ele}
                                />  
                            );
                        })
                    }
                </ScrollView>
                <NewNoteView />
            </View>
        );
    }
}