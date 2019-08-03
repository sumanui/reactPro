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
    imageUpload: {
        data: {},
        isLoading: false,
        isSuccess: false,
        isError: false,
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


// ___________________IMAGE REDUCER _______________________________

const imageUploadRequest = (state, action) => update(state, {
    imageUpload: {
        isLoading: { $set: true },
        isError: { $set: false },
        isSuccess: { $set: false },
        message: { $set: '' }
    }
})

const imageUploadSuccess = (state, action) => update(state, {
    imageUpload: {
        isLoading: { $set: false },
        isError: { $set: false },
        isSuccess: { $set: true },
        message: { $set: action.payload }
    }
})

const imageUploadError = (state, action) => (state, {
    imageUpload: {
        isLoading: { $set: false },
        isError: { $set: true },
        isSuccess: { $set: false },
        message: { $set: '' }
    }
})

const imageUploadClear = (state, action) => update(state, {
    imageUpload: {
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
    [constants.POST_API_CLEAR]: postApiClear,

// _______________________________ IMAGE _________________________

[constants.IMAGE_UPLOAD_REQUEST]: imageUploadRequest,
[constants.IMAGE_UPLOAD_SUCCESS]: imageUploadSuccess,
[constants.IMAGE_UPLOAD_ERROR]: imageUploadError,
[constants.IMAGE_UPLOAD_CLEAR]: imageUploadClear

}, initialState);