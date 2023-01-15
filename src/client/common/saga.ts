
import { put,call } from "redux-saga/effects";

const AUTH_BASE_URL = process.env.NEXT_PUBLIC_AUTH_BASE_URL;

import { actions } from "./reducer";

export function* resetAllState(action: any) {
  
  
  }
  
export default [
    [actions.resetAllState.type, resetAllState],
];
