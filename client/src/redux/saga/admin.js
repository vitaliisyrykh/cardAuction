import {put} from "@redux-saga/core/effects";
import {
    adminUsers,
    adminUsersError,
    adminUserDeleted,
    adminUserDeleteError
} from "../actions/creatorAdminActions";
import {
    adminGetUsers,
    adminDeleteUser,
} from '../../api/adminApi';

export function* adminGetUsersSaga(action) {
    const {payload: {data: {id}}} = action;
    try {
        const {data: {data: users}} = yield adminGetUsers(id);
        yield put(adminUsers(users));
    } catch (error) {
        yield put(adminUsersError(error));
    }
}

export function* adminDeleteUserSaga(action) {
    const {payload: {data}} = action
    try {
        const {payload:{data:isDeleted}} = yield adminDeleteUser(data)
        console.log(isDeleted,'saga')
        yield put(adminUserDeleted(isDeleted))
    } catch (error) {
        yield put(adminUserDeleteError(error))
    }
}