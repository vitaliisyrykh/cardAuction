import actionTypes from "./actionType";


export const signUpRequest = (data) => ({
  type: actionTypes.signUpRequest,
  payload: { data },
});

export const signUpSuccess = (data) => ({
  type: actionTypes.signUpSuccess,
  payload: { data },
})

export const signUpError = (error) => ({
  type: actionTypes.signUpError,
  payload: { error },
});

export const signInRequest = data => ({
  type: actionTypes.signInRequest,
  payload:{data}
});

export const signInSuccess = data => ({
  type:actionTypes.signInSuccess,
  payload:{data}
});

export const signInError = error => ({
  type: actionTypes.signInError,
  payload:{error}
});

