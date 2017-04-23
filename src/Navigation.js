var _info = {};
var Navigation = {
    navigate:function(to,info){
        global.navigation.navigate(to);
        _info = info;
    },
    get:function(){
        return _info;
    },
    /**
     * 提供的可调用的方法，打开一个新的WebView
     * 
     * 传入{
     *  title:"xxx",
     *  url:"http://cn.bing.com"
     * }
     * 就会在里面打开一个webView
     */
    openWeb:function(info){
        global.navigation.navigation.navigate('WebView');
        _info = info;
    }
}

export default Navigation;