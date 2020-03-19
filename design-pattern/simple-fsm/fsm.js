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
                        _curStat = _statsConf[rule.to];
                        _curStat.onEnter();
                        break;
                    }
                }
            }
        }
    };
};
