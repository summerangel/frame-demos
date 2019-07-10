import { handleActions } from 'redux-actions';

const defaultProps = {
  example: 'This is a react-redux example.',
  addition: 'whatever'
};

export default handleActions({
  FETCH_ASYNC_DATA: (state, action) => {
    return {
      ...state,
      example: action.payload.asyncData
    }
  },
  NOTIFY_STATE_CHANGE: (state, action) => {
    return {
      ...state,
      addition: action.payload.addition
    }
  }
}, defaultProps)
