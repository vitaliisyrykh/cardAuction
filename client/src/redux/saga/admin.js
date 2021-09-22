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
    adminCards,
    adminCardError,
    adminCardUpdated,
    adminCardUpdateError,
} from "../actions/creatorAdminActions";
import {
    adminGetUsers,
    adminDeleteUser,
    adminUpdateUser,
    adminUserCreate,
    adminGetCards,
    adminUpdateCard,
} from '../../api/adminApi';

export function* adminGetUsersSaga(action) {
    const {payload: {data: {id}}} = action;
    try {
        const {data: {data: users}} = yield adminGetUsers(id);
        console.log(users, "Saga")
        yield put(adminUsers(users));
    } catch (error) {
        yield put(adminUsersError(error));
    }
}

export function* adminDeleteUserSaga(action) {
    const {payload: {data}} = action
    try {
        const {data: {data: deletedUserId}} = yield adminDeleteUser(data);
        yield put(adminUserDeleted(deletedUserId));
    } catch (error) {
        yield put(adminUserDeleteError(error));
    }
}

export function* adminUpdateUserSaga(action) {
    const {payload: {data}} = action;
    try {
        const {data: {data: updatedUser}} = yield adminUpdateUser(data);
        yield put(adminUserUpdated(updatedUser));
    } catch (error) {
        yield put(adminUserUpdateError(error));
    }
}

export function* adminUserCreateSaga(action) {
    const {payload: {data}} = action;
    try {
        const {data: {data: newUser}} = yield adminUserCreate(data);
        yield put(adminUserCreated(newUser));
    } catch (error) {
        yield put(adminUserCreateError(error));
    }
}

export function* adminGetCardsSaga(action) {
    const {payload: {data}} = action;
    try {
        const {data: {data: cards}} = yield adminGetCards(data);
        yield put(adminCards(cards));
    } catch (error) {
        yield put(adminCardError(error));
    }
}

export function* adminUpdateCardSaga(action) {
    const {payload: {data}} = action;
    try {
        const {data: {data: updatedCard}} = yield adminUpdateCard(data);
        yield put(adminCardUpdated(updatedCard));
    } catch (error) {
        yield put(adminCardUpdateError(error))
    }
}