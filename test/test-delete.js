//1. delete x 中，如果 x 根本不存在，会发生什么？
//delete object.x 中，如果 x 是只读的，会发生什么？

var obj = {
    a: 1,
    b: 2
};
// 1. 删除不存在的属性，不会有任何异常，
// 因为，目的就是删除，没有找到对结果没有影响
var ret = delete obj.x;
console.log(ret); // true

// 2. 直接删除失败，没有抛出异常
Object.defineProperty(obj, 'x', {
    value: 42,
    writable: false
});
ret = delete obj.x;
console.log(ret); // false
