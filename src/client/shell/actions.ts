declare global {
  interface Window {
    dropform: any;
    walletAddress: string[]
  }
}
import { AnyAction, bindActionCreators, Dispatch } from "redux";
import {actions} from '../common/reducer';

import {actions as loginactions} from '../modules/login/reducer';
import {actions as dashboardactions} from '../modules/dashboard/reducer';
import {actions as peopleactions} from '../modules/peoplefeed/reducer';
import {actions as landingpageactions} from '../modules/landingpage/reducer';
import {actions as personaldetailsactions} from '../modules/personal-details/reducer';

import store  from "./store";

export function setup (dispatch: Dispatch<AnyAction>) {
  const allActions = {
   
    ...loginactions,
    ...dashboardactions,
    ...peopleactions,
    ...landingpageactions,
    ...personaldetailsactions,
    ...actions
  };

  let finalActionList = bindActionCreators(allActions, dispatch);

  if (typeof window !== 'undefined') {
    window.dropform = {};
    window.dropform.actions = finalActionList;
  }

  return finalActionList
}

let actionList = setup(store.dispatch);
export default actionList;