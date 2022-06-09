import { call, put, take, takeLatest } from "redux-saga/effects";

import { api } from "../models/requests";
import { INIT_INITIALIZE } from "../state/actions";
import { setStories } from "../state/reducers/topstories";

export function* watcherSaga() {
  yield take(INIT_INITIALIZE);
  yield call(handleInitialize);
}

export function* handleInitialize(): any {
  try {
    const response = yield call(api.getTopStories);
    yield put(setStories(response));
  } catch (error) {
    console.log("Error ", error);
  }
}
