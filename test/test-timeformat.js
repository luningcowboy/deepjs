function num2Second(num){
    var ret = '';
    if(num >= 0 && num <= 60){
        if(num < 10) ret = '0'+num;
        else ret = num + '';
    }
    return ret;
}
function timeFormat(time){
    var ret = '';
    if(time <= 3600){
        var left = parseInt(time / 60);
        var right = time - left * 60;
        ret = num2Second(left) + ':' + num2Second(right);
    }
    return ret;
}
console.log(timeFormat(328));
