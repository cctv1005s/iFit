/**
 * 用于Note笔记的管理
 */
var NoteManager = {};

NoteManager.add = function({type,text,date}){
    return storage
    .load({key:'note'})
    .then(function(ret){
        if(!ret.data)
            ret.data = [];
        //将数据存入
        ret.data.push({
            id:new Date().getTime(),
            type:type,
            text:text,
            date:date
        });
        //保存数据
        storage.save({
            key:'note',
            rawData:ret
        });
        return ret;
    })
    .catch(function(e){
        switch(e.name){
            case 'NotFoundError':
             NoteManager.init();
            break;
            case 'ExpiredError':
             NoteManager.init();
            break;
        }
    });
}

/**
 * 初始化数据存储，保证至少可以
 */
NoteManager.init = function(){
    storage.save({
        key:'note',
        rawData:{}
    });
}

/**
 * 一次性拿到所有的数据
 */
NoteManager.getAll = function(){
    return storage
    .load({key:'note'})
    .then(ret=>{
        return ret.data;
    });
}

/**
 * 根据id拿到数据
 * 
 * @param id 传入的id
 */
NoteManager.get = function(id){
    return storage
    .load({
        key:'note'
    })
    .then(function(ret){
        var data = ret.data;
        for(var i in data){
            if(data[i].id == id)
                return data[i];
        }

        return null;
    });
}

export default NoteManager;