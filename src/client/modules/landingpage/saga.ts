import { put, call } from "redux-saga/effects";
import { actions } from "./reducer";
import { actions as commonAction } from "client/common/reducer";
import { AnyAction } from "redux";


interface ResponseGenerator{
  config?:any;
  data?:any;
  headers?:any
  request?:any;
  status?:number;
  statusText?:string;
  json?:any;
}

const AUTH_BASE_URL = process.env.NEXT_PUBLIC_AUTH_BASE_URL;

  export function* addemail(action: AnyAction) {
   
    try {
      const response: ResponseGenerator = yield call(() => fetch(`${AUTH_BASE_URL}/v1/waitlist-email`, {
        method: 'POST',
        body: JSON.stringify(action.payload),
        headers: { 'Authorization': 'Bearer  ',
                "Content-Type": "application/json",},
      }))

      if(response?.status != 200)
      {
        yield put(commonAction.redirectToLoginPage(true));
        throw("User is not authorized");
      }

      if(response?.status == 200)
      {
      yield put(actions.emailadded({  }))
      }
     
    }
    catch (e) {
     
      console.error(e);
    }
  }

export default [
  [actions.addemail.type, addemail],
];
