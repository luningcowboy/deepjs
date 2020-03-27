const Parse = require('acorn');

// Values
function SimpleValue(value, kind) {
    this._value = value;
    this._kind = kind || '';
}
SimpleValue.prototype.set = function(value) {
    if (this._kind == 'const') throw new TypeError('Assignment to constant variable');
    else this._value = value;
};
SimpleValue.prototype.get = function() {
    return this._value;
};

function MemberValue(obj, prop) {
    this._obj = obj;
    this._prop = prop;
}
MemberValue.prototype.set = function(value) {
    this._obj[this._prop] = value;
};
MemberValue.prototype.get = function() {
    return this._obj[this._prop];
};
// Standard
var StandardMap = {
    isFinite: new SimpleValue(isFinite),
    isNaN: new SimpleValue(isNaN),
    parseFloat: new SimpleValue(parseFloat),
    parseInt: new SimpleValue(parseInt),
    decodeURI: new SimpleValue(decodeURI),
    decodeURIComponent: new SimpleValue(decodeURIComponent),
    encodeURI: new SimpleValue(encodeURI),
    encodeURIComponent: new SimpleValue(encodeURIComponent),

    Object: new SimpleValue(Object),
    Function: new SimpleValue(Function),
    Boolean: new SimpleValue(Boolean),
    Symbol: new SimpleValue(Symbol),
    Error: new SimpleValue(Error),
    EvalError: new SimpleValue(EvalError),
    RangeError: new SimpleValue(RangeError),
    ReferenceError: new SimpleValue(ReferenceError),
    SyntaxError: new SimpleValue(SyntaxError),
    TypeError: new SimpleValue(TypeError),
    URIError: new SimpleValue(URIError),

    Number: new SimpleValue(Number),
    Math: new SimpleValue(Math),
    Date: new SimpleValue(Date),

    String: new SimpleValue(String),
    RegExp: new SimpleValue(RegExp),

    Array: new SimpleValue(Array),
    Int8Array: new SimpleValue(Int8Array),
    Uint8Array: new SimpleValue(Uint8Array),
    Uint8ClampedArray: new SimpleValue(Uint8ClampedArray),
    Int16Array: new SimpleValue(Int16Array),
    Uint16Array: new SimpleValue(Uint16Array),
    Int32Array: new SimpleValue(Int32Array),
    Uint32Array: new SimpleValue(Uint32Array),
    Float32Array: new SimpleValue(Float32Array),
    Float64Array: new SimpleValue(Float64Array),

    ArrayBuffer: new SimpleValue(ArrayBuffer),
    DataView: new SimpleValue(DataView),
    JSON: new SimpleValue(JSON),



};
// end Values

// Scope作用域
function Scope(type, parentScope) {
    this._type = type;
    this._parentScope = parentScope;

}
// end Scope

// JSJS
function JSJS(codes) {
    this._codes = codes;
    this._AST = Parse.parse(codes);
    console.log(this._AST);
}

// end JSJS
var jsjs = new JSJS("var a = 10; KM = KM || {}; KM.a = 10;");
