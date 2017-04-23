/**
 * 该组件用于显示右上角点击出现的菜单
 * 点击之后触发时间,onPress,并且在回调函数中返回触碰按钮的id
 * @date 2017年04月22日12:02:05
 * @copy cctv1005s
 */
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TouchableWithoutFeedback, Dimensions } from 'react-native';
import HEART_ICON from '../../assets/img/heart.png';
import FOOD_ICON from '../../assets/img/food.png';
import FIT_ICON from '../../assets/img/fit.png';
import NOTEBOOK_ICON from '../../assets/img/notebook.png';

var { height, width } = Dimensions.get('window');

var style = StyleSheet.create({
    text: {
        lineHeight: 30,
        textAlign: 'center',
        fontSize: 15
    },
    img: {
        height: 30,
        width: 30,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10
    },
    tips: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})
//图标和文字的选项
var tips_item = [
    {
        id: 'heart',
        icon: HEART_ICON,
        text: '心情'
    },
    {
        id: 'food',
        icon: FOOD_ICON,
        text: '饮食'
    },
    {
        id: 'fit',
        icon: FIT_ICON,
        text: '训练'
    },
    {
        id: 'notebook',
        icon: NOTEBOOK_ICON,
        text: '笔记'
    }
];

export default Tips = ({ visible,onPress }) => {
    return (
        <View style={
            {
                position: 'absolute',
                right: 10, top: 50,
                width: 95,
                height: 170,
                backgroundColor: 'white',
                zIndex: visible ? 10 : 0,
                elevation: 5,
                opacity: visible ? 1 : 0
            }
        }>
            {
                tips_item.map(function (ele, i) {
                    return (
                        <TouchableOpacity
                            style={style.tips}
                            onPress={() => {onPress(ele.id)}}
                            key={i}
                        >
                            <Image
                                source={ele.icon}
                                style={style.img}
                            />
                            <Text style={style.text}>
                                {ele.text}
                            </Text>
                        </TouchableOpacity>
                    )
                })
            }
        </View>
    );
};