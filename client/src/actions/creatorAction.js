import actionTypes from "./actionType";


export const signUpRegistration = (data) => ({
  type: actionTypes.SIGN_UP_REGISTRATION,
  payload: { data },
});

export const signUpSaved = (data) => ({
  type: actionTypes.SIGN_UP_SAVED,
  payload: { data },
})

export const signUpError = (error) => ({
  type: actionTypes.SIGN_UP_ERROR,
  payload: { error },
});

export const signInLogin = data => ({
  type: actionTypes.SIGN_IN_LOGIN,
  payload:{data}
});

export const signInLoginedUser = data => ({
  type:actionTypes.SIGN_IN_LOGINED_USER,
  payload:{data}
});

export const signInError = error => ({
  type: actionTypes.SIGN_IN_ERROR,
  payload:{error}
});

