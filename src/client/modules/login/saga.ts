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

export function* adminLogin(action: AnyAction) {
  try {
    const response: ResponseGenerator = yield call(() =>
      fetch(`${AUTH_BASE_URL}/v1/admin/login`, {
        method: "POST",
        body: JSON.stringify(action.payload),
        headers: {
          Authorization: "Bearer  ",
          "Content-Type": "application/json",
        },
      })
    );

    if (response?.status != 200) {
      yield put(commonAction.redirectToLoginPage(true));
      throw "User is not authorized";
    }

    const verfiyUserResponse: VerfiyUserResponse = yield response.json();
    localStorage.setItem("jwt", verfiyUserResponse.accessToken);
    yield put(actions.loadedVerfiedUser({ verfiyUserResponse }));
  } catch (e) {
    console.error(e);
  }
}

export default [[actions.adminLogin.type, adminLogin]];
