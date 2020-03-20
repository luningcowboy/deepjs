function Test(){}
Test.prototype.init = function(){
    var keys = Object.keys(arguments);
    var values = [];
    for(var value in keys){
        values.push(value);
    }
    console.log(arguments);
    console.log(values.join(" "));
};
var t = new Test();
t.init(1,2,3,4,'a');
