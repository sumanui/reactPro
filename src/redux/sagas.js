import {takeLatest} from 'redux-saga/effects';
import * as constants from './constants';

import { loginRequest } from './login/action/';
import { signUpRequest } from './signUp/action/';
import { blogRequest } from './blog/action/';
import { postRequest } from './post/action'

export function* watchActions () {
  yield takeLatest(constants.USER_LOGIN_REQUEST, loginRequest);
  yield takeLatest(constants.USER_SIGNUP_REQUEST, signUpRequest);
  yield takeLatest(constants.USER_BLOG_REQUEST, blogRequest);
  yield takeLatest(constants.POST_REQUEST, postRequest);
}

export default function* rootSaga () {
  yield [
    watchActions()
  ];
}
