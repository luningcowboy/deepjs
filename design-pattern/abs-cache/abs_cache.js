class AbsCache{
    constructor(){
        this._cacheMap = new Map();
        this._cacheInfo = new Map();
    }
    addCache(cacheName, cacheCount, enlargeCount, onInit, onGet, onRecycle, onDestroy){

    }
    initCache(cacheName){
    }
    getElementByCacheName(cacheName){
    }
    recycleElementByCacheName(cacheName, element){
    }
    destroyCache(cacheName){
    }
}
