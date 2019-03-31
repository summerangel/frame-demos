/**
 * Created by summer on 2019/3/31.
 */
import Dispather from '../dispatcher/Dispatcher';
import { DEMO_ASYNC_DATA, DEMO_SET_STATE } from '../constants/Demo/index';

export default {
    loadDemoDataAsync: function (params) {
        setTimeout(() => {
            Dispather.dispatch({
                type: DEMO_ASYNC_DATA,
                payload: {
                    params,
                    addition: '这是异步获取数据例子'
                }
            })
        }, 100)
    },
    setState: function (params) {
        Dispather.dispatch({
            type: DEMO_SET_STATE,
            payload: params
        })
    }
}