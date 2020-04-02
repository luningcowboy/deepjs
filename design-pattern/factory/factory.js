(function(){

    function FactoryMgr(){
        this._classTypes = {};
    }
    FactoryMgr.prototype.addProduct = function addProduct(tag, createFuc){
        if(!this._classTypes){
            this._classTypes[tag] = {tag: tag, create: createFuc};
        }
        else{
            // TODO: warning
        }
    }
    FactoryMgr.prototype.getProduct = function getProduct(tag){
        if(!this._classTypes[tag]){
            // TODO: error
            return;
        }
        var conf = this._classTypes[tag];
        var ret = conf.create();

        return ret;
    }
})();
