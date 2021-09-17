import {
    SIGN_UP_REGISTRATION,
    SIGN_UP_CREATED_USER,
    SIGN_UP_ERROR,
    SIGN_IN_LOGIN,
    SIGN_IN_USER,
    SIGN_IN_ERROR
} from '../actions/actionType';

const initialState = {
    isFetching: false,
    error: null,
    user: {role:"admin",id:36}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SIGN_UP_REGISTRATION: {
            return {
                ...state,
                isFetching: true,
            };
        }
        case SIGN_UP_CREATED_USER: {
            const {payload: {data}} = action;
            return {
                ...state,
                isFetching: false,
                users: data
            }
        }
        case SIGN_UP_ERROR: {
            const {payload: {error}} = action;
            return {
                ...state,
                isFetching: false,
                error
            }
        }
        case SIGN_IN_LOGIN: {
            return {
                ...state,
                isFetching: true,
            }
        }
        case SIGN_IN_USER: {
            const {payload: {data: {data: userData}}} = action;
            return {
                ...state,
                isFetching: false,
                user: userData
            }
        }
        case SIGN_IN_ERROR:{
            const {payload:{error}}=action;
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