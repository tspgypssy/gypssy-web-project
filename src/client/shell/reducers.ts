import { combineReducers } from '@reduxjs/toolkit'
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

import commonReducers from '../common/reducer';
import dashboardReducers from '../modules/dashboard/reducer';
import loginReducers from '../modules/login/reducer';
import peopleReducers from '../modules/peoplefeed/reducer';
import landingPageReducers from '../modules/landingpage/reducer';
import personaldetailsReducers from '../modules/personal-details/reducer';

const appReducer = combineReducers({
  common: commonReducers,
  dashboard:dashboardReducers,
  login:loginReducers,
  peoplefeed:peopleReducers,
  landingpage:landingPageReducers,
  personaldetails:personaldetailsReducers
});

export const rootReducer = (state: any, action: any) => {
  // when a logout action is dispatched it will reset redux state
  if (action.type === 'USER_LOGGED_OUT') {
    // storage.removeItem('persist:agent');
    state = undefined;
  }

  return appReducer(state, action);
};
