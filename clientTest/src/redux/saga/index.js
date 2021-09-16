import {takeLatest} from 'redux-saga/effects';
import actionTypes from '../actions/actionType';
import {signUpSaga,signInSaga} from "./auth";
const{SIGN_UP_REGISTRATION, SIGN_IN_LOGIN} = actionTypes


function * rootSaga (){
    yield takeLatest(SIGN_UP_REGISTRATION , signUpSaga);
    yield takeLatest(SIGN_IN_LOGIN, signInSaga);
}

export default rootSaga;