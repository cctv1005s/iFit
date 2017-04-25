var Storage = {};

//初始化Collect 的storage
Storage.init = function () {
    // storage.remove({
    //     key: 'collect'
    // });
    storage.load({
        key: 'collect',
    }).then(ret => {
        // found data go to then() 
        console.log(ret);
    }).catch(err => {
        console.log("新建collect");
        storage.save({
            key: 'collect',  // 注意:请不要在key中使用_下划线符号!
            rawData: {},// 'http://www.fitnes.cn/jianshen/13952.html': ['一直健身却练不出肌肉，怎么办？', 'http://p1.pstatp.com/large/18510005b95affd3bda3']
            expires: null,
        });
    })
}

Storage.checkUrl = function (url, obj, self) {
    storage.load({
        key: 'collect',
    }).then(ret => {
        if (url in ret) {
            console.log("meimaoming");
            obj.isCollect = true;
        }
    }).then(() => {
        self.setState({});
    }).catch(err => {
        alert("Collect Storage 查询url出错");
    })

}
export default Storage;

