import { eventChannel, END } from "redux-saga";
import { put, take, call, fork } from "redux-saga/effects";
import { actions as commonAction } from "../../common/reducer";

import { actions } from "./reducer";

const AUTH_BASE_URL = process.env.NEXT_PUBLIC_AUTH_BASE_URL;
const adminJwt = process.env.NEXT_PUBLIC_ADMIN;

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

const LIMIT = 20;

export function* getPeoplePageFeed(action: any) {

  const { pageParam,waitingList,searchText } = action.payload;
  
  let url = `${AUTH_BASE_URL}/v1/admin/user-list?limit=${LIMIT}&offset=${pageParam}&waitlist=${waitingList}`;
  if(searchText)
  {
    url = url + "&q=" + searchText;
  }

  yield put(actions.loadingPeopleFeedConnection({ loading: true }));
  try {
    const response: ResponseGenerator = yield call(() =>
      fetch(
        url,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("jwt")} ` },
        }
      )
    );
    if (typeof response !== "undefined") {
      const feed = yield response.json();
      yield put(actions.loadedPeopleFeedResponse({ feed:feed }));
      if (feed.length < LIMIT) {
        yield put(actions.endPeopleReached({ endReached: true }));
      }
    }
  } catch (e) {
    yield put(actions.userPeopleError({}));
    console.error(e);
  }
}

export function* updatePeoplePageFeed(action: any) {
  try {
    const response: ResponseGenerator = yield call(() =>
      fetch(`${AUTH_BASE_URL}/v1/admin/login`, {
        method: "POST",
        body: JSON.stringify({masterPassword: (adminJwt)}),
        headers: {
          Authorization: "Bearer  ",
          "Content-Type": "application/json",
        },
      }).then(response => response.json())
      .then(data => {
    
      
        return fetch(`${AUTH_BASE_URL}/v1/admin/education-employment`, {
          method: "POST",
          body: JSON.stringify(action.payload.result),
          headers: {
            Authorization: `Bearer ${data.accessToken} `,
            "Content-Type": "application/json",
          },
        }).then(response => response.json()).then(data => {
          console.log(data)
        }).catch(err => {
          console.error('Request failed', err)
        })
      })
    )
  }
 catch (e) {
    console.error(e);
  }
}

export function* getUserDetails(action: any) {
  const { id } = action.payload;
  yield put(actions.loadingPeopleFeedConnection({ loading: true }))
  try {
    const response: ResponseGenerator = yield call(() => fetch(`${AUTH_BASE_URL}/v1/user/${id}/profile`,  {
      headers: { 'Authorization': `Bearer ${localStorage.getItem('jwt')} `,}
    }
   
    ))      

    const form = yield response.json();
    yield put(actions.updatePersonDetails({ userDetails:form }))
    
  }
  catch (e) {
    yield put(actions.userPeopleError({}))
    
    console.error(e);
  }
}

export default [
  [actions.getPeoplePageFeed.type, getPeoplePageFeed],
  [actions.updatePeoplePageFeed.type, updatePeoplePageFeed],
  [actions.getUserDetails.type, getUserDetails],
];
