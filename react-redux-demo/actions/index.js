import { createAction } from 'redux-actions';

export const fetchAsyncData = createAction('FETCH_ASYNC_DATA');

export const notifyStateChange = createAction('NOTIFY_STATE_CHANGE');