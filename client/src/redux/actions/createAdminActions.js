import {
    ADMIN_GET_USERS,
    ADMIN_USERS,
    ADMIN_USERS_ERROR
} from './actionType';

export const adminGetUsers = data => ({
    type: ADMIN_GET_USERS,
    payload: {data}
});

export const adminUsers = users => ({
    type: ADMIN_USERS,
    payload: {users}
});

export const adminUsersError = error => ({
    type: ADMIN_USERS_ERROR,
    payload:{error}
});