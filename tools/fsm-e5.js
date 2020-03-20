// 状态机构造函数
function FSM() {
    this._statConf = null;
    this._curStat = null;
    this._actived = false;
}
// 初始化状态机
FSM.prototype.init = function(conf) {
    this._statConf = conf;
    this._curStat = this._statConf.stats[this._statConf.default];
    this._actived = false;
    this._curStat.onEnter();
};
// 激活状态机
FSM.prototype.active = function() {
    this._actived = true;
};
// 获取当前的状态标识
FSM.prototype.currentStat = function() {
    return this._curStat.tag;
};
// 状态更新
FSM.prototype.update = function() {
    if (this._actived && this._curStat) {
        var rules = this._statConf.rules;
        for (var i = 0; i < rules.length; i++) {
            var rule = rules[i];
            if (rule.from == this._curStat.tag && rule.onCheck()) {
                this._curStat.onExit();
                this._curStat = this._statConf.stats[rule.to];
                this._curStat.onEnter();
                break;
            }
        }
    }
};
module.exports = FSM;
