import React,{Component} from 'react';
import {View,Text,Image,Button,ScrollView} from 'react-native';
import { TabNavigator } from 'react-navigation';
import Header from '../Header.js';
import cheerio from 'cheerio-without-node-native';
import Navigation from '../../Navigation.js';

var storage = global.storage;

/**
 * 概览
 */
export default class FitTime extends Component{
    constructor(p){
        super(p);
        this.state = {
            list:[]
        };
    }

    componentDidMount(){
        var self = this;
        /**
         * 读取数据
         */
        storage.load({
            key:'fittime',
            autoSync: true,

        })
        .then(function(ret){
            //检测缓存，没有缓存则抛出错误，重新加载缓存
            if(typeof ret !== 'array' || ret.length == 0)
                throw new Error("没有数据");

            self.setState({
                list:ret
            });

        })
        .catch(function(err){
            self.fetchData();
        });
    }

    fetchData(){
        var self = this;
        fetch('http://cn.bing.com/images/search?q=image&FORM=HDRSC2')
        .then(function(res){
            return res.text();
        })
        .then(function(text){
            var $ = cheerio.load(text);
            var thumbs = $('.thumb');
            for(var i = 0;i < 10;i++){
                self.state.list.push({
                    url:thumbs[i].attribs.href,
                    name:'thumbs'
                });
            }
            //讲数据添加进入缓存
            self.saveData();
        })
        .catch(function(e){
            alert(e);
            throw new Error(e);
        });
    }

    //加入缓存
    saveData(){
        storage.save({
            key:"fittime",
            rawData:this.state.list,
             expires: 1000 * 60 *5 //缓存过期时间
        });
    }

    static navigationOptions = {
        tabBar: {
        label: 'FitTime',
        icon: ({ tintColor }) => (
            <Image
            source={require('../../assets/img/fittime.png')}
            style={{height:18,width:18}}
            />
        ),
        },
    };

    render(){
        return (
            <View>
                <Header title = "FitTime"/>
                <View>
                <Button title="textme" onPress={
                    function(){
                        Navigation.openWeb({
                            title:"bing",
                            url:"http://cn.bing.com"
                        });
                    }}/>
                </View>
            </View>
        );
    }
}