import actionTypes from '../actions/actionType';

const initialState = {
    isFetching: false,
    error: null,
    user: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case actionTypes.signUpRequest: {
            return {
                ...state,
                isFetching: true,
            };
        }
        case actionTypes.signUpSuccess: {
            const {payload: {data}} = action;
            return {
                ...state,
                isFetching: false,
                users: data
            }
        }
        case actionTypes.signUpError: {
            const {payload: {error}} = action;
            return {
                ...state,
                isFetching: false,
                error
            }
        }
        case actionTypes.signInRequest: {
            return {
                ...state,
                isFetching: true,
            }
        }
        case actionTypes.signInSuccess: {
            const {payload: {data: {data: userData}}} = action;
            return {
                ...state,
                isFetching: false,
                user: userData
            }
        }
        default:
            return state;
    }
}