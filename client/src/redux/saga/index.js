import {takeLatest} from 'redux-saga/effects';
import {
    SIGN_UP_REGISTRATION,
    SIGN_IN_LOGIN,

} from '../actions/actionType';
import {signUpSaga,signInSaga} from './auth';




function * rootSaga (){
    yield takeLatest(SIGN_UP_REGISTRATION , signUpSaga);
    yield takeLatest(SIGN_IN_LOGIN, signInSaga);
}

export default rootSaga;