/**
 * @file abs_cache.js
 * 作为一个缓存池管理器来管理所有的缓存池
 * 统一处理缓存池的相关操作
 * 要求提供create方法，对象自己要有destroy方法
 */

(function(NameSpace){

    /**
     * PoolManager
     * 构造函数
     *
     * @returns {undefined}
     */
    function PoolManager(){
        this._poolConfs = {};
        this._pools = {};
        this._hasInit = false;
    }

    /**
     * initAllPools
     * 初始化所有的缓存池
     *
     * @returns {undefined}
     */
    PoolManager.prototype.initAllPools = function initAllPools(){
        if(this._hasInit){
            // TODO: error
            return;
        }
        for(var key in this._poolConfs){
            var conf = this._poolConfs[key];
            var size = conf.poolSize;
            this._pools[conf.tag] = [];
            for(var i = 0; i < size; i++){
                var ele = conf.createCB();
                if(!ele){
                    // TODO: error
                    break;
                }
                this._pools[conf.tag].push(ele);
            }
        }
        this._hasInit = true;
    }

    /**
     * destroy
     * 销毁所有缓存池
     *
     * @returns {undefined}
     */
    PoolManager.prototype.destroy = function destroy(){
        this._hasInit = false;
        var tags = Object.keys(this._poolConfs);
        for(var i = 0; i < tags.length; i++){
            var tag = tags[i];
            this.destroyPoolByTag(tag);
        }
        this._poolConfs = null;
        this._pools = null;
    }

    /**
     * destroyPoolByTag
     *
     * 根据tag销毁缓存池
     *
     * @param tag string
     * @returns {undefined}
     */
    PoolManager.prototype.destroyPoolByTag = function destroyPoolByTag(tag){
        var conf = this._poolConfs[tag];
        var pool = this._pools[tag];
        if(!conf || !pool){
            // TODO: error
            return;
        }
        for(var i = 0; i < pool.length; i++){
            var ele = pool[i];
            if(!ele || !ele.destroy){
                // TODO: error
                break;
            }
            ele.destroy();
        }
        this._pools[tag] = null;
    }

    /**
     * addPool
     *
     * @param tag string 
     * @param createCB function
     * @param destroyCB function
     * @returns {undefined}
     */
    PoolManager.prototype.addPool = function addPool(tag, createCB, poolSize){
        if(!this._poolConfs[tag]){
            this._poolConfs[tag] = {
                tag: tag,
                create: createCB,
                poolSize: poolSize
            };
            this._pools[tag] = [];
        }
    }

    /**
     * getElementByTag
     *
     * @param tag string
     * @returns {Element} Object
     */
    PoolManager.prototype.getElementByTag = function getElementByTag(tag){
        if(this._pools[tag]){
            if(this._pools.length <= 0){
                var conf = this._poolConfs[tag];
                var size = conf.poolSize;
                for(var i = 0; i < size; i++){
                    var ele = conf.createCB();
                    if(!ele){
                        // TODO: error
                        break;
                    }
                    this._pools[tag].push(ele);
                }
                return this._pools.shift();
            }
        }
        // TODO: error
        return null;
    }

    /**
     * recycleElement
     * 回收element
     *
     * @param tag
     * @param elem
     * @returns {undefined}
     */
    PoolManager.prototype.recycleElement = function recycleElement(tag, elem){
        var pools = this._pools[tag];
        if(!poos){
            // TODO: error
            return;
        }
        this.pools.push(ele);
    }

    // 导出PoolManager
    NameSpace.PoolManager = new PoolManager();
})(this);
