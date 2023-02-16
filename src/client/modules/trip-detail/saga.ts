import { put, call } from "redux-saga/effects";
import { actions } from "./reducer";
import { actions as commonAction } from "client/common/reducer";
import { AnyAction } from "redux";

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

export function* getTripDetails(action: AnyAction) {
  try {
    const response: ResponseGenerator = yield call(() => fetch(`${AUTH_BASE_URL}/api/v1/trip/${action.payload.tripdetail}`,
    {
      headers: { 'Authorization': `Bearer ${localStorage.getItem('jwt')} `,}
    }
    ))

    const tripDetails = yield response.json();

    yield put(actions.loadedTripDetails({ tripDetails }))
  

    }
  catch (e) {
    console.error(e);
  }
}

export function* getTripReviews(action: AnyAction) {
  try {
    const response: ResponseGenerator = yield call(() => fetch(`${AUTH_BASE_URL}/api/v1/host/${action.payload.tripdetail}`,
    {
      headers: { 'Authorization': `Bearer ${localStorage.getItem('jwt')} `,}
    }
    ))

    const tripReviews = yield response.json();

    yield put(actions.loadedTripReviews({ tripReviews }))
  

    }
  catch (e) {
    console.error(e);
  }
}


export default [[actions.getTripDetails.type, getTripDetails],[actions.getTripReviews.type, getTripReviews]]
