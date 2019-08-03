import { call, put } from 'redux-saga/effects';
import * as actions from '../../actions';
import fireAjax from '../../../services/index';
import { CONFIG } from '../../../config/index';
import Script from '../../script';

export function* userLoginRequest(action) {
  try {
    const response = yield call(fireAjax, 'POST', `https://reqres.in/api/login`, {
      'email': action.payload.email,
      'password': action.payload.password
    });
    console.log(response);

    const finalResponse = Script(response);
    console.log(finalResponse);

    if (finalResponse.success) {

      sessionStorage.setItem('token', response.data.token);
      yield put(actions.userLoginSuccess(response.data.data));
    } else if (finalResponse.failure) {
      console.log("failllllllll");

      yield put(actions.userLoginError(response.data));
    }
  } catch (e) {
    yield put(actions.userLoginError("error occurs"));
    console.warn('Some error found in userLogin action\n', e);
  }
}