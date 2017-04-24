/**
 * 该组件用于显示每一个笔记项目
 */
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions ,TouchableOpacity , Modal ,Alert} from 'react-native';
import NoteView from './NoteView.js';
import NoteManager from './NoteManager.js';

//加载图标
import HEART_ICON from '../../assets/img/heart.png';
import FOOD_ICON from '../../assets/img/food.png';
import FIT_ICON from '../../assets/img/fit.png';
import NOTEBOOK_ICON from '../../assets/img/notebook.png';

import util from './util.js';

var { width, height } = Dimensions.get('window');
//图标映射
var Icons = {
    'heart': HEART_ICON,
    'food': FOOD_ICON,
    'fit': FIT_ICON,
    'notebook': NOTEBOOK_ICON
};

var style = StyleSheet.create({
    wrap: { padding: 20, marginTop: 10, position: 'relative', paddingTop: 10, paddingBottom: 10 },
    circle: { height: 100, width: 100, borderRadius: 50, elevation: 5, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white'},
    img: { height: 50, width: 50},
    textwrap: { position: 'absolute', left: 70, top: 15, width: width - 90, height: 90, backgroundColor: 'white' },
    maintext: { position: 'absolute', textAlign: 'center', fontSize: 15, fontWeight: 'bold', top: 25, paddingLeft: 50 },
    timetext: { position: 'absolute', right: 10, bottom: 5, fontSize: 13, color: '#a0a0a0' }
});

export default class NoteD extends Component {
    state = {
            visible:false//用于设置编辑组件是否打开的
    };

    onDetele(){
        var id = this.props.ele.id;
        var self = this;
        NoteManager.delete(id);
        this.props.onEnd();
    }

    render() {
        var ele = this.props.ele;
        var type = ele.type || 'heart';
        var icon = Icons[type];
        var self = this;
        return (
            <View style={style.wrap}>
                <TouchableOpacity 
                 style={style.circle}
                 onLongPress={()=>{
                     Alert.alert(
                        "提示消息","选择你的操作？",
                        [
                            {text:"取消",onPress:()=>{}},
                            {text:"编辑",onPress:()=>{this.props.onEnd('edit')}},
                            {text:"删除",onPress:this.onDetele.bind(this)}
                        ]);
                 }}
                 activeOpacity={0.8}
                 delayLongPress={1000}
                >
                    <Image source={icon} style={style.img} />
                </TouchableOpacity>

                <View style={style.textwrap}>
                    <Text style={style.maintext}>
                        {ele.text}
                    </Text>
                    <Text style={style.timetext}>
                        {util.formatTime(ele.date)}
                    </Text>
                </View>
            </View>
        );
    }
}