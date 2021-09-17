import {put} from "@redux-saga/core/effects";
import {
    signUpCreatedUser,
    signUpError,
    signInUser,
    signInError
} from "../actions/creatorAuthAction.js";
import {auth} from "../../api";


   export function * signUpSaga (action) {
        const {payload: {data}} = action;
        try {
            const {data: user} = yield auth.signUp(data);
            yield put(signUpCreatedUser(user));
        } catch (error) {
            yield put(signUpError(error))
        }
    }


export function * signInSaga(action){
    const {payload:{data}}=action
    try{
        const{data:user}=yield auth.signIn(data)
        yield put(signInUser(user))
    }catch (error) {
        yield put(signInError(error))
    }
}




