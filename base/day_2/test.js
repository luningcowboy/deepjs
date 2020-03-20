function MyObj(){
    this.a = 10;
    var b = 11;
    return this.a + b;
}
MyObj.prototype.toString = function(){
    var str = '';
    //str = 'a=' + this.a + ',' + b; // Error b is undefined
    //str = 'a=' + this.a + ',' + 'b=' + this.b; // b = undefined
    str = 'a=' + this.a ; // b = undefined
    return str;
};
// 属性的初始化并不一定在构造器中
// 属性a,c,d在不同阶段初始化
MyObj.prototype.init = function(){
    this.c = 15;
    this.init2();
};
MyObj.prototype.init2 = function(){
    this.d = 20;
};
var m1 = MyObj();
var m2 = new MyObj();
console.log(m1); // 1
console.log(m2,m2.a,m2.toString()); // MyObj { a: 10 } 10 'a=10'
m2.init();
console.log(m2); // MyObj { a: 10, c: 15, d: 20 }
console.log(MyObj.prototype);//MyObj { toString: [Function], init: [Function], init2: [Function] }
console.log(m2.prototype);//undefined
