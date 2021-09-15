import actionTypes from '../actions/actionType';

const initialState = {
    isFetching: false,
    error: null,
    user: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case actionTypes.SIGN_UP_REGISTRATION: {
            return {
                ...state,
                isFetching: true,
            };
        }
        case actionTypes.SIGN_UP_CREATED_USER: {
            const {payload: {data}} = action;
            return {
                ...state,
                isFetching: false,
                users: data
            }
        }
        case actionTypes.SIGN_UP_ERROR: {
            const {payload: {error}} = action;
            return {
                ...state,
                isFetching: false,
                error
            }
        }
        case actionTypes.SIGN_IN_LOGIN: {
            return {
                ...state,
                isFetching: true,
            }
        }
        case actionTypes.SIGN_IN_USER: {
            const {payload: {data: {data: userData}}} = action;
            return {
                ...state,
                isFetching: false,
                user: userData
            }
        }
        case actionTypes.SIGN_IN_ERROR:{
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