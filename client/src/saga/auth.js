import {put} from "@redux-saga/core/effects";
import * as creatorActions from "../actions/creatorAction";
import {auth} from "../api/index";

function createAuthSaga(method) {
    return function * (action) {
        const {payload: {data}} = action;
        try {
            const {data: user} = yield method(data);
            yield put(creatorActions.signInSuccess(user));
        } catch (error) {
            yield put(creatorActions.signInError(error))
        }
    }
}

export const signUpSaga = createAuthSaga(auth.signUp);
export const signInsaga = createAuthSaga(auth.signIn);


