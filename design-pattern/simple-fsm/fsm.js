// 一个简单的配置状态机
function FSM() {
    this._statConf = null;
    this._curStat = null;
    this._actived = false;
    this._previousStat = null;
}
// 初始化状态机
FSM.prototype.init = function(conf) {
    this._statConf = conf;
    this._curStat = this._statConf.stats[this._statConf.default];
    this._actived = false;
    this._previousStat = null;
    this._curStat.onEnter();
};
// 激活状态机
FSM.prototype.active = function() {
    this._actived = true;
};
// 获取当前状态
FSM.prototype.currentStat = function() {
    return this._curStat;
};
// 获取上一个状态
FSM.prototype.previousStat = function() {
    return this._previousStat;
}
FSM.prototype.update = function() {
    if (this._actived && this._curStat) {
        var rules = this._statConf.rules;
        for (var i = 0; i < rules.length; i++) {
            var rule = rules[i];
            if (rule.from == this._curStat.tag && rule.onCheck()) {
                this._curStat.onExit();
                this._previousStat = this._curStat;
                this._curStat = this._statConf.stats[rule.to];
                this._curStat.onEnter();
                break;
            }
        }
    }
};
// 检测是否可进行状态切换
FSM.prototype.isCan2Stat = function(toStat) {
    if (this._actived && this._curStat) {
        var rules = this._statConf.rules;
        for (var i = 0; i < rules.length; i++) {
            var rule = rules[i];
            if (rule.from == this._curStat.tag && rule.to == toStat) {
                return true;
            }
        }
    }
    return false;
};
// 状态机是否已经激活
FSM.prototype.isActived = function() {
    return this._actived;
};
// 强制状态转换
FSM.prototype.force2Stat = function(stat) {
    this.init(stat);
    this.active();
};
// End FSM

