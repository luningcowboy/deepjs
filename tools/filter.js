function Filter(){}

/**
 * getFilterResult
 *
 * @param callFuncs [function]
 * @param input
 * @returns {undefined}
 */
Filter.prototype.getFilterResult = function(callFuncs, input){
    var ret = input;
    for(var i = 0; i < callFuncs.length; i++){
        ret = callFuncs[i](ret);
    }
    return ret;
};
/**
 * getFilterResult2
 *
 * @param callFuncs array[{func:function, target:target}]
 * @param input
 * @returns {undefined}
 */
Filter.prototype.getFilterResult2 = function(callFuncs, input){
    var ret = input;
    for(var i = 0; i < callFuncs.length; i++){
        var func = callFuncs.func;
        var target = callFuncs.target;
        ret = func.prototype.apply(target, ret);
    }
    return ret;
};
