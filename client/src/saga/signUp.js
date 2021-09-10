import { put } from "@redux-saga/core/effects";
import * as creatorActions from "../actions/creatorAction";
import * as API from "../api/index";

export function* signUp(action) {
  try {
    const {
      payload: { data },
    } = yield API.signUp(action.data);
    yield put(creatorActions.signUpSuccess(data));
  } catch (error) {
    yield put(creatorActions.signUpError(error));
  }
}
