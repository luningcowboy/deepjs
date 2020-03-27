// 变量的声明
var a = 10;
var a1 = 11, a2 = 12;
var a3; // undefined
var a1; // 重新声明后仍然为11
console.log(a1); // 11
// NOTICE:var的作用域
for(var i = 0; i < 2; i++){
    console.log('in for:',i); // in for: 0 in for 1
}
console.log('out for:',i); //out for: 2 

// 数据类型
// 值类型(基本类型)：字符串（String）、数字(Number)、布尔(Boolean)、对空（Null）、未定义（Undefined）、Symbol(ES6)
// 引用数据类型：对象(Object)、数组(Array)、函数(Function)。
// 数字
var x = 0;
var y = 0.12;
var x1 = 123e5; // 科学计数法
var x2 = 123e-5; // 科学计数法
console.log(x, y, x1, x2);//0 0.12 12300000 0.00123

// bool
var b1 = true;
var b2 = false;

// 数组
var arr1 = new Array();
arr1[0] = 1;
arr1[1] = 2;
arr1[2] = 3;
console.log(arr1);
var arr2 = [1,2,3,4];
// NOTICE: 虽然数组可以放不同的类型，但是，还是要放统一的类型，因为，统一的类型会按真正的数组处理
// 不统一的类型就不是这样了,参考:(https://juejin.im/entry/59ae664d518825244d207196)


/*
 * NOTICE
Undefined 和 Null
Undefined 这个值表示变量不含有值。

可以通过将变量的值设置为 null 来清空变量。
*/
