import React, { Component } from 'react';
import { View, WebView, Dimensions, StyleSheet, Text, Image, } from 'react-native';
import Header from './WebView/BackHeader.js';
import CollectClick from './WebView/CollectClick.js';
import Navigation from '../Navigation.js';
import CollectStorage from './Collects/Storage.js';


var { width, height } = Dimensions.get('window');
var url, title, imageUrl;

//表示是否已经选中收藏
var Obj = {};
Obj.isCollect = false;

export default class webView extends Component {
    constructor(props) {
        super(props);
        var Info = Navigation.get();
        url = Info.url|| "";
        title = Info.title;
        imageUrl = Info.imageUrl;
        Obj.isCollect = false;
        //查询Collect storage的url
        CollectStorage.checkUrl(url, Obj, this);
    }

    render() {
        console.log("XXXX"+Obj.isCollect);
        var self = this;
        return (
            <View style={{ height: height, zIndex: 1 }}>
                <Header
                    title={title} 
                    active={Obj.isCollect}
                    rightClick={()=>CollectClick.click(Obj, url, title, imageUrl, self)}
                />
                <WebView
                    source={{ uri: url }}
                    scalesPageToFit={true}
                    startInLoadingState={true}
                    renderLoading={
                        function () {
                            return (
                                <View style={styles.container}>
                                    <Image
                                        source={require('../assets/img/loading.gif')}
                                        style={styles.loadingImage}
                                    />
                                    <Text style = {styles.text}>
                                        加载中
                                    </Text>
                                </View>
                            )
                        }
                    }
                />
            </View>
        );
    }
}
var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 100,
    },
    loadingImage: {
        height: width / 3,
        width: width / 2,
        resizeMode: Image.resizeMode.contain,
    },
    text: {
        fontSize: width/30,
        color: '#A3A3A3',
        fontWeight: 'bold',
    },
})