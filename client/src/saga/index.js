import {takeLatest} from 'redux-saga/effects';
import actionTypes from '../actions/actionTypes';

function * rootSaga (){
  yield takeLatest(actionTypes.createUserRequest);
}

export default rootSaga;