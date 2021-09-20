import {
    ADMIN_GET_USERS,
    ADMIN_USERS,
    ADMIN_USERS_ERROR,
    ADMIN_USER_DELETE,
    ADMIN_USER_DELETED,
    ADMIN_USER_DELETE_ERROR,
    ADMIN_USER_UPDATE,
    ADMIN_USER_UPDATE_ERROR,
    ADMIN_USER_UPDATED,
    ADMIN_USER_CREATE,
    ADMIN_USER_CREATED,
    ADMIN_USER_CREATE_ERROR
} from './actionType';

export const adminGetUsers = data => ({
    type: ADMIN_GET_USERS,
    payload: {data}
});

export const adminUsers = newUsers => ({
    type: ADMIN_USERS,
    payload: {newUsers}
});

export const adminUsersError = error => ({
    type: ADMIN_USERS_ERROR,
    payload: {error}
});

export const adminUserDelete = data => ({
    type: ADMIN_USER_DELETE,
    payload: {data}
});
export const adminUserDeleted = data => ({
    type: ADMIN_USER_DELETED,
    payload: {data}
});

export const adminUserDeleteError = error => ({
    type: ADMIN_USER_DELETE_ERROR,
    payload: {error}
});

export const adminUserUpdate = data => ({
    type: ADMIN_USER_UPDATE,
    payload: {data}
});

export const adminUserUpdated = data => ({
    type: ADMIN_USER_UPDATED,
    payload: {data}
});

export const adminUserUpdateError = error => ({
    type: ADMIN_USER_UPDATE_ERROR,
    payload: {error}
});

export const adminUserCreate = data => ({
    type: ADMIN_USER_CREATE,
    payload: {data}
});

export const adminUserCreated = data => ({
    type: ADMIN_USER_CREATED,
    payload: {data}
});

export const adminUserCreateError = error => ({
    type: ADMIN_USER_CREATE_ERROR,
    payload: {error}
})