import { put, call } from "redux-saga/effects";
import { actions } from "./reducer";
import { actions as commonAction } from "client/common/reducer";
import { AnyAction } from "redux";
import { actions as loginAction } from "client/modules/login/reducer";

interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
  json?: any;
}

interface VerfiyUserResponse {
  accessToken: string;
  profileRegistered: boolean;
  signupCompleted: boolean;
}

const AUTH_BASE_URL = process.env.NEXT_PUBLIC_AUTH_BASE_URL;


export function* getAppUserDetails(action: AnyAction) {
  try {
    const response: ResponseGenerator = yield call(() => fetch(`${AUTH_BASE_URL}/api/v1/profile/user`,
    {
      headers: { 'Authorization': `Bearer ${localStorage.getItem('jwt')} `,}
    }
    ))

    if(response?.status == 401)
    {
      yield put( loginAction.updateAccessTokenExpire({accessTokenExpired:true}));
    }

    const userDetails = yield response.json();

    yield put(actions.getUserDetails({ userDetails }))
  

    }
  catch (e) {
    console.error(e);
  }
}

export function* getUpcomingTravellerList(action: AnyAction) {
  try {
    const response: ResponseGenerator = yield call(() => fetch(`${AUTH_BASE_URL}/api/v1/booking/upcoming`,
    {
      headers: { 'Authorization': `Bearer ${localStorage.getItem('jwt')} `,}
    }
    ))

    if(response?.status == 401)
    {
      yield put( loginAction.updateAccessTokenExpire({accessTokenExpired:true}));
    }

    const trips = yield response.json();

    yield put(actions.loadedTrips({ trips }))
  

    }
  catch (e) {
    console.error(e);
  }
}


export function* getCompletedTravellerList(action: AnyAction) {
  try {
    const response: ResponseGenerator = yield call(() => fetch(`${AUTH_BASE_URL}/api/v1/booking/completed`,
    {
      headers: { 'Authorization': `Bearer ${localStorage.getItem('jwt')} `,}
    }
    ))

    if(response?.status == 401)
    {
      yield put( loginAction.updateAccessTokenExpire({accessTokenExpired:true}));
    }

    const userDetails = yield response.json();

    yield put(actions.getUserDetails({ userDetails }))
  

    }
  catch (e) {
    console.error(e);
  }
}
export default [[actions.getAppUserDetails.type, getAppUserDetails],
[actions.getUpcomingTravellerList.type, getUpcomingTravellerList],
 [actions.getCompletedTravellerList.type, getCompletedTravellerList]];
