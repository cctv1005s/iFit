import React from 'react';
import { TabNavigator } from 'react-navigation';

import Overall from './Information/Overall.js';
import SinaWeibo from './Information/SinaWeibo.js';
import Keep from './Information/Keep.js';
import FitTime from './Information/FitTime.js';

var Router = {
    Overall:{
        screen:Overall,
        path:'/',
    },
    SinaWeibo:{
        screen:SinaWeibo,
        path:'/SinaWeibo,'
    },
    Keep:{
        screen:Keep,
        path:'/Keep'
    },
    FitTime:{
        screen:FitTime,
        path:'/FitTime'
    }
};

export default TabNavigator(Router,{
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    tabBarOptions: {
    activeTintColor: '#FFCC33',
    labelStyle: {
        fontSize: 12,
        color:'#515151'
    },
    indicatorStyle:{
        opacity:0
    },
    showIcon:true,
    style:{
        height:60,
        backgroundColor: '#f8f8f8'
    },
    upperCaseLabel:false
  }
});
