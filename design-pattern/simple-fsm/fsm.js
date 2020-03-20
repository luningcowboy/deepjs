/*
 * conf = {
 *     default: 'A'
 *     stats: {
 *        A: {tag: 'A', onEnter: null, onExit: null},
 *        B: {tag: 'B', onEnter: null, onExit: null},
 *        C: {tag: 'C', onEnter: null, onExit: null}
 *     }
 *     rules: [
 *        {from: 'A', to: 'B', onCheck: null},
 *        {from: 'A', to: 'C', onCheck: null},
 *        {from: 'B', to: 'C', onCheck: null},
 *        {from: 'B', to: 'A', onCheck: null},
 *        {from: 'C', to: 'B', onCheck: null},
 *        {from: 'C', to: 'A', onCheck: null},
 *     ]
 * }
 */
var fsm = function() {
    // 状态机配置
    var _statsConf = null;
    var _curStat = null;
    var _actived = false;
    return {
        // 初始化状态机
        init: function(conf) {
            _statsConf = conf;
            _curStat = _statsConf.stats[_statsConf.default];
            _actived = false;
        },
        // 激活状态机
        active: function() {
            _actived = true;
        },
        // 状态机更新
        update: function() {
            if (_actived && _curStat) {
                var rules = _statsConf.rules;
                for (var i = 0; i < rules.length; i++) {
                    var rule = rules[i];
                    if (rule.from == _curStat.tag && rule.onCheck()) {
                        _curStat.onExit();
                        _curStat = _statsConf.stats[rule.to];
                        _curStat.onEnter();
                        break;
                    }
                }
            }
        }
    };
};
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
// Test fsm
var fsm = new FSM();
fsm.init({
    default: 'A',
    stats: {
        'A': {
            tag: 'A',
            onEnter: function() {
                console.log('A onEnter');
            },
            onExit: function() {
                console.log('A onExit');
            }
        },
        'B': {
            tag: 'B',
            onEnter: function() {
                console.log('B onEnter');
            },
            onExit: function() {
                console.log('B onExit');
            }
        },
        'C': {
            tag: 'C',
            onEnter: function() {
                console.log('C onEnter');
            },
            onExit: function() {
                console.log('C onExit');
            }
        },
    },
    rules: [{
            from: 'A',
            to: 'B',
            onCheck: function() {
                console.log('A to B check');
                return true;
            }
        },
        {
            from: 'B',
            to: 'C',
            onCheck: function() {
                console.log('B to C check');
                return true;
            }
        },
        {
            from: 'C',
            to: 'A',
            onCheck: function(){
                console.log('C to A check');
                return true;
            }
        }
    ]
});
console.log(fsm);
fsm.active();

setInterval(function(){
    fsm.update();
}, 1000);
