import {handleActions} from 'redux-actions';
import update from 'immutability-helper';
import * as constants from '../../constants';

let initialState = {
  userSignUp: {
    data:       {},
    isLoading:  false,
    isError:    false,
    isSuccess:  false,
    message:    ''
  }
};

const userSignUpRequest = (state, action) => update(state, {
  userSignUp: {
    isLoading: {$set: true},
    isError:   {$set: false},
    isSuccess: {$set: false},
    message:   {$set: ''}
  }
});
const userSignUpSuccess = (state, action) => update(state, {
  userSignUp: {
    data:       {$set: action.payload},
    isLoading:  {$set: false},
    isError:    {$set: false},
    isSuccess:  {$set: true},
    message:    {$set: 'SignUp success'}
  }
});
const userSignUpError = (state, action) => update(state, {
  userSignUp: {
    isLoading: {$set: false},
    isSuccess: {$set: false},
    isError:   {$set: true},
    message:   {$set: action.payload}
  }
});

export default handleActions({
  [constants.USER_SIGNUP_REQUEST]: userSignUpRequest,
  [constants.USER_SIGNUP_SUCCESS]: userSignUpSuccess,
  [constants.USER_SIGNUP_ERROR]:   userSignUpError,
}, initialState);
