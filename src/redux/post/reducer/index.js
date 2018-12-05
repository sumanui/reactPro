import {handleActions} from 'redux-actions';
import update from 'immutability-helper';
import * as constants from '../../constants';

let initialState = {
  postLogin: {
    data:       {},
    isLoading:  false,
    isError:    false,
    isSuccess:  false,
    message:    ''
  }
};

const postRequest = (state, action) => update(state, {
  postLogin: {
    isLoading: {$set: true},
    isError:   {$set: false},
    isSuccess: {$set: false},
    message:   {$set: ''}
  }
});
const postSuccess = (state, action) => update(state, {
  postLogin: {
    data:       {$set: action.payload},
    isLoading:  {$set: false},
    isError:    {$set: false},
    isSuccess:  {$set: true},
    message:    {$set: 'Post success'}
  }
});
const postError = (state, action) => update(state, {
  postLogin: {
    isLoading: {$set: false},
    isSuccess: {$set: false},
    isError:   {$set: true},
    message:   {$set: action.payload}
  }
});

export default handleActions({
  [constants.POST_REQUEST]: postRequest,
  [constants.POST_SUCCESS]: postSuccess,
  [constants.POST_ERROR]:   postError,
}, initialState);
