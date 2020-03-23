/**
 * 抽象缓存池
 * 很简单的一个缓存池，对不同类型的对象提供不同的缓存池
 * 1. 统一管理所有的缓存池
 * 2. 提供固定的接口(添加缓存池/初始化缓存池/获取缓存/销毁缓存池)
 */
function AbsCache() {
    this._caches = Object.create();
    this._cacheConfs = Object.create();
    this._hadInit = false; // 是否已经完成初始化
}

AbsCache.prototype.initAllCache = function() {
    if(this._hadInit) {
        // 已经完成初始化，不支持再次调用
        return;
    }
    this._caches = Object.create();
    var keys = Object.keys(this._cacheConfs);
    for (var key in keys) {
        var conf = this._cacheConfs[key];
        var initCount = conf.initCount;
        var initFunc = conf.init;
        var cache = [];
        for (var i = 0; i < initCount; i++) {
            var instance = initFunc();
            if (instance) {
                cache.push(instance);
            } else {
                // 实例化失败
            }
        }
    }
    this._hadInit = true;
};
AbsCache.prototype.destoryAllCache = function() {
    var cacheNames = Object.keys(this._cacheConfs);
    for(var cacheName in cacheNames){
        var caches = this._caches[cacheName];
        var conf = this._cacheConfs[cacheName];
        for(var i = 0; i < caches.length; i++){
            conf.onDestroy(caches[i]);
        }
    }
    delete this._cacheConfs;
    delete this._caches;
};
/**
 * conf{
 * name: 缓存池名字
 * initCount: 初始化数量
 * enlargeCount: 每次扩容数量
 * init: 实例化，返回一个实例
 * onGet: get回调
 * onRecycle: 回收回调
 * onDestroy: 销毁回调
 * }
 */
AbsCache.prototype.addCache = function(conf) {
    if (!this._cacheConfs[conf.name]) {
        this._cacheConfs[conf.name] = conf;
    }
};
AbsCache.prototype.getInstanceByCacheName = function(cacheName) {
    var cache = this._caches[cacheName];
    var conf = this._cacheConfs[cacheName];
    if (cache && conf && cache.length > 0) {
        if(cache.length <= 0){
        }
        var instance = cache[0];
        conf.onGet(instance);
        cache.split(0,1);
    }
};
// 回收
AbsCache.prototype.recycle = function(cacheName, instance) {
    var conf = this._cacheConfs[cacheName];
    this._caches.push(instance);
    conf.onRecycle(instance);
}
