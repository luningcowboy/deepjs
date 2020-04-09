var foo = {
    // js并没有保护hasOwnProperty这个方法，所以尽量使用Object原型上的hasOwnProperty属性
    hasOwnProperty: function(){
        return false;
    },
    bar: 'this is bar'
};
// hasOwnProperty
//

// bad
var hasBar = foo.hasOwnProperty("bar");
console.log(hasBar); // false 
// good
hasBar = Object.prototype.hasOwnProperty.call(foo, "bar");
console.log(hasBar); // true

// isPrototypeOf
// 表示调用对象是否在另一个对象的原型链上。

// test
function Foo(){}
function Bar(){}
function Baz(){}
Bar.prototype = Object.create(Foo.prototype);
Baz.prototype = Object.create(Bar.prototype);
var baz = new Baz();
console.log(Baz.prototype.isPrototypeOf(baz)); // true
console.log(Bar.prototype.isPrototypeOf(baz)); // true
console.log(Foo.prototype.isPrototypeOf(baz)); // true
console.log(Object.prototype.isPrototypeOf(baz)); // true
// 注意:
// 如果你有段代码只在需要操作继承自一个特定的原型链的对象的情况下执行，同 instanceof 操作符一样 isPrototypeOf() 方法就会派上用场，例如，为了确保某些方法或属性将位于对象上。


// bad
var isPrototypOfBar = Foo.isPrototypeOf(baz);
console.log(isPrototypOfBar);// false
// good
isPrototypOfBar = Object.prototype.isPrototypeOf(Foo, baz);
console.log(isPrototypOfBar);// true

// propertyIsEnumerable
