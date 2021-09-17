import {takeLatest} from 'redux-saga/effects';
import {
    SIGN_UP_REGISTRATION,
    SIGN_IN_LOGIN,
    ADMIN_GET_USERS,
} from '../actions/actionType';
import {signUpSaga,signInSaga} from './auth';
import {adminGetUsersSaga} from './admin';



function * rootSaga (){
    yield takeLatest(SIGN_UP_REGISTRATION , signUpSaga);
    yield takeLatest(SIGN_IN_LOGIN, signInSaga);
    yield takeLatest(ADMIN_GET_USERS, adminGetUsersSaga);
}

export default rootSaga;