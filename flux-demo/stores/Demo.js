/**
 * Created by summer on 2019/3/31.
 */
import { EventEmitter } from 'events';
import Dispatcher from '../dispatcher/Dispatcher';
import { DEMO_ASYNC_DATA, DEMO_SET_STATE } from '../constants/Demo/index';

var CHANGE = 'change';

var _state = {
    listData: [],
    totalCount: 0,
    whatever: '随便写点'
};

// 初始化store对象
var store = Object.assign({}, EventEmitter.prototype, {
    getState: function () {
        return _state;
    },
    emitChange: function () {
        this.emit(CHANGE)
    },
    addChangeListener: function (callback) {
        this.on(CHANGE, callback);
    },
    removeChangeListener: function (callback) {
        this.removeListener(CHANGE, callback)
    }
});

Dispatcher.register(function (action) {
    var type = action.type;
    if (type in store) {
        store[action.type](action.payload)
    }
});

store[DEMO_ASYNC_DATA] = function ({listData = [], totalCount = 0, params}) {
    _state.listData = listData;
    _state.totalCount = totalCount;
    for (var elm in params) {
        _state[elm] = params[elm]
    }
    store.emitChange();
};
store[DEMO_SET_STATE] = function (payload) {
    for (let key in payload) {
        if (typeof _state[key] != undefined) {
            _state[key] = payload[key];
        }
    }
    store.emitChange()
};
export default store;