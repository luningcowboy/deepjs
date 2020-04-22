# day_1
1. 引擎: 负责整个js程序的编译和执行过程
2. 编译器: 负责语法分析和代码生成
3. 作用域: 负责收集并维护由所有声明的标识符（变量）组成的一系列查询，并且实施一套非常严格的规则，确定当前执行的代码对这些标志符有访问权限。
分析:`var a = 1;`
- 声明a: 当前作用域是否有a,如果有，跳过声明，如果没有声明a
- 给a赋值: 从作用域查找是否有a,如果有，给a赋值，如果没有继续查找

## LHS,RHS
当变量出现在赋值操作的左侧时进行LHS查询，出现在右侧时进行RHS查询。
**RHS: 查找某个变量的值, 谁是赋值操作的源头**
**LHS: 找到变量的容器, 赋值操作的目标是谁**
LHS: 对谁赋值
RHS: 把谁的值赋值给变量
```js
function foo(a){
    console.log(a);
}
foo(2);
```
RHS: foo
LHS: a
RHS: console
RHS: a
```js
function foo(a){
    var b = a; // 找到a的值
    return a + b; // 找到a的值，找到b的值
}
var c = foo(2); // 找到foo的值
```
LHS: c
RHS: foo
LHS: a
LHS: b
RHS: a
RHS: a
RHS: b

LHS:3
RHS:4
??不知道是不是对
描述上面代码的LHS和RHS:
LHS: 
- 查找foo
- 查找a
- 查找b
RHS:
- 找到a的值
- 找到a的值
- 找到b的值
- 找到foo的值


