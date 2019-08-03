import {createAction} from 'redux-actions';
import * as constants from './constants';

export const userLoginRequest = createAction(constants.USER_LOGIN_REQUEST);
export const userLoginSuccess = createAction(constants.USER_LOGIN_SUCCESS);
export const userLoginError = createAction(constants.USER_LOGIN_ERROR);

export const userSignUpRequest = createAction(constants.USER_SIGNUP_REQUEST);
export const userSignUpSuccess = createAction(constants.USER_SIGNUP_SUCCESS);
export const userSignUpError = createAction(constants.USER_SIGNUP_ERROR);

export const userBlogRequest = createAction(constants.USER_BLOG_REQUEST);
export const userBlogSuccess = createAction(constants.USER_BLOG_SUCCESS);
export const userBlogError = createAction(constants.USER_BLOG_ERROR);

export const postRequest = createAction(constants.POST_REQUEST);
export const postSuccess = createAction(constants.POST_SUCCESS);
export const postError = createAction(constants.POST_ERROR);

export const postApiRequest = createAction(constants.POST_API_REQUEST);
export const postApiSuccess = createAction(constants.POST_API_SUCCESS);
export const postApiError = createAction(constants.POST_API_ERROR);
export const postApiClear = createAction(constants.POST_API_CLEAR);

// ____________________________ IMAGE ACTION _____________________________

export const imageUploadRequest = createAction(constants.IMAGE_UPLOAD_REQUEST);
export const imageUploadSuccess = createAction(constants.IMAGE_UPLOAD_SUCCESS);
export const imageUploadError = createAction(constants.IMAGE_UPLOAD_ERROR);
export const imageUploadClear = createAction(constants.IMAGE_UPLOAD_CLEAR);