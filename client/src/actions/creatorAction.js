import actionTypes from "./actionTypes";

export const signUpRequest = (data) => ({
  type: actionTypes.createUserRequest,
  payload: { data },
});

export const signUpSuccess = (data) => ({
  type: actionTypes.createUserSuccess,
  payload: { data },
});

export const signUpError = (error) => ({
  type: actionTypes.createUserError,
  payload: { error },
});
