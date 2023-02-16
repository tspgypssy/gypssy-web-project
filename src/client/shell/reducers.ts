import { combineReducers } from '@reduxjs/toolkit'
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

import commonReducers from '../common/reducer';
import loginReducers from '../modules/login/reducer';
import landingPageReducers from '../modules/landingpage/reducer';
import userReducers from '../modules/user/reducer';
import tripDetailReducers from '../modules/trip-detail/reducer';
import hostReducers from '../modules/host/reducer';

const appReducer = combineReducers({
  common: commonReducers,
  login:loginReducers,
  landingpage:landingPageReducers,
  user:userReducers,
  tripDetail:tripDetailReducers,
  host:hostReducers
});

export const rootReducer = (state: any, action: any) => {
  // when a logout action is dispatched it will reset redux state
  if (action.type === 'USER_LOGGED_OUT') {
    // storage.removeItem('persist:agent');
    state = undefined;
  }

  return appReducer(state, action);
};
