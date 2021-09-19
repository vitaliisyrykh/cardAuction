import {put} from "@redux-saga/core/effects";
import {
    adminUsers,
    adminUsersError,
    adminUserDeleted,
    adminUserDeleteError,
    adminUserUpdated,
    adminUserUpdateError,
} from "../actions/creatorAdminActions";
import {
    adminGetUsers,
    adminDeleteUser,
    adminUpdateUser
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
        const  newData = yield adminDeleteUser(data)
        yield put(adminUserDeleted(newData.data))
    } catch (error) {
        yield put(adminUserDeleteError(error))
    }
}

export function * adminUpdateUserSaga (action){
    const {payload:{data}} = action;
    try{
        const {data:{data:updatedUser}} = yield adminUpdateUser(data);
        yield put(adminUserUpdated(updatedUser))
    }catch (error) {
        yield put(adminUserUpdateError(error))
    }
}