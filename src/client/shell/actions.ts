declare global {
  interface Window {
    dropform: any;
    walletAddress: string[]
  }
}
import { AnyAction, bindActionCreators, Dispatch } from "redux";
import {actions} from '../common/reducer';

import {actions as loginactions} from '../modules/login/reducer';
import {actions as useractions} from '../modules/user/reducer';
import {actions as landingpageactions} from '../modules/landingpage/reducer';

import store  from "./store";

export function setup (dispatch: Dispatch<AnyAction>) {
  const allActions = {
   
    ...loginactions,
    ...useractions,
    ...landingpageactions,
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