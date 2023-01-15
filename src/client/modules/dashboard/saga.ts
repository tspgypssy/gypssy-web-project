import { put, call } from "redux-saga/effects";
import { actions } from "./reducer";
import { actions as commonAction } from "client/common/reducer";
import { AnyAction } from "redux";
import download from "downloadjs";

const COMMUNITY_BASE_URL = process.env.NEXT_PUBLIC_COMMUNITY_BASE_URL;

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

export function* loadUsers(action: AnyAction) {
  try {
    const response: ResponseGenerator = yield call(() =>
      fetch(`https://dummyjson.com/users`)
    );
    const usersList = yield response.json();
    yield put(actions.reloadResult({ reload: usersList }));
  } catch (e) {
    console.error(e);
  }
}
let dataExpTemp = [];
export function* loadLinkedinUrls() {
  try {
    const response: ResponseGenerator = yield call(() =>
      fetch(`${AUTH_BASE_URL}/v1/admin/linkedin-update-list`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt")} `,
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          dataExpTemp.push("linkedinUrl");

          for (let i = 0; i < data.length; i++) {
            dataExpTemp.push(data[i]?.linkedinProfileLink);
          }
          if (dataExpTemp) {
            download(
              dataExpTemp,
              new Date().toLocaleDateString() + "-data.csv"
            );
          } else {
            alert("Data not found");
          }
        })
    );
  } catch (e) {
    console.error(e);
  }
}
const LIMIT = 20;
export function* updateStatus(action: AnyAction) {
  try {
    const { id } = action.payload;
    const { status } = action.payload;
    const response: ResponseGenerator = yield call(() =>
      fetch(`${AUTH_BASE_URL}/v1/admin/user/${id}/toggle-status`, {
        method: "PUT",
        body: JSON.stringify({ status: status }),
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt")} `,
          "Content-Type": "application/json",
        },
      })
    );
    yield put(actions.reloadResult({ reload: true }));
    const verfiyUserResponse: VerfiyUserResponse = yield response.json();
  } catch (e) {
    console.error(e);
  }
}

export default [
  [actions.loadUsers.type, loadUsers],
  [actions.updateStatus.type, updateStatus],
  [actions.loadLinkedinUrls.type, loadLinkedinUrls],
];
