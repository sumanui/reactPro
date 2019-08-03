import {takeLatest} from 'redux-saga/effects';
import * as constants from './constants';

import { userLoginRequest } from './userLogin/action';
import { signUpRequest } from './signUp/action/';
import { blogRequest } from './blog/action/';
import { postRequest } from './post/action'
import { postApiRequest, imageUploadRequest } from './game/action'

export function* watchActions () {
  yield takeLatest(constants.USER_LOGIN_REQUEST, userLoginRequest);
  yield takeLatest(constants.USER_SIGNUP_REQUEST, signUpRequest);
  yield takeLatest(constants.USER_BLOG_REQUEST, blogRequest);
  yield takeLatest(constants.POST_REQUEST, postRequest);
  yield takeLatest(constants.POST_API_REQUEST, postApiRequest);
  yield takeLatest(constants.IMAGE_UPLOAD_REQUEST, imageUploadRequest)
}

export default function* rootSaga () {
  yield [
    watchActions()
  ];
}
