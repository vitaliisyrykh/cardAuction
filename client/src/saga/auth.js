import {put} from "@redux-saga/core/effects";
import * as creatorActions from "../actions/creatorAction";
import * as API from "../api/index";

export function* signUp(action) {
    const {payload: {data}} = action
    try {
        const {data: newUser} = yield API.signUp(data);
        yield put(creatorActions.signUpSuccess(newUser));
    } catch (error) {
        yield put(creatorActions.signUpError(error));
    }
};

export function* signIn(action) {
    const {payload: {data}} = action;
    try {
        const {data: user} = yield API.signIn(data);
        yield put(creatorActions.signInSuccess(user));
    } catch (error) {
        yield put(creatorActions.signInError(error))
    }
};
