import { put, call } from "redux-saga/effects";
import { actions } from "./reducer";
import { actions as commonAction } from "client/common/reducer";
import { AnyAction } from "redux";

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

export function* updateAccessToken(action: AnyAction) {
  try {
    const response: ResponseGenerator = yield call(() =>
      fetch(`https://securetoken.googleapis.com/v1/token?key=AIzaSyDAgQrLzbycjidcz1uCc5xn4b1CXTmhE-U`, {
        method: "POST",
        body: JSON.stringify(action.payload),
        headers: {
          Authorization: "Bearer  ",
          "Content-Type": "application/json",
        },
      })
    );

    yield put(actions.updateAccessTokenExpire({accessTokenExpired:false}));
    if (response?.status != 200) {
      yield put(commonAction.redirectToLoginPage(true));
      throw "User is not authorized";
    }

    else
    {
      const tokenRes = yield response.json();
      localStorage.setItem("jwt", tokenRes?.access_token);
      localStorage.setItem("refreshJwt", tokenRes?.refresh_token);
      yield put(actions.reloadPage({reloadPage:true}));
    }
  } catch (e) {
    console.error(e);
  }
}

export function* createProfile(action: AnyAction) {
  try {

    const response2: ResponseGenerator = yield call(() => fetch("https://bold-club.el.r.appspot.com/api/v1/profile/user",
    {
      headers: { 'Authorization': `Bearer ${localStorage.getItem("jwt")}`,}
    }
    ))

    console.log(response2);

    const response: ResponseGenerator = yield call(() =>
      fetch(AUTH_BASE_URL+`/api/v1/profile/user`, {
        method: "POST",
        body: JSON.stringify(action.payload),
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt")} `,
          "Content-Type": "application/json",
          
        },
      })
    );

   // yield put(actions.updateAccessTokenExpire({accessTokenExpired:false}));
    if (response?.status != 200) {
      yield put(commonAction.redirectToLoginPage(true));
      throw "User is not authorized";
    }

  } catch (e) {
    console.error(e);
  }
}

export default [[actions.updateAccessToken.type, updateAccessToken],[actions.createProfile.type, createProfile]]
