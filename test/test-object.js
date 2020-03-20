var Obj = {
    _Tag: 'Obj',
    func1: function(){
        console.log('Obj func1==>', this);
    },
};

function Obj2(){
    this._Tag = 'Obj2';
}
Obj2.prototype.func1 = function(){
    console.log('Obj2 func1==>',this);
};

Obj.func1()
var t = new Obj2();
t.func1();
