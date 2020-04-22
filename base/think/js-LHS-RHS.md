# LHS,RHS
LHS和RHS涉及到js的编译和运行，理解LHS和RHS能帮助我们更好的理解js的底层原理。

## 什么是LHS和RHS?
LHS和RHS是跟赋值操作相关的，这里说的赋值操作并不一定是有`=`的操作。
举个栗子:
`var a = 1;`
这行代码的作用就是声明变量a,并给a赋值1。
这里实际上是有两个操作的:
1. `var a;`
2. `a = 1;`
`a = 1`就是赋值操作，我们给`a`赋值的时候，需要先找到`a`,找到`a`就是RHS,也就是说我们需要知道，需要给谁赋值。
将上面的代码修改下:
```js
var a = 1;
var b = 2;
a = b;
```
上面有三个赋值操作, 进行了三次RHS,第三行代码将b赋值给a,我们对b的查找就是LHS,也就是说，我们需要知道，把谁的值赋值给a.
**RHS: 目的是获取变量的值**
**LHS: 对变量进行赋值**

## 代码分析
```js
function foo(a){
    console.log(a);
}
foo(2);
```
foo RHS
a = 2 LHS
console RHS
console.log(a) RHS
```js
function foo(a){
    var b = a;
    return a + b;
}
var c = foo(2);
```
var c LHS
foo(2) RHS
a = 2 LHS
var b LHS = a RHS;
return a RHS + b RHS;

