import {takeLatest} from 'redux-saga/effects';
import actionTypes from '../actions/actionType';
import {signUpSaga,signInSaga} from "./auth";
const{signUpRequest, signInRequest} = actionTypes


function * rootSaga (){
    yield takeLatest(signUpRequest , signUpSaga);
    yield takeLatest(signInRequest, signInSaga);
}

export default rootSaga;