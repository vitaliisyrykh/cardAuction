import {takeLatest} from 'redux-saga/effects';
import actionTypes from '../actions/actionTypes';
import {signUp} from "./signUp";
const{signUpRequest} = actionTypes
console.log(signUpRequest,"rootsga")

function * rootSaga (){
  yield takeLatest(signUpRequest , signUp);
}

export default rootSaga;