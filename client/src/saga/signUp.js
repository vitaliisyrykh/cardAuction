import {put} from "@redux-saga/core/effects";
import * as creatorActions from "../actions/creatorAction";
import * as API from "../api/index";

export function* signUp(action) {
    const {payload: {data}} = action
    try {
        const {
            payload: {data: newData},
        } = yield API.signUp(data);
        yield put(creatorActions.signUpSuccess(newData));
    } catch (error) {
        yield put(creatorActions.signUpError(error));
    }
}
