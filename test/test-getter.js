
let Baz = {
};
Object.defineProperty(Baz, "age", {
    configurable: true,
    enumerable: true,
    get: function(){
        return this.value;
    },
    set: function(age){
        this.value = age;
    }
});
console.log(Baz);
console.log(Baz.age)

