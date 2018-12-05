import {call, put} from 'redux-saga/effects';
import * as actions from '../../actions';
import fireAjax from '../../../services/index';
import {CONFIG} from '../../../config/index';

export function* postRequest (action) {
  try {
    const response = yield call(fireAjax, 'POST', `${CONFIG.BASE_URL}${CONFIG.POST}`, {
      'username': action.payload.email,
      'title': action.payload.title,
      'post': action.payload.body
    });
    if (response && (response.status === 200 || response.status === 304) ) {
      yield put(actions.postSuccess(response.data));
    } else if (response && response.error === 1) {
      yield put(actions.postError('Invalid Post...'));
    }
  } catch (e) {
    yield put(actions.postError('Error Occurs !!'));
    console.warn('Some error found in "postRequest" action\n', e);
  }
}
