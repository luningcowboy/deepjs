var a = {n: 1};
a.x = a = {n: 2};
console.log(a);

var x = y = 100;
console.log(x, y);
