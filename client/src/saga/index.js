import {takeLatest} from 'redux-saga/effects';
import actionTypes from '../actions/actionType';
import {signUp,signIn} from "./auth";
const{signUpRequest, signInRequest} = actionTypes


function * rootSaga (){
  yield takeLatest(signUpRequest , signUp);
  yield takeLatest(signInRequest, signIn)
}

export default rootSaga;