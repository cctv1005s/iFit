//数据持久化
import storage from './Storage.js';

import React, { Component } from 'react';
import { DrawerNavigator } from 'react-navigation';
import {View ,Text,Image,Button} from 'react-native';

//组件
import Information from './components/Information.js';
import Drawer from './components/Drawer.js';
import Note from './components/Note.js';
import Collect from './components/Collect.js';
import WebView from './components/WebView.js';

const Router = {
    Information:{
        name:'Information',
        screen:function(navigation){
            //在这里，将navigation保存
            global.navigation = navigation;
            return <Information/>
        }
    },
    Collect:{
        name:'Collect',
        screen:Collect
    }
    ,
    Note:{
        name:'Note',
        screen:Note
    }
    ,
    WebView:{
        name:'WebView',
        screen:WebView
    }

};

const AppNavigator = DrawerNavigator(Router,{
    initialRouteName: 'Information',
    headerMode:'none',
    mode:'card',
    contentComponent:Drawer,
    drawerWidth:300
});


require('./Navigation.js');

export default () => <AppNavigator />;