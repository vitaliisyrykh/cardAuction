import {put} from "@redux-saga/core/effects";
import {
    adminUsers,
    adminUsersError,
    adminUserDeleted,
    adminUserDeleteError,
    adminUserUpdated,
    adminUserUpdateError,
    adminUserCreated,
    adminUserCreateError,
} from "../actions/creatorAdminActions";
import {
    adminGetUsers,
    adminDeleteUser,
    adminUpdateUser,
    adminUserCreate,
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
        const  {data:{data:deletedUserId}} = yield adminDeleteUser(data)
        yield put(adminUserDeleted(deletedUserId))
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

export function * adminUserCreateSaga (action){
    const {payload:{data}} = action;
    try {
        const {data:{data:newUser}} = yield adminUserCreate(data);
        yield put(adminUserCreated(newUser));
    }catch (error) {
        yield put(adminUserCreateError(error))
    }
};