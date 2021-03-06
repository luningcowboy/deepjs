// 1.二分查找
function search(arr, value, left, right){
    if(left === right) {
        if(arr[left] === value) return left;
        return -1;
    }
    if(arr.length <= right - left) return -1;

    var mid = parseInt((left + right)/ 2);
    if((right - left ) === 1) {
        if(arr[left] === value) return left;
        if(arr[right] === value) return right;
        return -1;
    }
    if(arr[mid] === value) return mid;
    if(arr[mid] < value) return search(arr, value, mid + 1, right);
    return search(arr, value, left, mid - 1);
}
// 2. 字符串反转
function reverseString(str){
    var ret = '';
    var len = str.length;
    for(var i = len - 1; i >= 0; i--){
        ret += str[i];
    }
    return ret;
}
// 3. 汉明距离
function compare(arr1, arr2){
    var ret = 0;
    var len = str1.length;
    for(var i = 0; i < len; i++){
        if(arr1[i] !== arr2[i]) ret++;
    }
    return ret;
}
function hanMing(x, y){
    var strX = x.toString(2),
        strY = y.toString(2);
    var lenX = strX.length,
        lenY = strY.length;

    console.log(`hanMing:${strX}, ${strY}, ${lenX}, ${lenY}`);
    if(lenX == lenY) return compare(strX, strY);
    else{
        var toFillStr = lenX > lenY ? strX : strY;
        var fillLen = parseInt(lenX - lenY);
        var otherStr = lenX > lenY ? strY : strX;

        var fillStr = '';
        for(var i = 0; i < fillLen; i++){
            fillStr += '0';
        }
        fillStr += toFillStr;
        return compare(fillStr, otherStr);
    }
}

function testSearch(){
    console.log('testSearch>>>>');
    var arr = [1,2,3,4,5];
    console.log(arr);
    console.log('search>>2', search(arr, 2, 0, 4));
    console.log('search>>4', search(arr, 4, 0, 4));
    console.log('search>>5', search(arr, 5, 0, 4));
    console.log('search>>1', search(arr, 1, 0, 4));
    console.log('search>>3', search(arr, 3, 0, 4));
    console.log('search>>3', search(arr, 3, -1, 6));
    console.log('search>>3', search(arr, 3, 0, 6));

    arr = [];
    console.log('search>>3', search(arr, 3, 0, 4));
    console.log('<<<testSearch');
}

function testReverseString(){
    console.log('testReverseString>>>');
    var str = 'abcd';
    console.log(reverseString(str));
    console.log(reverseString('1234'));
    console.log(reverseString('1234abc123'));
    console.log(reverseString(''));
    console.log('<<<testReverseString');
}

function testHanMing(){
    console.log('testHanMing>>>');
    console.log(hanMing(1, 4));
    console.log(hanMing(5, 4));
    console.log(hanMing(1, 2));
    console.log('<<<testHanMing');
}
//testHanMing();
//testSearch();
var x = y = 100;
console.log(x, y);
console.log(a = 100);
var c = {}
c.a = c = [];
console.log(c.a);
var a = {n:1};
a.n = a = {n:2};
console.log(a.n);
{
    var a = {n:1}, ref = a;
    a.x = a = {n:2};
    console.log(a); // { n: 2 }
    console.log(ref); //{ n: 1, x: { n: 2 } }
}
{
    var i = 10, root = {index: 'NONE'}, node = root;
    while(i > 0){
        node.next = node = new Object;
        node.index = i--;
    }
    node = root;
    while(node = node.next){
        console.log(node);
    }
    console.log(root);
}

{
    var a = {x: 100};
    with (a)
       delete x;
    console.log(a);
    console.log((0,1),(1));
    console.log((eval)('var x = 1;'));
    console.log((0, eval)('var y = 2;'));
    console.log(x);
    console.log(y);
}
{
    var a = {x: ()=>console.log('xxxx')};
    (1, a.x)();
}
{
    function fff(type){
        type = type || 'a';
        console.log(type);
    }
    fff();
    fff('b')
}
{
    var c = {value: null}, root = c;
    var i = 0; 
    while(i < 10){
        c.next = c = {value: i};
        i++;
    }
    var iter = root.next;
    while(iter){
        console.log(iter.value);// 0~9
        iter = iter.next;
    }
}
