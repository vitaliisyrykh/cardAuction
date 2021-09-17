import {put} from "@redux-saga/core/effects";
import {
    adminUsers,
    adminUsersError
} from '../actions/createAdminActions';
import {adminGetUsers} from '../../api/adminApi';

export function* adminGetUsersSaga(action) {
    console.log(action)
    const {payload: {data: {id}}} = action;
    try {
        const {data: {data: users}} = yield adminGetUsers(id);
        console.log(users, 'saga')
        console.log(adminUsers(users), '<------------------------')
        yield put(adminUsers(users));
    } catch (error) {
        yield put(adminUsersError(error));
    }
}