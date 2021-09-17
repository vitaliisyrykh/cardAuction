import {
    ADMIN_GET_USERS,
    ADMIN_USERS,
    ADMIN_USERS_ERROR,
    ADMIN_USER_DELETE,
    ADMIN_USER_DELETED,
    ADMIN_USER_DELETE_ERROR,
} from '../actions/actionType'

const initialState = {
    users: [],
    isFetching: false,
    error: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ADMIN_GET_USERS: {
            return {
                ...state,
                isFetching: true
            }
        }
        case ADMIN_USERS: {
            const {payload: {newUsers}} = action;
            return {
                ...state,
                isFetching: false,
                users: [ ...newUsers]
            }
        }
        case ADMIN_USERS_ERROR: {
            const {payload} = action;
            return {
                ...state,
                isFetching: false,
                error: payload
            }
        }
        case ADMIN_USER_DELETE: {
            return {
                ...state,
                isFetching: true
            }
        }

        case ADMIN_USER_DELETED: {
            const {users} = state;
            console.log(action);
            const id = null
            const newUsersArr = users.filter(u => u.id !== id);
            return {
                ...state,
                isFetching: false,
                users: [...newUsersArr]
            }
        }
        case ADMIN_USER_DELETE_ERROR: {
            const {payload: {error}} = action;
            return {
                ...state,
                isFetching: false,
                error
            }
        }
        default:
            return state;
    }

}



