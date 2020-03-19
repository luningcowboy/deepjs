// 1. 变量定义
var x, length;
x = 5;
length = 6;
console.log(x, length);
var y = (5 + 6) * 10;
var x1 = 1, x2 = 2;
console.log(y);

// 2. 数据类型
var a = 10; // Number
var points = x * 10; // Number
var lastName = "Johnson"; // String
var cars = ["Saab","Volvo","BMW"]; // Array
var person = {firstName: "John", lastName: "Doe"}; // Object

// 3. 函数
function myFunction(a, b){
    return a * b;
}

// 4. 代码拆行
/*
可以这样写，但是，这样写不利于阅读
console.log("hello \
js");
*/
/*
 error
console.log\
('hello js');
*/

// 5. 注释
// 这是单行注释
/*
 * 这是多行注释
 * 这是多行注释
 */

// 6. 关于 && 和 ||
//
{
    var a = 0;
    var b = a || -1;
    console.log(a, b);
    // 下面这种写法虽然简单，但是，并不清晰，而且不符合逻辑，因为&&是表达式
    // 在js的编译中会有这种语法，但是，那是为了执行速度，不是给人看的
    // 我们自己写还是要尽量避免
    //a && func();
}
