import React,{Component} from 'react';
import {View,WebView,Dimensions,StyleSheet,Text,Image,} from 'react-native';
import Header from './WebView/BackHeader.js';
import Navigation from '../Navigation.js';

var {width,height} = Dimensions.get('window');

export default class webView extends Component{
    render(){
        var {url,title} = Navigation.get();
        url = url||"";
        console.log(Navigation.get());
        return (
            <View style={{height:height,zIndex:1}}>
                <Header 
                 title={title}
                />
                <WebView
                source={{uri: url}}
                scalesPageToFit={true}
                startInLoadingState={true}  
                renderLoading = {
                    function(){
                        return (
                            <View style={styles.container}>
						 <Image 
                                source={require('../assets/img/loading.gif')} 
                                style={styles.loadingImage}/>
                         </View>
                        )}
                }
                />
            </View>
        );
    }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  loadingImage: {
        margin: 100,
        height: width/3,
        width: width/2,
        resizeMode: Image.resizeMode.contain,
	},
  
})