function Filter(){}

function.prototype.getFilterResult = function(callFuncs, input){
    var ret = input;
    for(var i = 0; i < callFuncs.length; i++){
        ret = callFuncs[i](ret);
    }
    return ret;
};
