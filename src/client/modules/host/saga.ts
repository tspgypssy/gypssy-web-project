import { put, call } from "redux-saga/effects";
import { actions } from "./reducer";
import { actions as commonAction } from "client/common/reducer";
import { AnyAction } from "redux";
import { actions as loginAction } from "client/modules/login/reducer";

interface ResponseGenerator {
  config?:any;
  data?:any;
  headers?:any
  request?:any;
  status?:number;
  statusText?:string;
  json?:any;
}

interface VerfiyUserResponse {
  accessToken: string;
  profileRegistered: boolean;
  signupCompleted: boolean;
}

const AUTH_BASE_URL = process.env.NEXT_PUBLIC_AUTH_BASE_URL;

export function* getHostDetails(action: AnyAction) {
  try {
    const response: ResponseGenerator = yield call(() => fetch(`${AUTH_BASE_URL}/api/v1/host/${action.payload.name}`,
    {
      headers: { 'Authorization': `Bearer ${localStorage.getItem('jwt')} `,}
    }
    ))

    if(response?.status == 401)
    {
      yield put( loginAction.updateAccessTokenExpire({accessTokenExpired:true}));
    }

    const hostDetails = yield response.json();

    yield put(actions.loadedHostDetails({ hostDetails }))
  

    }
  catch (e) {
    console.error(e);
  }
}

export function* getUpcomingTrips(action: AnyAction) {
  try {
    const response: ResponseGenerator = yield call(() => fetch(`${AUTH_BASE_URL}/api/v1/trip/upcoming/host/${action.payload.name}`,
    {
      headers: { 'Authorization': `Bearer ${localStorage.getItem('jwt')} `,}
    }
    ))

    if(response?.status == 401)
    {
      yield put( loginAction.updateAccessTokenExpire({accessTokenExpired:true}));
    }
    const hostTrips = yield response.json();

    yield put(actions.loadedUpcomingHostTrips({ hostTrips }))
  

    }
  catch (e) {
    console.error(e);
  }
}

export function* getCompletedTrips(action: AnyAction) {
  try {
    const response: ResponseGenerator = yield call(() => fetch(`${AUTH_BASE_URL}/api/v1/trip/completed/host/${action.payload.name}`,
    {
      headers: { 'Authorization': `Bearer ${localStorage.getItem('jwt')} `,}
    }
    ))

    if(response?.status == 401)
    {
      yield put( loginAction.updateAccessTokenExpire({accessTokenExpired:true}));
    }
    const hostTrips = yield response.json();

    yield put(actions.loadedUpcomingHostTrips({ hostTrips }))
  

    }
  catch (e) {
    console.error(e);
  }
}

export function* getHostReviews(action: AnyAction) {
  try {
    const response: ResponseGenerator = yield call(() => fetch(`${AUTH_BASE_URL}/api/v1/review/host/${action.payload.name}`,
    {
      headers: { 'Authorization': `Bearer ${localStorage.getItem('jwt')} `,}
    }
    ))

    if(response?.status == 401)
    {
      yield put( loginAction.updateAccessTokenExpire({accessTokenExpired:true}));
    }
    
    const hostReviews = yield response.json();

    yield put(actions.loadedHostReviews({ hostReviews }))
  

    }
  catch (e) {
    console.error(e);
  }
}



export default [[actions.getHostDetails.type, getHostDetails],[actions.getUpcomingTrips.type, getUpcomingTrips],
    [actions.getHostReviews.type, getHostReviews],[actions.getCompletedTrips.type, getCompletedTrips]]
