function SingletonManager(){
    this.init();
}

SingletonManager.prototype.init = function(){
    this._singletons = Object.create();
};
SingletonManager.prototype.register = function(type){
    if(!this._singletons[type]){
        this._singletons[type] = null;
    }
};
SingletonManager.prototype.initAll = function(){
    var keys = Object.keys(this._singletons);
    for(let key in keys){
        if(!this._singletons[key]){
            this._singletons[key] = new key();
        }
    }
};
SingletonManager.prototype.destoryAll = function(){
    var keys = Object.keys(this._singletons);
    for(let key in keys){
        if(this._singletons[key]){
            // 必须实现，没有直接报错
            this._singletons[key].destroy();
        }
    }
}
SingletonManager.prototype.getInstance = function(type){
    return this._singletons[type];
}
SingletonManager.prototype.get = function(type){
    if(this._singletons.has(type)) return this._singletons.get(type);
    return null;
}
