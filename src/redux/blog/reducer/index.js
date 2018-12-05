import {handleActions} from 'redux-actions';
import update from 'immutability-helper';
import * as constants from '../../constants';

let initialState = {
  userBlog: {
    data:       {},
    isLoading:  false,
    isError:    false,
    isSuccess:  false,
    message:    ''
  }
};

const userBlogRequest = (state, action) => update(state, {
    userBlog: {
    isLoading: {$set: true},
    isError:   {$set: false},
    isSuccess: {$set: false},
    message:   {$set: ''}
  }
});
const userBlogSuccess = (state, action) => update(state, {
    userBlog: {
    data:       {$set: action.payload},
    isLoggedIn: {$set: true},
    isLoading:  {$set: false},
    isError:    {$set: false},
    isSuccess:  {$set: true},
    message:    {$set: 'Blog success'}
  }
});
const userBlogError = (state, action) => update(state, {
    userBlog: {
    isLoading: {$set: false},
    isSuccess: {$set: false},
    isError:   {$set: true},
    message:   {$set: action.payload}
  }
});

export default handleActions({
  [constants.USER_BLOG_REQUEST]: userBlogRequest,
  [constants.USER_BLOG_SUCCESS]: userBlogSuccess,
  [constants.USER_BLOG_ERROR]:   userBlogError,
}, initialState);
