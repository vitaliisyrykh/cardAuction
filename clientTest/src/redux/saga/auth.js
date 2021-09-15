import {put} from "@redux-saga/core/effects";
import * as creatorActions from "../actions/creatorAction";
import {auth} from "../../api";


export  function * signUpSaga(action) {
    const {payload: {data}} = action;
    try {
        const {data: user} = yield auth.signUp(data);
        yield put(creatorActions.signUpRegistration(user));
    } catch (error) {
        yield put(creatorActions.signUpError(error))
    }
}
export  function * signInSaga (action) {
    const {payload: {data}} = action;
    try {
        const {data: user} = yield auth.signIn(data);
        yield put(creatorActions.signInLoginedUser(user));
    } catch (error) {
        yield put(creatorActions.signInError(error))
    }
}






