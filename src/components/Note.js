import React,{Component} from 'react';
import {View,Text,ScrollView,Dimensions} from 'react-native';
import Header from './Note/Header.js';
import Tips from './Note/Tips.js';

//每一个Note条目
import NoteD from './Note/NoteD.js';
//Note的管理器
import NoteManager from './Note/NoteManager.js';
//生成或者编辑一个Note的界面
import NoteView from './Note/NoteView.js';

var {height,width} = Dimensions.get('window');

export default class Note extends Component{
    constructor(p){
        super(p);
        this.state={
            visible:false,//用于控制tips的显示
            viewVisible:false,//用于用空NewNoteView的显示
            notes:[],
            activeType:'heart',
            editEle:null
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
        })
        .catch(function(e){
            console.log("错误",e);
        });
    }

    render(){
        var self = this;
        var visible = this.state.visible;//tips的显示
        var viewVisible = this.state.viewVisible;//NewNoteView的显示
        this.state.notes = this.state.notes || [];
        return (
            <View style={{zIndex:1}}>
                <Tips 
                 visible={visible}
                 onPress={(type)=>{
                   //显示创建界面
                   self.setState({
                     viewVisible:true,
                     activeType:type,
                     visible:!visible
                   });
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

                <ScrollView style={{height:height - 80 ,backgroundColor:"#eee"}}>
                    {
                        this.state.notes.map(function(ele,i){
                            return (
                                <NoteD 
                                 key={i}
                                 ele={ele}
                                 onEnd={(type)=>{
                                     if(type == 'edit'){
                                        self.setState({
                                            editEle:ele,
                                            viewVisible:true
                                        });
                                     }
                                     else{
                                        self.componentDidMount();
                                        self.setState({});
                                     }
                                        
                                 }}
                                />  
                            );
                        })
                    }
                </ScrollView>

                <NoteView />

            </View>
        );
    }
}