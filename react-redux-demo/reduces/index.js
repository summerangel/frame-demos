import { handleActions } from 'redux-actions';

const defaultProps = {
  example: 'This is a react-redux example.'
};

export default handleActions({
  FETCH_ASYNC_DATA: (state, action) => {
    return {
      ...state,
      addition: 'whatever'
    }
  }
}, defaultProps)