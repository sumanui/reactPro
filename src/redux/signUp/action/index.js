import {call, put} from 'redux-saga/effects';
import * as actions from '../../actions';
import fireAjax from '../../../services/index';
import {CONFIG} from '../../../config/index';

export function* signUpRequest (action) {
  try {
    const response = yield call(fireAjax, 'POST', `${CONFIG.BASE_URL}${CONFIG.SIGNUP}`, {
      'email': action.payload.email,
      'password': action.payload.password
    });
    if (response && (response.status === 200 || response.status === 304) ) {
      yield put(actions.userSignUpSuccess(response.data));
    } else if (response && response.error === 1) {
      yield put(actions.userSignUpError('Invalid SignUp...'));
    }
  } catch (e) {
    yield put(actions.userSignUpError('Error Occurs !!'));
    console.warn('Some error found in "signUpRequest" action\n', e);
  }
}
