import {
    SIGN_UP_REGISTRATION,
    SIGN_UP_CREATED_USER,
    SIGN_UP_ERROR,
    SIGN_IN_LOGIN,
    SIGN_IN_USER,
    SIGN_IN_ERROR
} from "./actionType";



export const signUpRegistration = (data) => ({
    type: SIGN_UP_REGISTRATION,
    payload: { data },
});

export const signUpCreatedUser = (data) => ({
    type: SIGN_UP_CREATED_USER,
    payload: { data },
})

export const signUpError = (error) => ({
    type: SIGN_UP_ERROR,
    payload: { error },
});

export const signInLogin = data => ({
    type: SIGN_IN_LOGIN,
    payload:{data}
});

export const signInUser = data => ({
    type: SIGN_IN_USER,
    payload:{data}
});

export const signInError = error => ({
    type: SIGN_IN_ERROR,
    payload:{error}
});

