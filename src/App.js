import React, { Component } from 'react';
import { DrawerNavigator } from 'react-navigation';
import {View ,Text,Image,Button} from 'react-native';


//组件
import Information from './components/Information.js';
import Collect from './components/Collect.js';
import Drawer from './components/Drawer.js';

const Router = {
    Information:{
        name:'Information',
        screen:Information
    },
    Collect:{
        name:'Collect',
        screen:Collect
    }
};

const AppNavigator = DrawerNavigator(Router,{
    initialRouteName: 'Information',
    headerMode:'none',
    mode:'card',
    contentComponent:Drawer
});

export default () => <AppNavigator />;
