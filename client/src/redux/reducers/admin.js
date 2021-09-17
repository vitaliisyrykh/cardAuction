import {
    ADMIN_GET_USERS,
    ADMIN_USERS,
    ADMIN_USERS_ERROR
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
            const {users} = state;
            const {payload: {data: {data: newUsers}}} = action;
            console.log(action,"<<<<<<<<<<<<<<<<<<<<<")
            return {
                ...state,
                isFetching: false,
                users: [...users, ...newUsers]
            }
        }
        case ADMIN_USERS_ERROR:{
            const{payload}=action;
            console.log(payload)
            return {
                ...state,
                isFetching: false,
                error:payload
            }
        }
        default:
            return state;
    }

}