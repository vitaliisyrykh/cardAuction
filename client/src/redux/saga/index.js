import {takeLatest} from 'redux-saga/effects';
import {
    SIGN_UP_REGISTRATION,
    SIGN_IN_LOGIN,
    ADMIN_GET_USERS,
    ADMIN_USER_DELETE,
    ADMIN_USER_UPDATE,
    ADMIN_GET_CARDS,
    ADMIN_CARD_UPDATE,
} from '../actions/actionType';
import {signUpSaga, signInSaga} from './auth';
import {
    adminGetUsersSaga,
    adminDeleteUserSaga,
    adminUpdateUserSaga,
    adminGetCardsSaga,
    adminUpdateCardSaga
} from './admin';


function* rootSaga() {
    yield takeLatest(SIGN_UP_REGISTRATION, signUpSaga);
    yield takeLatest(SIGN_IN_LOGIN, signInSaga);
    yield takeLatest(ADMIN_GET_USERS, adminGetUsersSaga);
    yield takeLatest(ADMIN_USER_DELETE, adminDeleteUserSaga);
    yield takeLatest(ADMIN_USER_UPDATE, adminUpdateUserSaga);
    yield takeLatest(ADMIN_GET_CARDS, adminGetCardsSaga);
    yield takeLatest(ADMIN_CARD_UPDATE, adminUpdateCardSaga);
}

export default rootSaga;