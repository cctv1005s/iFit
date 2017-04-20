import React,{Component} from 'react';
import {View,Text,Image,Button,ScrollView} from 'react-native';
import { TabNavigator } from 'react-navigation';
import Header from '../Header.js';
import cheerio from 'cheerio-without-node-native';

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
        fetch('http://cn.bing.com/images/search?q=image&FORM=HDRSC2')
        .then(function(res){
            return res.text();
        })
        .then(function(text){
            var $ = cheerio.load(text);
            var thumbs = $('.thumb');
            for(var i = 0;i < thumbs.length;i++){
                self.state.list.push({
                    url:thumbs[i].attribs.href,
                    name:'thumbs'
                });
            }
            self.setState({});
        })
        .catch(function(e){
            throw new Error(e);
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
        console.log(this.state);
        return (
            <View>
                <Header 
                    title = "FitTime"
                    leftClick={()=>{
                        global.navigation.navigation.navigate('DrawerOpen')
                    }}
                />
                <View>
                <ScrollView style={{height:600}}>
                    {this.state.list.map(function(ele,i){
                        return (
                            <View key={i}>
                            <Image 
                             source={{uri: ele.url}}
                             style={{width: 100, height: 100}} 
                            />
                            <Text>
                                我是图片
                            </Text>
                            </View>
                        );
                    })}
                </ScrollView>
                </View>
            </View>
        );
    }
}