import {
    ADMIN_GET_USERS,
    ADMIN_USERS,
    ADMIN_USERS_ERROR,
    ADMIN_USER_DELETE,
    ADMIN_USER_DELETED,
    ADMIN_USER_DELETE_ERROR,
    ADMIN_USER_UPDATE,
    ADMIN_USER_UPDATED,
    ADMIN_USER_UPDATE_ERROR,
    ADMIN_USER_CREATE,
    ADMIN_USER_CREATED,
    ADMIN_USER_CREATE_ERROR,
    ADMIN_GET_CARDS,
    ADMIN_CARDS,
    ADMIN_CARDS_ERROR,
    ADMIN_CARD_UPDATE,
    ADMIN_CARD_UPDATED,
    ADMIN_CARD_UPDATE_ERROR
} from '../actions/actionType'

const initialState = {
    users: [],
    isFetching: false,
    error: null,
    cards: [],
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
            const {payload: {newUsers}} = action;
            return {
                ...state,
                isFetching: false,
                users: [...users, ...newUsers]
            }
        }
        case ADMIN_USERS_ERROR: {
            const {payload: {error}} = action;
            return {
                ...state,
                isFetching: false,
                error
            }
        }
        case ADMIN_USER_UPDATE: {
            return {
                ...state,
                isFetching: true
            }
        }
        case ADMIN_USER_UPDATED: {
            const {users} = state;
            const {payload: {data: updatedUser}} = action;
            const updatedUsers = users.map(u => u.id === updatedUser.id ? updatedUser : u);
            return {
                ...state,
                isFetching: false,
                users: [...updatedUsers]
            }
        }

        case ADMIN_USER_UPDATE_ERROR: {
            const {payload: {error}} = action
            return {
                ...state,
                isFetching: false,
                error
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
            const {
                payload:
                    {
                        data: {
                            data: {deletedId}
                        }
                    }
            } = action
            const newUsersArr = users.filter(u => u.id !== deletedId);
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
        case ADMIN_USER_CREATE : {
            return {
                ...state,
                isFetching: true,
            }
        }
        case ADMIN_USER_CREATED : {
            const {users} = state;
            const {payload: {data: newUser}} = action;
            return {
                ...state,
                isFetching: false,
                users: users.unshift(newUser)
            }
        }
        case ADMIN_USER_CREATE_ERROR: {
            const {payload: {error}} = action;
            return {
                ...state,
                isFetching: false,
                error
            }
        }
        case ADMIN_GET_CARDS: {
            return {
                ...state,
                isFetching: true
            }
        }
        case ADMIN_CARDS: {
            const {cards} = state;
            const {payload: {data: newCards}} = action;
            return {
                ...state,
                isFetching: false,
                cards: [...cards, ...newCards]
            }
        }
        case ADMIN_CARDS_ERROR: {
            const {payload: {error}} = action;
            return {
                ...state,
                isFetching: false,
                error
            }
        }
        case ADMIN_CARD_UPDATE: {
            return {
                ...state,
                isFetching: true,
            }
        }
        case ADMIN_CARD_UPDATED: {
            const {cards} = state;
            const {payload: {data: updatedCard}} = action;
            const updatedCards = cards.map(c => c.id === updatedCard.id ? updatedCard : c);
            return {
                ...state,
                isFetching: false,
                cards: [...updatedCards]
            }
        }
        case ADMIN_CARD_UPDATE_ERROR: {
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



