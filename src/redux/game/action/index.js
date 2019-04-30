import { call, put } from 'redux-saga/effects';
import * as actions from '../../actions';
import fireAjax from '../../../services/index';
import { CONFIG } from '../../../config/index';

export function* postApiRequest(action) {
    if (action.payload == undefined) {
        yield put(actions.postApiClear());
    }
    else {
        try {
            const response = yield call(fireAjax, 'POST', `http://dummy.restapiexample.com/api/v1/create`, {
                'employee_name': action.payload.employee_name,

            });
            const finalResponse = script(response);
            if (finalResponse.success) {
                yield put(actions.postApiSuccess(response.data.data));
            } else if (finalResponse.failure) {

                yield put(actions.postApiError(response.data));
            }

        } catch (e) {
            yield put(actions.postApiError("error occurs"));
            console.warn('Some error found in "postApi" action\n', e);
        }
    }
}


