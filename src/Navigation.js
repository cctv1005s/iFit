var _info = {};
var Navigation = {
    navigate:function(to,info){
        global.navigation.navigate(to);
        _info = info;
    },
    get:function(){
        return _info;
    },
    openWeb:function(info){
        global.navigation.navigation.navigate('WebView');
        _info = info;
    }
}

export default Navigation;