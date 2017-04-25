
var CollectClick = {};

CollectClick.click = function (Obj, url, title, imageUrl, self) {
    console.log("KKK22"+imageUrl);
    //如果图标已经被选中
    console.log("bbb:  " + Obj.isCollect);
    if (Obj.isCollect == true) {
        Obj.isCollect = false;

        storage.load({
            key: 'collect',
        }).then(function (res) {
            console.log(res);
            delete res[url];
            console.log("真" + "Obj.isCollect:  " + Obj.isCollect);
              storage.save({
                    key: 'collect',
                    rawData: res,
                    expires: null,
            });
            console.log(res);
        }).then(() => {
            self.setState({});
        }).catch(function (err) {
            alert("Collect Storage 删除出错");
        });
    }
    else {
        Obj.isCollect = true;

        storage.load({
            key: 'collect',
        }).then(function (res) {
            console.log(res);
            res[url] = [url,title, imageUrl],
                console.log("假" + "  Obj.isCollect: " + Obj.isCollect);
            console.log(res);
            storage.save({
                    key: 'collect',
                    rawData: res,
                    expires: null,
            });
        }).then(() => {
            self.setState({});
        }).catch(function (err) {
            alert("Collect Storage 添加出错");
        });
    }
}

export default CollectClick;