/**
 * 用于Note笔记的管理
 */
var NoteManager = {};

NoteManager.add = function({type,text,date}){
    var id = new Date().getTime();
    storage.save({
        key:'note',
        id:id,
        rawData:{
            id:id,
            type:type,
            text:text,
            date:date
        }
    });
}

/**
 * 一次性拿到所有的数据
 */
NoteManager.getAll = function(){
    return storage.getAllDataForKey('note');
}

NoteManager.delete = function(id){
    storage.remove({
	    key: 'note',
	    id: id
    });
}


export default NoteManager;