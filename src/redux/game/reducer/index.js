import { handleActions } from 'redux-actions';
import update from 'immutability-helper';
import * as constants from '../../constants';

let initialState = {
    postApi: {
        data: {},
        isLoading: false,
        isError: false,
        isSuccess: false,
        message: ''
    },
};

const postApiRequest = (state, action) => update(state, {
    postApi: {
        isLoading: { $set: true },
        isError: { $set: false },
        isSuccess: { $set: false },
        message: { $set: '' }
    }
})
const postApiSuccess = (state, action) => update(state, {
    postApi: {
        isLoading: { $set: false },
        isError: { $set: false },
        isSuccess: { $set: true },
        message: { $set: action.payload }

    }
})
const postApiError = (state, action) => update(state, {
    postApi: {
        isLoading: { $set: false },
        isError: { $set: true },
        isSuccess: { $set: false },
        message: { $set: '' }
    }
})
const postApiClear = (state, action) => update(state, {
    postApi: {
        isLoading: { $set: false },
        isError: { $set: true },
        isSuccess: { $set: false },
        message: { $set: '' }
    }
})


export default handleActions({
    [constants.POST_API_REQUEST]: postApiRequest,
    [constants.POST_API_SUCCESS]: postApiSuccess,
    [constants.POST_API_ERROR]: postApiError,
    [constants.POST_API_CLEAR]: postApiClear

}, initialState);