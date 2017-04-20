import React, { Component } from 'react';
import { DrawerNavigator } from 'react-navigation';
import {View ,Text,Image,Button} from 'react-native';

//组件
import Information from './components/Information.js';
import Drawer from './components/Drawer.js';
import Note from './components/Note.js';
import Collect from './components/Collect.js';

const Router = {
    Information:{
        name:'Information',
        screen:function(navigation){
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
};

const AppNavigator = DrawerNavigator(Router,{
    initialRouteName: 'Information',
    headerMode:'none',
    mode:'card',
    contentComponent:Drawer,
    drawerWidth:300
});

export default () => <AppNavigator />;
