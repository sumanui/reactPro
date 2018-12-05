import {call, put} from 'redux-saga/effects';
import * as actions from '../../actions';
import fireAjax from '../../../services/index';
import {CONFIG} from '../../../config/index';

export function* blogRequest (action) {
  try {
    const response = yield call(fireAjax, 'GET', `${CONFIG.BASE_URL}${CONFIG.BLOG}`, {
    });
    if (response && (response.status === 200 || response.status === 304) ) {
      yield put(actions.userBlogSuccess(response.data));
    } else if (response && response.error === 1) {
      yield put(actions.userBlogError('Invalid Blog...'));
    }
  } catch (e) {
    yield put(actions.userBlogError('Error Occurs !!'));
    console.warn('Some error found in "blogRequest" action\n', e);
  }
}
