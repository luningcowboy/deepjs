/**
 * 单例构造器
 * 统一管理所有需要单例的类型
 */
function SingleMgr() {
    this._instances = Object.create();
    this._confs = Object.create();
}
/**
 * conf:{
 *      tag: 
 *      createFunc:
 *      destroyFunc:
 * }
 */
SingleMgr.prototype.addInstance = function(conf) {
    this._confs[conf.tag] = conf;
};
SingleMgr.prototype.initAll = function() {
    var tags = Object.keys(this._confs);
    for (var tag in tags) {
        var createFunc = this._confs[tag].createFunc;
        if (createFunc) {
            var instance = createFunc();
            this._instances[tag] = instance;
        }
    }
};
SingleMgr.prototype.getInstance = function(tag) {
    return this._instances[tag];
};
SingleMgr.prototype.destoryAll = function() {
    var tags = Object.keys(this._confs);
    for (var tag in tags) {
        var conf = this._confs[tag];
        var instance = this._instances;
        if (conf && conf.destroyFunc && instance) {
            conf.destroyFunc(instance);
        }
    }
    delete this._instances;
    delete this._confs;
};
