exports.formatTime = function(time){
    var date = new Date(time);
    return date.getFullYear() + '年' + parseInt(date.getMonth()+1) + '月' + date.getDate() + '日' + date.getHours() + '时' + date.getMinutes() + '分';
}