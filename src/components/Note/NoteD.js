/**
 * 该组件用于显示
 */
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

import HEART_ICON from '../../assets/img/heart.png';
import FOOD_ICON from '../../assets/img/food.png';
import FIT_ICON from '../../assets/img/fit.png';
import NOTEBOOK_ICON from '../../assets/img/notebook.png';

var { width, height } = Dimensions.get('window');
//图标映射
var Icons = {
    'heart': HEART_ICON,
    'food': FOOD_ICON,
    'fit': FIT_ICON,
    'note': NOTEBOOK_ICON
};

var style = StyleSheet.create({
    wrap: { padding: 20, marginTop: 10, position: 'relative', paddingTop: 10, paddingBottom: 10 },
    circle: { height: 100, width: 100, borderRadius: 50, elevation: 5, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' },
    img: { height: 50, width: 50 },
    textwrap: { position: 'absolute', left: 70, top: 15, width: width - 90, height: 90, backgroundColor: 'white' },
    maintext: { position: 'absolute', textAlign: 'center', fontSize: 15, fontWeight: 'bold', top: 25, paddingLeft: 50 },
    timetext: { position: 'absolute', right: 10, bottom: 5, fontSize: 13, color: '#a0a0a0' }
});

export default class NoteD extends Component {
    render() {
        var ele = this.props.ele;
        var type = ele.type || 'heart';
        var icon = Icons[type];
        return (
            <View style={style.wrap}>
                <View style={style.circle}>
                    <Image source={icon} style={style.img} />
                </View>

                <View style={style.textwrap}>
                    <Text style={style.maintext}>
                        {ele.text}
                    </Text>
                    <Text style={style.timetext}>
                        {ele.date}
                    </Text>
                </View>
            </View>
        );
    }
}