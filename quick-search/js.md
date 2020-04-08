#js语法速查表

1. 注释
```js
// 单行注释
/*
多行注释
*/
```
2. 变量声明
- `var`声明一个变量，可选初始化一个值
- `let`声明一个块作用域的局部变量，可选初始化一个值
- `const`声明一个块作用域的只读变量
概念:
**变量的作用域:**
函数外声明的变量是**全局变量**.
函数内声明的变量是**局部变量**.
ES6之前没有**语句块**作用域，相反，语句块中声明的变量将成为语句块所在函数(或全局作用域)的局部变量。
```js
if(true){
    var x = 5;
}
console.log(x); // 5
```
**变量提升:**
你可以先使用一个变量稍后再声明变量而不会引发异常
JavaScript 变量感觉上是被“提升”或移到了函数或语句的最前面。但是，提升后的变量将返回 undefined 值。因此在使用或引用某个变量之后进行声明和初始化操作，这个被提升的变量仍将返回 undefined 值
`let`和`const`将不会提升变量到代码块的顶部.
```js
console.log(x === undefined);
var x = 3;
var myvar = "my value";
(function(){
    console.log(myvar);// undefined
    var myvar = "local value";
})();
```
