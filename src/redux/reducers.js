import {combineReducers} from 'redux';

import login from './login/reducer/index';
import signUp from './signUp/reducer/index';
import blog from './blog/reducer/index';
import post from './post/reducer/index';
import game from './game/reducer/index'

export const makeRootReducer = (asyncReducers) => {
 
  return combineReducers({
    login: login,
    signUp: signUp,
    blog: blog,
    post:post,
    game:game,
    ...asyncReducers,
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
