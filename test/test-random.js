function randomRange(min, max) {
    return parseInt(Math.random() * (max - min) + min);
}
/*
for(var i = 0; i < 100; i++){
    console.log(randomRange(10,100));
}
*/
function random(seed) {
    return ('0.' + Math.sin(seed).toString().substr(6));
}

function getSeed(seed) {
    // 为啥是9301 49297 233280 参考线性同余生成器
    // https://www.zhihu.com/question/22818104
    seed = (seed * 9301 + 49297) % 233280; //为何使用这三个数?
    return seed / (233280.0);
}
function shuffle(arr, times){
    times = times || 1;
    for(var t = 0; t < times; t++){
        for(var i = 0; i < arr.length; i++){
            var idx = parseInt(arr.length * Math.random());
            var tmp = arr[i];
            arr[i] = arr[idx];
            arr[idx] = tmp;
        }
    }
    return arr;
}
function rand(num){
    num = num || 1;
    var randSeeds = [12345,11231,56432,78654,98751,88763,11223,55447,67543];
    var seed = new Date().getTime();
    var idx = parseInt(randSeeds.length * Math.random());
    randSeeds = shuffle(randSeeds, 3);
    seed += Math.random() * 100000;
    seed += randSeeds[idx];
    return getSeed(seed) * num;
}
function randRange(min, max){
    return parseInt(rand() * (max - min) + min);
}
for (var i = 0; i < 50; i++) {
    console.log(randRange(0, 300));
}
