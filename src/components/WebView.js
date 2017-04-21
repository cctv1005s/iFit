import React,{Component} from 'react';
import {View,WebView,Dimensions} from 'react-native';
import Header from './WebView/BackHeader.js';
import Navigation from '../Navigation.js';

var {width,height} = Dimensions.get('window');

export default class webView extends Component{
    render(){
        var {url,title} = Navigation.get();
        url = url||"";
        console.log(Navigation.get());
        return (
            <View style={{height:height}}>
                <Header 
                 title={title}
                />
                <WebView
                source={{uri: url}}
                scalesPageToFit={true}
                />
            </View>
        );
    }
}